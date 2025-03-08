import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { jobList } from "../api/jobs"; // Ensure the correct import path
import styles from "../styles/NotFoundPage.module.css";

const normalizeText = (text) => text.replace(/-/g, " ").toLowerCase();

const NotFoundPage = () => {
  const navigate = useNavigate();
  const { companyName } = useParams();

  // Find the first job for this company
  const job = jobList.find(
    (job) => normalizeText(job.company) === normalizeText(companyName)
  );

  return (
    <div className={styles.container}>
      {/* ✅ Display company logo & name if found */}
      {job ? (
        <>
          <img src={job.logo} alt={`${job.company} Logo`} className={styles.logo} />
          <h1 className={styles.companyName}>{job.company}</h1>
        </>
      ) : (
        <h2 className={styles.errorMessage}>Working</h2>
      )}

      {/* 🚧 Error Message */}
      <h1 className={styles.errorCode}>🚧</h1>
      <h2 className={styles.errorMessage}>Bald verfügbar!</h2>
      <p className={styles.description}>
        Wir bereiten wertvolle Informationen für Sie vor. Bleiben Sie dran!
      </p>

      {/* 🏠 Home Button */}
      <button className={styles.homeButton} onClick={() => navigate("/")}>
        Zur Startseite
      </button>
    </div>
  );
};

export default NotFoundPage;
