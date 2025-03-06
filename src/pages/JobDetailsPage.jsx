import React from "react";
import { useParams } from "react-router-dom";
import HomePageNavBar from "../components/HomePageNavBar";
import BackButton from "../components/JobDetailsPage/BackButton";
import CompanyJobOptionSection from "../components/JobDetailsPage/CompanyJobOptionSection";
import { jobList } from "../api/jobs";

const JobDetailsPage = () => {
  const { id } = useParams(); // Get job ID from URL
  const job = jobList.find((job) => job.id === parseInt(id));

  console.log("Job List:", jobList);
  console.log("Current Job:", job);

  if (!job) {
    return (
      <div>
        <h2>Job not found</h2>
        <h3>Available Jobs:</h3>
        {jobList.map((job) => (
          <div key={job.id}>
            <p>Job Title: {job.title}</p>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div key={job.id}>
      <HomePageNavBar />
      <BackButton />
      <CompanyJobOptionSection job={job} />
    </div>
  );
};

export default JobDetailsPage;
