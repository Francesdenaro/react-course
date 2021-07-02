import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import './Expenses.css'

const Expenses = (props) => {
    return (
        <Card className="expenses">
            <ExpenseItem 
                title={props.expensesList[0].title} 
                amount={props.expensesList[0].amount} 
                date={props.expensesList[0].date} 
                key={props.expensesList[0].id} />
            <ExpenseItem 
                title={props.expensesList[1].title} 
                amount={props.expensesList[1].amount} 
                date={props.expensesList[1].date} 
                key={props.expensesList[1].id} />
            <ExpenseItem 
                title={props.expensesList[2].title} 
                amount={props.expensesList[2].amount} 
                date={props.expensesList[2].date} 
                key={props.expensesList[2].id} />
            <ExpenseItem 
                title={props.expensesList[3].title} 
                amount={props.expensesList[3].amount} 
                date={props.expensesList[3].date} 
                key={props.expensesList[3].id} />
        </Card>
    );

}

export default Expenses;