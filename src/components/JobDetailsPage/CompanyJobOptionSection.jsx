// import React from "react";
// import CompanyJobDetail from "./CompanyJobDetail";
// import CompanyJobDescription from "./CompanyJobDescription";
// import ApplyButton from "./ApplyButton";
// import styles from "../../styles/JobDetailsPage.module.css";

// const CompanyJobOptionSection = ({ job }) => {
//   return (
//     <div className={styles.jobListing}>
//       {/* Company Job Details */}
//       <CompanyJobDetail job={job} />

//       {/* Job Description */}
//       <CompanyJobDescription job={job} />

//       {/* Apply Button */}
//       <ApplyButton job={job} />
//     </div>
//   );
// };

// export default CompanyJobOptionSection;

import React from "react";
import ApplyButton from "./ApplyButton";
import CompanyJobDescription from "./CompanyJobDescription";
import styles from "../../styles/JobDetailsPage.module.css";

const CompanyJobOptionSection = ({ job }) => {
  return (
    <div className={styles.jobListing}>
      {/* Company Job Details */}
      <div className={styles.companyJobDetail}>
        <div className={styles.jobHeader}>
          <h1>
            <img src={job.logo} alt="Company Logo" className={styles.headerImage} />
            {job.title}
          </h1>
          <ul className={styles.jobDetails}>
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
        <div className={styles.ligneBoutons}>
          {job.tags.map((tag, index) => (
            <button key={index} className={styles.btnNonCliquable}>
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Job Description */}
      <CompanyJobDescription job={job} />

      {/* Apply Button */}
      <ApplyButton job={job} />
    </div>
  );
};

export default CompanyJobOptionSection;
