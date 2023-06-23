import "./Expenseslist.css";
import React from "react";
import ExpenseItem from "./ExpenseItem";
const Expenseslist = (props) =>{
    if(props.items.length===0){
        return <h2 className="expenses-list__fallback">Found no expenses.</h2>
    }
    return (
    <ul className="expenses-list">
        {props.items.map((expense) => (
            <ExpenseItem
             key={expense.id} //key matters because it tells react where to add item in a list of item which is imp for performace issues
             title={expense.title} 
             amount={expense.amount} 
             date={expense.date}
            />
      ))}
    </ul>
    );
}

export default Expenseslist