import Expenses from './components/Expenses';


function App() {

  const expenses = [
    { id:'e1', title: 'Car insurance', amount: 25.67, date: new Date(2021,5,9)},
    { id:'e2', title: 'Veterinary', amount: 42.60, date: new Date(2021,2,9)},
    { id:'e3', title: 'Groceries', amount: 31.50, date: new Date(2021,8,9)},
    { id:'e4', title: 'New monitor', amount: 31.50, date: new Date(2021,10,9)},
  ]

  return (
    <div>
      <Expenses expensesList={expenses}/>
      
    </div>
  )
}

export default App;
