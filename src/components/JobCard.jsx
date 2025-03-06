import React from "react";
import { useNavigate } from "react-router-dom";
import styles from "../styles/HomePage.module.css";

// Helper function to create URL-friendly strings
const slugify = (text) =>
  encodeURIComponent(
    text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-")
// .replace(/[^\w\-]+/g, ""
    // .replace(/[^\w\-\(\)\/]+/g, "" // Keep parentheses and slashes
  );

const JobCard = ({ job }) => {
  const navigate = useNavigate();

  const handleJobClick = () => {
  const companySlug = slugify(job.company);
  const jobTitleSlug = slugify(job.title);
  navigate(`/${companySlug}/job/${jobTitleSlug}`);
};

  const handleCompanyClick = (e) => {
    e.stopPropagation();
    const companySlug = slugify(job.company);
    navigate(`/${companySlug}`);
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

          {/* Inline the apply button with handleJobClick; stopPropagation prevents duplicate events */}
          <button
            className={styles["apply-button"]}
            onClick={(e) => {
              e.stopPropagation();
              handleJobClick();
            }}
          >
            Bewerben <img src="/assets/icons/Login.png" alt="Login Icon" />
          </button>

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
