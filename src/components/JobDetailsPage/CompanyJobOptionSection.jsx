import React from "react";
import CompanyJobDetail from "./CompanyJobDetail";
import CompanyJobDescription from "./CompanyJobDescription";
import ApplyButton from "./ApplyButton";
import styles from "../../styles/JobDetailsPage.module.css";

const CompanyJobOptionSection = ({ job }) => {
  return (
    <div className={styles.jobListing}>
      {/* Company Job Details */}
      <CompanyJobDetail job={job} />

      {/* Job Description */}
      <CompanyJobDescription job={job} />

      {/* Apply Button */}
      <ApplyButton job={job} />
    </div>
  );
};

export default CompanyJobOptionSection;
