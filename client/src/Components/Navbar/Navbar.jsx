import React from "react";
import CartIcon from "../../assets/CartIcon.jsx";
import { useContext } from "react";
import classes from './Navbar.module.css'
import CartContext from "../../Context/cart-context.jsx";
const Navbar = (props) => {
  const cartCtx = useContext(CartContext);
  const numItems = cartCtx.items.reduce((curNum, item) => {
    return curNum + item.amount;
  }, 0);
  return (
    <>
      <nav>
        <div className={classes.logo}>Bookmate 📖</div>
        <div className={classes.cartSection}>
          <button onClick={props.onShowCart} className={classes.cartBtn}>
            <span>
              <CartIcon />
            </span>
            <span>{numItems}</span>
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
