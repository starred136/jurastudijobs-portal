import React from "react";
import ApplyButton from "./ApplyButton";
import CompanyJobDescription from "./CompanyJobDescription";
import CompanyJobDetail from "./CompanyJobDetail";
import styles from "../../styles/JobDetailsPage.module.css";

const CompanyJobOptionSection = ({ job }) => {
  return (
    <div className={styles["job-listing"]}> 
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
