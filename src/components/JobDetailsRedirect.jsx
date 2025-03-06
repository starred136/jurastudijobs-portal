import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomePage.module.css"; 

const JobDetailsRedirect = ({ jobId }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate(`/job/${jobId}`);
  };

  return (
    <button className={styles["apply-button"]} onClick={handleApplyClick}>
      Bewerben <img src="/assets/icons/Login.png" alt="Login Icon" />
    </button>
  );
};

export default JobDetailsRedirect;
