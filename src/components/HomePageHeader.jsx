import React from "react";
import styles from "../styles/HomePage.module.css";

const HomePageHeader = () => {
  return (
    <header className={styles.header}>
      <h1>
        Finde schnell die passenden <br />
        <span className={styles.blue}>Jurastudenten-Jobs in Deutschland.</span>
      </h1>
    </header>
  );
};

export default HomePageHeader;
