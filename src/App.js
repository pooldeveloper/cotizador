import styled from '@emotion/styled';
import React, {useState} from 'react'
import Header from './components/Header'
import Form from './components/Form'
import Summary from './components/Summary';
import Result from './components/Result';
import Spinner from './components/Spinner';

const Container = styled.div`
  max-width: 600px;
  margin: 0px auto;
`

const FormContainer = styled.div`
  max-width: 600px;
  margin: 0px auto;
  background-color: #ffffff;
  padding: 3rem;
`
function App() {

  const[summary, setSummary] = useState({
    quotation: 0,
    datas:{
      brand: '',
      year: '',
      plan: ''
    }
  });
  const {datas, quotation} = summary;
  const [loadSpinner, setLoadSpinner] = useState(false) ;
  return (
   <Container>
      <Header
        titulo = {'Cotizador de Seguros'}
      />
      <FormContainer>
          <Form
            setSummary = {setSummary}
            setLoadSpinner = {setLoadSpinner}
          />
          {loadSpinner ? <Spinner/> : null}
          <Summary
            datas = {datas}
          />
          {!loadSpinner
          ? 
            <Result
              quotation = {quotation}
            />
          : null}
      </FormContainer>
   </Container>
  );
}

export default App;
