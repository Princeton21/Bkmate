import React from "react";
import styles from "./Button.module.css";
const Button = ({children,onClick,type,bg}) => {
  return (
    <>
      <button
        type={type}
        className={styles.button}
        onClick={onClick}
        style={{ backgroundColor: `hsl(${bg}, 100%, 55%)` }}
      >
        <span className={styles.button_content}>{children}</span>
      </button>
    </>
  );
};

export default Button;
