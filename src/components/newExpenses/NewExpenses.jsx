import React from 'react'
import { New_expense_card } from '../../style/NewExpenses.style'
import FormExpenses from './FormExpenses'


function NewExpenses(props) {

    const onSaveHandler = (newExpenceData) => {

        props.newExpenseHandler(newExpenceData)

        console.log(newExpenceData)
    }


    return (
        <New_expense_card disp={props.disp} >

            <FormExpenses onSaveHandler={onSaveHandler} hideBgHandler={props.hideBgHandler} />
        </New_expense_card>
    )
}

export default NewExpenses
