// import React from "react";
// import styles from "../styles/HomePage.module.css";

// const HomePageNavBar = () => {
//   return (
//     <nav className={styles.navbar}>
//       <a href="#" className={styles.logo}>
//         <img src="/assets/images/jurastudijobs-logo.png" alt="Jurastudi Jobs Logo" />
//       </a>
//       <div className={styles.menu}>
//         <ul>
//           <li>
//             <a href="#">Blog</a>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default HomePageNavBar;

import React, { useState } from "react";
import styles from "../styles/HomePage.module.css";

const HomePageNavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.logo}>
        <img
          src="/assets/images/jurastudijobs-logo.png"
          alt="Jurastudi Jobs Logo"
          className={styles["logo-img"]}
        />
      </a>

      {/* Mobile Menu Toggle */}
      <button
        className={styles["menu-toggle"]}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      <div className={`${styles.menu} ${menuOpen ? styles.open : ""}`}>
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
