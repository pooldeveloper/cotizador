import React, {useState} from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {differenceYears, calculateBrand, calculatePlan} from '../helper.js'


const Field = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1rem;

` ;

const Label = styled.div`
  flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance:none;
`;

const InputRadio = styled.input`
  margin: 0 1rem;
`;

const Button = styled.button`
    background-color: #00838f;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    color: #fff;
    transition: background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26c6da;
        cursor: pointer;
    }
`;
const Error = styled.div`
    background-color: red;
    color: white;
    padding: 1rem;
    width: 100%;
    text-align: center;
    margin-bottom: 2rem;
`

const Form = ({setSummary, setLoadSpinner}) => {

    const [datas, setDatas] = useState({
        brand: '',
        year: '',
        plan: ''
    })
    const {brand, year, plan} = datas;

    const[error, setError]= useState(false);

    const handleChange = e =>{
        setDatas({
            ...datas,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if(brand === '' || year === '' || plan === ''){
           setError(true);
           return;
        }
        setError(false)

        //Base de 2000
        let result = 2000;
        //Obtener la diferencia de años
        const difference = differenceYears(year);
        //Por cada año  hay que restar el 3%
        result -= ((difference * 3) * result) /100;

        //Americano 15%
        //Asiatico 5%
        //Europeo 30%
        result += calculateBrand(brand)*result

        //Basico 20%
        //Completo 50%
        result += Number(parseFloat(calculatePlan(plan)*result).toFixed(2));
        setLoadSpinner(true);
        setTimeout(() => {
            setLoadSpinner(false);
             //Pasar datos al componente principal
            setSummary({
                quotation: Number(result),
                datas
            })
        }, 3000);
    }
    return (
        <form
        onSubmit = {handleSubmit}
        >
            {error ? <Error>Todos los campos son obligatorios</Error>  : null}
            <Field>
                <Label>Marca</Label>
                <Select
                    name = "brand"
                    value = {brand}
                    onChange = {handleChange}
                >
                    <option>-- Seleccione --</option>
                    <option value = "americano">Americano</option>
                    <option value = "europeo">Europeo</option>
                    <option value = "asiatico">Asiatico</option>
                </Select>
            </Field>
            <Field>
                <Label>Año</Label>
                <Select
                    name = "year"
                    value = {year}
                    onChange = {handleChange}
                >
                <option value="">-- Seleccione --</option>
                    <option value="2023">2023</option>
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                </Select>
            </Field>
            <Field>
                <Label>Plan</Label>
                <InputRadio
                    type = "radio"
                    value = "basico"
                    name = "plan"
                    checked = {plan === "basico"}
                    onChange = {handleChange}
                />Basico
                
                 <InputRadio
                    type = "radio"
                    value = "completo"
                    name = "plan"
                    checked = {plan === "completo"}
                    onChange = {handleChange}
                />Completo
            </Field>
            <Button type="submit">Cotizar</Button>
        </form>
    );
}
Form.propTypes = {
    setSummary: PropTypes.func.isRequired,
    setLoadSpinner: PropTypes.func.isRequired
}
 
export default Form;