import React from 'react'
import classes from './Button.module.css'
const Button = (props) => {
  return (
    <Button classname={classes.button}>
        <span className={classes.button_content}>{props.title}</span>
    </Button>
  )
}

export default Button