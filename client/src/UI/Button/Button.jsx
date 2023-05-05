import React from "react";
import classes from "./Button.module.css";
const Button = (props) => {
  return (
    <>
      <button className={classes.button}>
        <span className={classes.button_content}>{props.title}</span>
      </button>
    </>
  );
};

export default Button;
