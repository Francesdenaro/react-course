import React, {useState} from "react";
import Expenses from './components/Expenses/Expenses';
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {

  const DUMMY_EXPENSES = [
    { id:'e1', title: 'Car insurance', amount: 25.67, date: new Date(2021,5,9)},
    { id:'e2', title: 'Veterinary', amount: 42.60, date: new Date(2021,2,9)},
    { id:'e3', title: 'Groceries', amount: 31.50, date: new Date(2020,8,9)},
    { id:'e4', title: 'New monitor', amount: 31.50, date: new Date(2021,10,9)},
  ]

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES)

  const addExpenseHandler = (expense) => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses}/>
    </div>
  )
}

export default App;
