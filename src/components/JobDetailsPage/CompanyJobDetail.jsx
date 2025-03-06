import React from "react";
import styles from "../../styles/JobDetailsPage.module.css";

const CompanyJobDetail = ({ job }) => {
  return (
    <div className={styles["company-job-detail"]}> 
      <div className={styles["job-header"]}> 
        <h1>
          <img src={job.logo} alt="Company Logo" className={styles["header-image"]} />
          {job.title}
        </h1>
        <ul className={styles["job-details"]}>
            <li>
              <img src="/assets/icons/world.png" alt="Languages" />
              <span>Deutsch, Englisch</span>
            </li>
            <li>
              <img src="/assets/icons/home.png" alt="Location" />
              <span>{job.location}</span>
            </li>
            <li>
              <img src="/assets/icons/time.png" alt="Duration" />
              <span>1 Semester</span>
            </li>
          </ul>
      </div>

      <div className={styles["ligne-boutons"]}> 
        {job.tags.map((tag, index) => (
          <button key={index} className={styles["btn-non-cliquable"]}> 
            {tag}
          </button>
        ))}
      </div>
      
      {/* Job Description */}
      <div className={styles["job-description"]}> 
        <div dangerouslySetInnerHTML={{ __html: job.description }} />
      </div>
    </div>
  );
};

export default CompanyJobDetail;
