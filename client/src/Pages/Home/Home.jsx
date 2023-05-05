import React from "react";
import classes from "./Home.module.css";
import about from "../../assets/about.svg";
import github from "../../assets/github.svg";
import landing from "../../assets/landing.svg";
import Card from "../../UI/Card/Card";

const Home = (props) => {
  return (
    <div className={classes.home}>
      <div className={classes.landing}>
        <div className={classes.landingContent}>
          <h1>
            Book<span>Mate</span>
          </h1>
          <hr />
          <p className={classes.landpara}>
            A website that helps you buy and sell second hand books. It has chat
            feature to directly contact with the seller. You can post your ads
            for selling books as well. There is option to filter and search for
            the books.
          </p>
        </div>
        <div>
          <img src={landing} className={classes.landingSvg} />
        </div>
      </div>

      <div className={classes.btns}>
        <button className={classes.buy}>Buy</button>
        <button className={classes.sell}>Sell</button>
      </div>

      <div className={classes.books}>
        <div className={classes.bookL}>
          <Card className={classes.big}></Card>
        </div>
        <div>
          <h1 className={classes.btitle}>
            Second Hand<span>Books</span>
          </h1>
          <div className={classes.hrv}>
            <hr />
            <a>View all</a>
          </div>
          <div className={classes.booksCards}>
            <Card className={classes.crd}></Card>
            <Card className={classes.crd}></Card>
            <Card className={classes.crd}></Card>
          </div>
        </div>
      </div>

      <div className={classes.about}>
        <div className={classes.aboutBg}>
          <img className={classes.aboutSvg} src={about} />
        </div>

        <div className={classes.aboutRight}>
          <h1>
            Know <span>Us</span>
          </h1>
          <hr />
          <p>
            A website that helps you buy and sell second hand books. It has chat
            feature to directly contact with the seller. You can post your ads
            for selling books as well. There is option to filter and search for
            the books.
          </p>
          <div className={classes.git}>
            <h5>Loved Our Project ? 🌟</h5>
            <a href="https://github.com/Princeton21/Bkmate"><img src={github} className={classes.github}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
