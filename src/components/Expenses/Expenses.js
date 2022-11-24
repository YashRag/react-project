import React, {useState} from "react";
import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import './Expenses.css';
import ExpensesFilter from "./ExpenseFilter";
const  NewExpenses = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020');
  const filterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };
     return (
       <div>
         <Card className="expenses">
           <ExpensesFilter
             selected={filteredYear}
             onChangeFilter={filterChangeHandler}
           />
           {props.item.map(expense => <ExpenseItem title = {expense.title} amount={expense.amount} date={expense.data}/>)}
           
         </Card>
       </div>
     );
}

export default NewExpenses;