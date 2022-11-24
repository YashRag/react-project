import React,{useState} from "react";
import NewExpenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const DUMMY_EXPENSES = [
  { title: "car", amount: 249.5, data: new Date(2021, 2, 28) },
  { title: "bike", amount: 554, data: new Date(2022, 2, 28) },
];
const App = () => {
      const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
   const addExpenceHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    });

   };    
  return (
    <div>
      <NewExpense onAddExpense={addExpenceHandler} />
      <NewExpenses item={expenses} />
    </div>
  );
}

export default App;
