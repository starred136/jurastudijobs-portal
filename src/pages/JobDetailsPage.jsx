import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import HomePageNavBar from "../components/HomePageNavBar";
import BackButton from "../components/JobDetailsPage/BackButton";
import CompanyJobOptionSection from "../components/JobDetailsPage/CompanyJobOptionSection";
import { jobList } from "../api/jobs";

// Function to convert slug back to normal text
// const normalizeText = (text) => text.replace(/-/g, " ").toLowerCase();
// const normalizeText = (text) => text.replace(/-/g, " ").trim().toLowerCase();
const normalizeText = (text) => decodeURIComponent(text.replace(/-/g, " ")).trim().toLowerCase();



const JobDetailsPage = () => {
  const { companyName, jobTitle } = useParams();

  // Find the job using the normalized values
  const job = jobList.find(
    (job) =>
      job.company.toLowerCase() === normalizeText(companyName) &&
      job.title.toLowerCase() === normalizeText(jobTitle)
  );

  useEffect(() => {
    console.log("Job List:", jobList);
    console.log("Current Job:", job);
  }, [job]);

  if (!job) {
    return (
      <div>
        <h2>Job not found</h2>
        <h3>Available Jobs:</h3>
        {/* {jobList.map((job) => (
          <div key={job.id}>
            <p>Job Title: {job.title}</p>
            <p>Company: {job.company}</p>
            <p>Location: {job.location}</p>
          </div>
        ))} */}
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
