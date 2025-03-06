import React from "react";
import styles from "../../styles/JobDetailsPage.module.css";

const CompanyJobDescription = ({ job }) => {
  return (
    <div className={styles.jobDescription}>
      <h2>Unternehmensbeschreibung</h2>
      <div dangerouslySetInnerHTML={{ __html: job.description }} />
    </div>
  );
};

export default CompanyJobDescription;
