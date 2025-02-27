import React, { useState, useEffect } from "react";
import JobCard from "./JobTags";
import jobList from "../api/jobs";

// import "../styles/HomePage.css"; // ✅ Correct path
import "../styles/HomePage.css";



const HomePageJobListingsSection = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulating fetching data from API
    setJobs(jobList);
  }, []);

  return (
    <div className="job-listing-container">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} />
      ))}
    </div>
  );
};

export default HomePageJobListingsSection;
