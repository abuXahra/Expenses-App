

import React from 'react'
import { FiltExpensStyled } from '../../style/FilterExpenses.style'
import { years } from '../data/Years'

function FilterExpenses(props) {

    const onChangeSelectedHandler = (event) => {
        const valueSlected = event.target.value
        props.onChangeSelectHandler(valueSlected)
    }

    return (
        <FiltExpensStyled>
            <label>Filter Expenses: {props.valueSelected}</label>
            <select value={props.valueSelected} onChange={onChangeSelectedHandler}>
                {
                    years.map((item, index) => (
                        <option value={item.title} key={index}>{item.label}</option>
                    ))
                }
            </select>
        </FiltExpensStyled>
    )
}
export default FilterExpenses