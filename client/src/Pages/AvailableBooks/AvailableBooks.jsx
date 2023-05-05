import React from 'react'
import classes from './AvailableBooks.module.css'
import BooksList from '../../UI/BooksList/BooksList'
import Button from '../../UI/Button/Button'
// import books from '../../'
const AvailableBooks = () => {
    const books = [
        {
          id: 1,
          name: "To Kill a Mockingbird",
          url: "https://www.example.com/book1",
          author: "Harper Lee",
          desc: "A Pulitzer Prize-winning novel set in the Depression-era South",
          price: 10.99
        },
        {
          id: 2,
          name: "1984",
          url: "https://www.example.com/book2",
          author: "George Orwell",
          desc: "A dystopian novel set in a totalitarian society",
          price: 8.99
        },
        {
          id: 3,
          name: "The Great Gatsby",
          url: "https://www.example.com/book3",
          author: "F. Scott Fitzgerald",
          desc: "A novel set in the Roaring Twenties about the decline of the American Dream",
          price: 12.99
        },
        {
          id: 4,
          name: "Brave New World",
          url: "https://www.example.com/book4",
          author: "Aldous Huxley",
          desc: "A novel set in a futuristic society that values stability and conformity over individuality",
          price: 9.99
        },
        {
          id: 5,
          name: "Pride and Prejudice",
          url: "https://www.example.com/book5",
          author: "Jane Austen",
          desc: "A romantic novel set in rural England during the early 19th century",
          price: 7.99
        }
      ];
      
        
  return (
    <>
        <div>
           <div className={classes.title}>
           <u><h1>Book For Sell</h1></u>
           </div>
           
           <div className={classes.allBooks}>
            <BooksList title={"Computer Science"} books={books}/>
            <BooksList title={"AIDS"} books={books}/>
            <BooksList title={"Information Tech"} books={books}/>
           </div>
        </div>
        
        <div className={classes.sell}>
              <h1>Wanna Sell ?</h1>
              <Button title={"Post an Ad"}/>.
             
             
        </div>
    </>
  )
}

export default AvailableBooks