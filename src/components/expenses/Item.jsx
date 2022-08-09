import React from 'react'
import { DateItemStyled, ItemStyled } from '../../style/Item.style'
import Date from './Date'
import DeleteExpenses from './inc/DeleteExpenses'
import Prices from './Prices'




function Item(props) {

    // const styless = { display: "flex", alignItems: "center", flex: 1 }


    return (

        <ItemStyled >
            <DateItemStyled>
                <Date text={props.expenses.title} date={props.expenses.date} />
            </DateItemStyled>
            <Prices price={props.expenses.amount} />
            <DeleteExpenses deleteHandler={props.deleteHandler} />
        </ItemStyled>

    )
}

export default Item
