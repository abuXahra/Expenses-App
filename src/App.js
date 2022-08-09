import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newExpenses/NewExpenses";
import { BodyStyled } from "./style/body.style";
import { Container } from "./style/Expense.style";
import React, { useState } from "react";
import { DUMMY_EXPENSES } from "./components/data/ExpensesDummy";
import Head from "./components/expenses/Head";
import AddExpense from "./components/expenses/inc/AddExpense";
import { YEARS } from "./components/data/Years";




function App() {


  //stateful Dummy object  
  const [expenses, setexpenses] = useState(DUMMY_EXPENSES);


  // Adding User Input to Dummy object
  const newExpenseHandler = (newExpenseItem) => {
    setexpenses((prevExenses) => {
      return [newExpenseItem, ...prevExenses]
    });
    console.log(newExpenseItem)
  }

  const [disp, setdisp] = useState("none")
  const [bghide, setbghide] = useState("flex")

  const hideBgHandler = () => {
    setdisp("flex");
    setbghide("none");
  }

  const hideBgHandler2 = () => {
    setdisp("none");
    setbghide("flex");
  }


  const [years, setyear] = useState(YEARS)

  // saving the new entered year to year list
  const onSaveInputYearHandler = (newYearItem) => {
    setyear((prevYear) => {
      return [newYearItem, ...prevYear]
    })
  }


  //delete expense handler
  const deleteHandler = (index) => {
    const newExpensList = expenses;
    newExpensList.splice(index, 1);
    setexpenses([...newExpensList])
  }

  return (
    <BodyStyled>
      <Head />

      {/* Add Expenses Button */}
      <AddExpense
        hideBgHandler={hideBgHandler}
        bghide={bghide} />

      {/* Add Expenses form */}
      <NewExpenses newExpenseHandler={newExpenseHandler} disp={disp} hideBgHandler={hideBgHandler2} />

      {/* Expenses */}
      <Expenses
        years={years}
        expenses={expenses}
        onSaveInputYearHandler={onSaveInputYearHandler}
        deleteHandler={deleteHandler}
      />
    </BodyStyled>
  );
}
export default App;



