import React from 'react'
import PropTypes from 'prop-types';
import styled from '@emotion/styled'

const HeaderContainer = styled.header`
    background-color : #26c6da;
    padding : 10px;
    font-weight: bold;
    color: #ffffff;
    text-align: center;
`;
const HeaderText = styled.h1`
    text-align: center;
    font-size: 2rem;
    margin: 0px;
    font-family: 'Slabo 27px', serif;
`
const Header = ({titulo}) => {
    return (
        <HeaderContainer>
            <HeaderText>{titulo}</HeaderText>
        </HeaderContainer>
    );
}
Header.propTypes = {
    titulo: PropTypes.string.isRequired
}
 
export default Header;