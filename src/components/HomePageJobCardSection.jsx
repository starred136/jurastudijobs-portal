import React from "react";
import JobCard from "./JobCard";
import { jobList } from "../api/jobs";
import styles from "../styles/HomePage.module.css"; 

const HomePageJobCardSection = () => {
  return (
    <div className={styles["job-listing-container"]}>
      {jobList.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default HomePageJobCardSection;
