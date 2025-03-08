import React from "react"; 
import styles from "../../styles/JobDetailsPage.module.css";

const ApplyButton = ({ job }) => {
  const handleApplyClick = () => {
    if (!job.applyLink) {
      alert("Kein Bewerbungslink für diesen Job verfügbar. Kommt bald. Bitte bleiben Sie dran.");
      return;
    }

    // Construct the dynamic application link with URL parameters
    const externalApplyUrl = `${job.applyLink}/Apply?From=Jurastudijobs.com&company=${encodeURIComponent(job.company)}&jobTitle=${encodeURIComponent(job.title)}`;

    // Redirect to the external job application link
    window.location.href = externalApplyUrl;
  };

  return (
    <button className={styles["apply-button"]} onClick={handleApplyClick}>
      Jetzt bewerben
    </button>
  );
};

export default ApplyButton;
