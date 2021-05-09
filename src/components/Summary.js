import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {firstUppercase} from '../helper'

const ContainerSummary = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838f;
    color: #fff;
    margin-top: 1rem;
`
const Summary = ({datas}) => {

    const {brand, year, plan} = datas;
    if(brand === '' || year === '' || plan === ''){
        return null
    }
    return (
        <ContainerSummary>
            <h2>Resumen de Cotización</h2>
            <ul>
                <li>Marca: { firstUppercase(brand)}</li>
                <li>Año del auto: {year}</li>
                <li>Plan: { firstUppercase(plan)}</li>
            </ul>
        </ContainerSummary>
    );
}
Summary.propTypes = {
    datas: PropTypes.object.isRequired
}
export default Summary;