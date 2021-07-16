import React, { useState } from "react";
import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card'
import ExpensesFilter from "./ExpensesFilter";
import './Expenses.css'

const Expenses = (props) => {
    const [filteredYear, setFilteredYear] = useState('2020');

    const filterYearHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    }
    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={filteredYear} onYearFilter={filterYearHandler} />
                {props.items ? props.items.map((expense) => 
                    <ExpenseItem 
                        title={expense.title} 
                        amount={expense.amount} 
                        date={expense.date} 
                        key={expense.id} 
                    />
                ) : null }
            </Card>
        </div>
    );

}

export default Expenses;
