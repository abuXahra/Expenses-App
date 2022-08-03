import React, { useState } from 'react'
import {
    NewExpenseCardInner,
    New_expense_container_button,
    NewEexpenseContainer,
    New_expense__title,
    New_expense__amount,
    New_expense__date

} from '../../style/FormExpenses.style';



function FormExpenses(props) {

    const [enteredTitle, setenteredTitle] = useState("");
    const [enteredAmount, setenteredAmount] = useState("");
    const [enteredDate, setenteredDate] = useState("");

    const titleChangeHandler = (event) => {
        setenteredTitle(event.target.value)
    }

    const amountChangeHandler = (event) => {
        setenteredAmount(event.target.value)
    }
    const dateChangeHandler = (event) => {
        setenteredDate(event.target.value)
    }


    const formSubmitionHandler = (event) => {

        event.preventDefault();

        const newExpenses = {
            id: Math.random().toString(),
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }


        props.onSaveHandler(newExpenses)
        console.log(newExpenses);
        setenteredAmount("")
        setenteredTitle("")
        setenteredDate("")
    }

    return (
        <form onSubmit={formSubmitionHandler}>
            <NewExpenseCardInner>
                <NewEexpenseContainer>
                    <New_expense__title>
                        <label>Title {enteredTitle}</label>
                        <input
                            type="text"
                            required
                            onChange={titleChangeHandler}
                            value={enteredTitle}
                        />
                    </New_expense__title>

                    <New_expense__amount>
                        <label>Amount: {enteredAmount}</label>
                        <input
                            type="number"
                            min="0.01"
                            step="0.01"
                            onChange={amountChangeHandler}
                            required
                            value={enteredAmount}
                        />
                    </New_expense__amount>
                </NewEexpenseContainer>
                <NewEexpenseContainer>
                    <New_expense__date>
                        <label>Date {enteredDate}</label>
                        <input
                            type="date"
                            min="2015-01-01"
                            max="2022-12-01"
                            onChange={dateChangeHandler}
                            value={enteredDate}
                            required
                        />
                    </New_expense__date>
                </NewEexpenseContainer>
                <New_expense_container_button>
                    <button>Add New Expenses</button>
                </New_expense_container_button>

            </NewExpenseCardInner>
        </form>
    )
}

export default FormExpenses

