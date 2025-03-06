import React from "react";
import HomePageNavBar from "../components/HomePageNavBar";
import HomePageHeader from "../components/HomePageHeader";
import HomePageJobCardSection from "../components/HomePageJobCardSection";
import styles from "../styles/HomePage.module.css"; // Import as a module

const HomePage = () => {
  return (
    <div className={styles.homePage}>
      <HomePageNavBar />
      <HomePageHeader />
      <HomePageJobCardSection />
    </div>
  );
};

export default HomePage;
