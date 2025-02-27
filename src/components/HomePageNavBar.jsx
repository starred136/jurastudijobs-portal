import React from "react";

import "../styles/HomePage.css";


const HomePageNavBar = () => {
  return (
    <nav className="navbar">
      <a href="#" className="logo">
        <img src="/assets/images/jurastudijobs-logo.png" alt="Jurastudi Jobs Logo" />
      </a>
      <div className="menu">
        <ul>
          <li><a href="#">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default HomePageNavBar;
