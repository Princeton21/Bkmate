import React, { useRef, useState } from "react";
import classes from './BooksForm.module.css'
import Input from "../../../Utils/Input";
const BooksForm = (props) => {
    const [amountIsValid, setAmountIsValid]=useState(true);
    const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountInputRef.current.value;
    const enteredAmountNum = +enteredAmount;
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNum < 1 ||
      enteredAmountNum > 5
    ) {
        setAmountIsValid(false)
      return;
    }

    props.onAddToCart(enteredAmountNum)
  };
  return (
    <form onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      {/* <button>+ Add</button> */}
      <button className={classes.button}>
      <span className={classes.button__text}>Add Item</span>
      <span className={classes.button__icon}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          viewBox="0 0 24 24"
          strokeWidth="2"
          strokeLinejoin="round"
          strokeLinecap="round"
          stroke="currentColor"
          height="24"
          fill="none"
          className={classes.svg}
        >
          <line y2="19" y1="5" x2="12" x1="12"></line>
          <line y2="12" y1="12" x2="19" x1="5"></line>
        </svg>
      </span>
    </button>
      {!amountIsValid && <p>please enter a valid amount (1-5)</p>}
    </form>
  );
};

export default BooksForm;
