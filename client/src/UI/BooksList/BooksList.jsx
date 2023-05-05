import React from 'react';
import Card from '../Card/Card';

const BooksList = (props) => {
  return (
    <>
        <h1>{props.title}</h1>
        <div>
           {props.books.map((book) => {
                return (
                     <div key={book.id}>
                          <h2>{book.name}</h2>
                          <img src={book.url}/>
                          <p>{book.author}</p>
                          <p>{book.desc}</p>
                          <p>{book.price}</p>
                     </div>
                )
           })}
        </div>
    </>
  )
}

export default BooksList;
