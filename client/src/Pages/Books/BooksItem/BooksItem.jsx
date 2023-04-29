import React,{useContext} from 'react'
import BooksForm from './BooksForm'
import CartContext from '../../../Context/cart-context';
import classes from './BooksItem.module.css'
import Card from '../../../Utils/Card/Card';

const BooksItem = (props) => {
  const cartCtx = useContext(CartContext)
  const price = `$${props.price.toFixed(2)}`;
  const addToCartHandler = amount =>{
    cartCtx.addItem({
      id:props.id,
      url:props.url,
      name:props.name,
      amount:amount,
      price: props.price
    })
  };
  return (
    // <Card>
    <div className={classes.bCard}>
       <div className={classes.BookImg}><img src={props.url}/></div>
       <div className={classes.bookInfo}>
       <div className={classes.bookName}><h3>{props.name}</h3>
       <div className={classes.desc}>{props.description}</div>
       <div className={classes.price}>{price}</div>
       </div>
       </div>
       <div>
          <BooksForm onAddToCart={addToCartHandler}/>
       </div>
    </div>
    // </Card>
  )
}

export default BooksItem