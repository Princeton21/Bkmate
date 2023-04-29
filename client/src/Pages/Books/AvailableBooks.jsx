import React from "react";
import Card from "../../Utils/Card/Card";
import BooksItem from "./BooksItem/BooksItem";
import classes from "./AvailableBooks.module.css";

const AvailableBooks = () => {
  const DUMMY_BOOKS = [
    {
      id: "b1",
      url:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcR1T9Ne7onViPdEOfjy8yHr0xOnYBnzuNHmlUNtR0moEEXWCqgba3u-1hwFqDx4wW0Z5ua3ZHEqMVjC-CfDzKUiFNJRHUreONGjlQkDhlq5&usqp=CAE",
      name: "Maths",
      description: "A maths book",
      price: 220,
    },
    {
      id: "b2",
      url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQY4-3HgeMnwESObTq8JGypxTiHp2Q30HvIbf82kBtY2Cq14nNkph9FNJOtighX5sNcDCAcjlZcwcgUJIUxs8_MOpirFtpp82tLcs7D5jPz&usqp=CAE",
      name: "AI",
      description: "An aI book",
      price: 230,
    },
    {
      id: "b3",
      url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQY4-3HgeMnwESObTq8JGypxTiHp2Q30HvIbf82kBtY2Cq14nNkph9FNJOtighX5sNcDCAcjlZcwcgUJIUxs8_MOpirFtpp82tLcs7D5jPz&usqp=CAE",
      name: "Web tech",
      description: "A web tech book",
      price: 250,
    },
    {
      id: "b2",
      url: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQY4-3HgeMnwESObTq8JGypxTiHp2Q30HvIbf82kBtY2Cq14nNkph9FNJOtighX5sNcDCAcjlZcwcgUJIUxs8_MOpirFtpp82tLcs7D5jPz&usqp=CAE",
      name: "CC",
      description: "A Cloud Computing book",
      price: 230,
    },
  ];
  const BooksList = DUMMY_BOOKS.map((book) => (
    <BooksItem
      key={book.id}
      id={book.id}
      url={book.url}
      name={book.name}
      description={book.description}
      price={book.price}
    />
  ));
  return (
    <section className={classes.cards}>
      <ul>{BooksList}</ul>
    </section>
  );
};

export default AvailableBooks;
