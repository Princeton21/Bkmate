import React from 'react';
import classes from './BooksList.module.css';
import Card from '../Card/Card';
const BooksList = (props) => {
  return (
    <>
        
        <div >
        <h1 className={classes.dept}>{props.title}</h1>
           <div className={classes.books}>
         
           {props.books.map((book) => {
                return (
                    <Card>
                     <div key={book.id}>
                          <h2 className={classes.bookName}>{book.name}</h2>
                          <img src={book.url}/>
                          <p>{book.author}</p>
                          <p>{book.desc}</p>
                          <p>{book.price}</p>
                     </div>
                     </Card>
                )
           })}
           
           </div>
           
        </div>
    </>
  )
}

export default BooksList;
