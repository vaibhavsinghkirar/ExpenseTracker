import React,{useState} from 'react';
import ExpensesFilter from './ExpensesFilter';
import Card from '../ui/Card';
import Expenseslist from './Expenseslist';
import './Expenses.css';
import ExpensesChart from './ExpensesChart'
const Expenses = (props) => {
  const [filteredyear,setfilteryear] = useState('2020')
  const filterChangeHandler = (selectedYear)=>{
    setfilteryear(selectedYear);
  };
  //create a new array based on the filtered year using filter method
  const filteredExpenses = props.items.filter((expense)=>{
    return expense.date.getFullYear().toString()===filteredyear;
  })
  //conditional jsx
  
  return (
    <div>
    <Card className="expenses">
      <ExpensesFilter selected={filteredyear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses = {filteredExpenses} ></ExpensesChart>
      <Expenseslist items = {filteredExpenses}></Expenseslist>
    </Card>
    </div>
  );
}

export default Expenses;
