import React, { useState } from 'react'
import { Container } from '../../style/Expense.style'
import NewExpenses from '../newExpenses/NewExpenses'
import FilterExpenses from './FilterExpenses'
import Item from './Item'

function Expenses(props) {

    const [filterYear, setfilterSeleted] = useState(props.years[0].title);



    const onChangeSelectHandler = (valueSelected) => {
        setfilterSeleted(valueSelected);
    }

    // filter by year
    const filteredExpenses = props.expenses.filter((expense) => {
        return expense.date.getFullYear().toString() === filterYear;
    })

    //new Date receiving function
    const onInputYearHandler = (newValue) => {
        props.onSaveInputYearHandler(newValue);
        console.log(newValue);
    }

    return (
        <Container>
            <FilterExpenses
                valueSelected={filterYear}
                onChangeSelectHandler={onChangeSelectHandler}
                onInputYearHandler={onInputYearHandler}
                years={props.years}
            />
            {/* {expenseContents} */}

            {
                filteredExpenses.length > 0 ? (filteredExpenses.map((item) => (
                    <Item key={item.id} expenses={item} />
                ))) : (
                    <p>NO ITEM FOUND</p>
                )

            }



        </Container>
    )
}

export default Expenses



// const [dp, setdp] = useState(false);
//     const [icon, seticon] = useState("+")

//     const displayItems = () => {
//         setdp(true);
//         seticon("x");
//     }


// <button onClick={displayItems} style={{ color: "white", backgroundColor: "black", cursor: "pointer" }}>{icon}</button>
//             {
//                 dp ? <Item /> : null
//             }