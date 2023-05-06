import React from "react";
import styles from "./Home.module.css";
import about from "../../assets/about.svg";
import github from "../../assets/github.svg";
import landing from "../../assets/landing.svg";
import Card from "../../UI/Card/Card";

const Home = (props) => {
  return (
    <div className={styles.home}>
      <div className={styles.landing}>
        <div className={styles.landingContent}>
          <h1 className={styles.btitle}>
            Book<span>Mate</span>
          </h1>
          <hr />
          <p className={styles.landpara}>
            A website that helps you buy and sell second hand books. It has chat
            feature to directly contact with the seller. You can post your ads
            for selling books as well. There is option to filter and search for
            the books.
          </p>
        </div>
        <div>
          <img src={landing} className={styles.landingSvg} />
        </div>
      </div>

      <div className={styles.btns}>
        <button className={styles.buy}>Buy</button>
        <button className={styles.sell}>Sell</button>
      </div>

      <div className={styles.books}>
        <div className={styles.bookL}>
          <Card className={styles.big}></Card>
        </div>
        <div>
          <h1 className={styles.btitle}>
            Second Hand<span>Books</span>
          </h1>
          <div className={styles.hrv}>
            <hr />
            <a>View all</a>
          </div>
          <div className={styles.booksCards}>
            <Card className={styles.crd}></Card>
            <Card className={styles.crd}></Card>
            <Card className={styles.crd}></Card>
          </div>
        </div>
      </div>

      <div className={styles.about}>
        <div className={styles.aboutBg}>
          <img className={styles.aboutSvg} src={about} />
        </div>

        <div className={styles.aboutRight}>
          <h1 className={styles.btitle}>
            Know <span>Us</span>
          </h1>
          <hr />
          <p className={styles.knowUsPara}>
            A website that helps you buy and sell second hand books. It has chat
            feature to directly contact with the seller. You can post your ads
            for selling books as well. There is option to filter and search for
            the books.
          </p>
          <div className={styles.git}>
            <h5 className={styles.projectInfo}>Loved Our Project ? 🌟</h5>
            <a href="https://github.com/Princeton21/Bkmate"><img src={github} className={styles.github}/></a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
