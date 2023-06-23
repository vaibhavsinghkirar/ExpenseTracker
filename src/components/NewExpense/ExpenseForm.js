import "./ExpenseForm.css";
import React,{useState} from 'react';
const ExpenseForm = (props) => {
    //taking 3 states for 3 different elements
    // note we can also use only one state as a part of obejct as:-
    // const [enteredInput,setInput] = useState({
    //     enteredtitle: '',
    //     enterdamount: '',
    //     enterddate: ''
    // });
    //whenever we update state and depend upon prev state the we cant do like this below we have to call a function 
    // const inputChangerHandeler = (event) =>{
    //     // setInput({ //depending on prev state
    //         // ...enteredInput, // using spread to not change the inital value as here we are only setting title so we have to look upon other states as well or otherwise they might get lost if we dont
    //         // enteredtitle: event.target.value,
    //     // });
    //     setInput((prevState)=>{
    //         return {...prevState,enteredtitle: event.target.value}; //safer way to update the state as it depends on prev state
    //     })
    // };
    //multiple state approach (no dependency on prev state)
    const[enteredtitle,setEnteredTitle] = useState('');
    const[enterdamount,setEnteredAmount] = useState('');
    const[enterddate,setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
        setEnteredTitle(event.target.value);
    
    };
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value);
    };
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value);
    };
    const submitHandler = (event) =>{
        event.preventDefault(); //to stay on the current page 
        const expenseData = {
            title: enteredtitle,
            amount: +enterdamount,
            date: new Date(enterddate)
        }
        props.onSaveExpenseData(expenseData); 
        //2 way binding using value property
        setEnteredTitle('');
        setEnteredDate('');
        setEnteredAmount('');
    };
    return (   //defalut property of browser if we have submit button but the page reloads so we have to disable it
        <form onSubmit={submitHandler}> 
            <div className='new-expense__controls'>
                <div className="new-expense__control">
                    <label>Title</label>
                    <input value={enteredtitle} type='text' onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input value={enterdamount} type='number' min='0.01' step='0.01' onChange={amountChangeHandler}></input>

                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input value={enterddate} type='date' min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
                </div> 
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type='submit' >Add expense</button>
            </div>
        </form>
    );
}
 
export default ExpenseForm;