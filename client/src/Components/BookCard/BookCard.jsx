import React from 'react';
import classes from './BookCard.module.css';

function BookCard() {
  return (
    <>
      <main>
        <div className={classes['book-card']}>
          <div className={classes['book-card__cover']}>
            <div className={classes['book-card__book']}>
              <div className={classes['book-card__book-front']}>
                <img className={classes['book-card__img']} src="https://i.ibb.co/gTvbqnQ/harry-potter.jpg" alt="book cover" />
              </div>
              <div className={classes['book-card__book-back']}></div>
              <div className={classes['book-card__book-side']}></div>
            </div>
          </div>
          <div>
            <h2 className={classes['book-card__title']}>Harry Potter e a Pedra Filosofal</h2>
            <p className={classes['book-card__author']}>J. K. Rowling</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default BookCard;
