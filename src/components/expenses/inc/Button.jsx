import React from 'react';
import { ButtonStyled } from '../../../style/Button.style'

const Button = (props) => {
    return (
        <ButtonStyled onClick={props.hideBgHandler}>{props.text}</ButtonStyled>
    );
}

export default Button;
