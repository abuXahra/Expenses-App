

import React from 'react'
import { FiltExpensStyled, AddDateStyled } from '../../style/FilterExpenses.style'
import { years } from '../data/Years'
import { BiCommentAdd } from 'react-icons/bi'

function FilterExpenses(props) {

    const onChangeSelectedHandler = (event) => {
        const valueSlected = event.target.value
        props.onChangeSelectHandler(valueSlected)
    }

    return (
        <FiltExpensStyled>
            <label>Filter Expenses:
                <AddDateStyled>
                    <BiCommentAdd onClick={""} />
                </AddDateStyled>
            </label>
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