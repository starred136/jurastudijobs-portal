import React from "react";
import styles from "../../styles/JobDetailsPage.module.css";

const CompanyJobDetail = ({ job }) => {
  return (
    <div className={styles.companyJobDetail}>
      <div className={styles.jobHeader}>
        <h1>
          <img src={job.logo} alt="Company Logo" className={styles.headerImage} />
          {job.title}
        </h1>
        <ul className={styles.jobDetails}>
          <li>
            <img src={job.languages} alt="Languages" />
            <span>Deutsch, Englisch</span>
          </li>
          <li>
            <img src="/assets/icons/location.svg" alt="Location" />
            <span>{job.location}</span>
          </li>
          <li>
            <img src={job.semesterImage} alt="Duration" />
            <span>1 Semester</span>
          </li>
        </ul>
      </div>

      <div className={styles.ligneBoutons}>
        {job.tags.map((tag, index) => (
          <button key={index} className={styles.btnNonCliquable}>
            {tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CompanyJobDetail;
