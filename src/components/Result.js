import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

const Message = styled.p`
    background-color: rgb(127, 224, 237);
    margin-top: 2rem;
    padding: 1rem;
    text-align: center
`
const DivQuotation = styled.div`
    background-color: rgb(127, 224, 237);
    border: 1px solid #2c6cda;
    padding: .5rem;
    text-align: center;
    margin-top: 1rem;
    position: relative;
`
const TextQuotation = styled.p`
    text-transform: uppercase;
    padding: 1rem;
    text-align: center;
    font-weight: bold;
    margin: 0;
`
const Result = ({quotation}) => {
    return (  
        (quotation === 0)
        ?
            <Message>Elige marca, año, plan y tipo de seguro</Message>
        : 
            <DivQuotation>
              <TransitionGroup
                component = "span"
                className = "resultado"
              >
                <CSSTransition
                    classNames = "resultado"
                    key={quotation}
                    timeout={{enter:500, exit: 500}}
                >
                <TextQuotation> El total es: $ <span> {quotation} </span> </TextQuotation>
                </CSSTransition>
              </TransitionGroup>
            </DivQuotation>
    );
}
Result.propTypes = {
    quotation: PropTypes.number.isRequired
}
export default Result;