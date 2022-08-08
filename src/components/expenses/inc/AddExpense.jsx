import React, { useState } from 'react';
import { AddExpStyled } from '../../../style/AddExpense.style';
import Button from './Button';

const AddExpense = (props) => {

    // const [dsp, setdsp] = useState({ display: "510674" })



    return (
        <AddExpStyled bghide={props.bghide} >
            <Button text="Add New Expenses" hideBgHandler={props.hideBgHandler} />
        </AddExpStyled>
    );
}

export default AddExpense;
