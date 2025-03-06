import React from "react";
import styles from "../../styles/JobDetailsPage.module.css";

const CompanyJobDescription = ({ job }) => {
  return (
    <div className={styles["job-description"]}>
          <div dangerouslySetInnerHTML={{ __html: job.description }} />
    </div>
  );
};

export default CompanyJobDescription;
