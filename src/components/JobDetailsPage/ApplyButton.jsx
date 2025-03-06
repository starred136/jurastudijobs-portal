import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/JobDetailsPage.module.css";

const ApplyButton = ({ job }) => {
  const navigate = useNavigate();

  const handleApplyClick = () => {
    navigate(`/apply/${job.id}`);
  };

  return (
    <button className={styles.applyButton} onClick={handleApplyClick}>
      Jetzt bewerben
    </button>
  );
};

export default ApplyButton;
