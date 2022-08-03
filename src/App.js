import Expenses from "./components/expenses/Expenses";
import NewExpenses from "./components/newExpenses/NewExpenses";
import { BodyStyled } from "./style/body.style";
import { Container } from "./style/Expense.style";
import React, { useState } from "react";
import { DUMMY_EXPENSES } from "./components/data/ExpensesDummy";
import Head from "./components/expenses/Head";




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


  return (
    <BodyStyled>
      <Head />
      <NewExpenses newExpenseHandler={newExpenseHandler} />
      <Expenses expenses={expenses} />
    </BodyStyled>
  );
}
export default App;



