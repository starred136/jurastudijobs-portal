import React from "react";
import { useNavigate } from "react-router-dom";
import JobDetailsRedirect from "./JobDetailsRedirect";
import styles from "../styles/HomePage.module.css"; 

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleJobClick = () => {
    navigate(`/job/${job.id}`);
  };

  const handleCompanyClick = (e) => {
    e.stopPropagation();
    navigate(`/company/${job.companyId}`);
  };

  return (
    <section className={styles["job-card"]} onClick={handleJobClick}>
      <div className={styles["job-header"]}>
        <img
          src={job.logo}
          alt={`${job.company} Logo`}
          className={styles["company-logo"]}
          onClick={handleCompanyClick}
        />
        <div className={styles["job-details"]}>
          <span className={styles["company-name"]} onClick={handleCompanyClick}>
            {job.company}
          </span>
          <h2 className={styles["job-title"]}>{job.title}</h2>
        </div>
      </div>

      <div className={styles["job-contain"]}>
        <p className={styles.location}>{job.location}</p>

        <div className={styles["langue-container"]}>
          {job.languages && (
            <img
              src={job.languages}
              className={styles["language-image"]}
              alt="Language"
            />
          )}

          <JobDetailsRedirect jobId={job.id} />

          {job.semesterImage && (
            <img
              src={job.semesterImage}
              className={styles["semester-image"]}
              alt="Semester"
            />
          )}
        </div>

        <div className={styles["job-tags"]}>
          {job.tags.map((tag, index) => (
            <span key={index} className={styles["job-tag"]}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobCard;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import JobDetailsRedirect from "./JobDetailsRedirect";
// import styles from "../styles/HomePage.module.css"; 

// const JobCard = ({ job }) => {
//   const navigate = useNavigate();

//   // const handleJobClick = () => {
//   //   navigate(`/job/${job.id}`);
//   // };
//   const handleJobClick = () => {
//     // Convert title and company to URL-friendly format
//     const jobTitleSlug = job.title.toLowerCase().replace(/\s+/g, "-");
//     const companySlug = job.company.toLowerCase().replace(/\s+/g, "-");

//     navigate(`/job/${companySlug}/${jobTitleSlug}`);
//   };

//   const handleCompanyClick = (e) => {
//     e.stopPropagation();
//     navigate(`/company/${job.companyId}`);
//   };

//   return (
//     <section className={styles["job-card"]} onClick={handleJobClick}>
//       <div className={styles["job-header"]}>
//         <img
//           src={job.logo}
//           alt={`${job.company} Logo`}
//           className={styles["company-logo"]}
//           onClick={handleCompanyClick}
//         />
//         <div className={styles["job-details"]}>
//           <span className={styles["company-name"]} onClick={handleCompanyClick}>
//             {job.company}
//           </span>
//           <h2 className={styles["job-title"]}>{job.title}</h2>
//         </div>
//       </div>

//       <div className={styles["job-contain"]}>
//         <p className={styles.location}>{job.location}</p>

//         <div className={styles["langue-container"]}>
//           {job.languages && (
//             <img
//               src={job.languages}
//               className={styles["language-image"]}
//               alt="Language"
//             />
//           )}

//           <JobDetailsRedirect jobId={job.id} />

//           {job.semesterImage && (
//             <img
//               src={job.semesterImage}
//               className={styles["semester-image"]}
//               alt="Semester"
//             />
//           )}
//         </div>

//         <div className={styles["job-tags"]}>
//           {job.tags.map((tag, index) => (
//             <span key={index} className={styles["job-tag"]}>
//               {tag}
//             </span>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default JobCard;
