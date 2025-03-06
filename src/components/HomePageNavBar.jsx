import React from "react";
import styles from "../styles/HomePage.module.css";

const HomePageNavBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href="#" className={styles.logo}>
        <img src="/assets/images/jurastudijobs-logo.png" alt="Jurastudi Jobs Logo" />
      </a>
      <div className={styles.menu}>
        <ul>
          <li>
            <a href="#">Blog</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default HomePageNavBar;
