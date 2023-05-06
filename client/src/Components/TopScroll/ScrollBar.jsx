import React, { useEffect, useState } from "react";
import styles from "./ScrollBar.module.css";

const ScrollBar = () => {
  const [scrollPosition, setScrollPosition] = useState(100);
  const handleScroll = () => {
    const position = window.pageYOffset;
    const maxScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;
    const progress =100- Math.round((position / maxScroll) * 100);
    setScrollPosition(progress);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      console.log(scrollPosition);
    };
  });
    return (
      <>
        <div className={styles.bar}></div>
        <div
          className={styles.white}
          style={{
            width: `${scrollPosition}%`,
          }}
        ></div>
      </>
    );
};

export default ScrollBar;
