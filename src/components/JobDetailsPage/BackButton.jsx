// import React from "react";
// import { useNavigate } from "react-router-dom";
// import styles from "../../styles/JobDetailsPage.module.css";

// const ApplyButton = ({ job }) => {
//   const navigate = useNavigate();

//   const handleApplyClick = () => {
//     navigate(`/apply/${job.id}`);
//   };

//   return (
//     <button className={styles.applyButton} onClick={handleApplyClick}>
//       Jetzt bewerben
//     </button>
//   );
// };

// export default ApplyButton;

import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/JobDetailsPage.module.css"; // Ensure this file exists

const BackButton = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Goes back to the previous page
  };

  return (
    <div className={styles.backButton} onClick={handleBackClick} role="button">
      <img
        decoding="async"
        width="100"
        height="34"
        src="https://jurastudijobs.com/wp-content/uploads/2025/02/Property-1Default.png"
        alt="Back"
      />
    </div>
  );
};

export default BackButton;
