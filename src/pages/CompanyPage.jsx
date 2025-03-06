import React from "react";
import { useParams } from "react-router-dom";
import { jobList } from "../api/jobs";

const normalizeText = (text) => text.replace(/-/g, " ").toLowerCase();

const CompanyPage = () => {
  const { companyName } = useParams();

  // Find jobs for this company
  const jobs = jobList.filter(
    (job) => job.company.toLowerCase() === normalizeText(companyName)
  );

  if (jobs.length === 0) {
    return <h2>Company not found</h2>;
  }

  return (
    <div className="company-details-container">
      <h1>{jobs[0].company}</h1>
      <img src={jobs[0].logo} alt={`${jobs[0].company} Logo`} />
      <p>Location: {jobs[0].location}</p>
      
      <h2>Available Jobs at {jobs[0].company}:</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <a href={`/${normalizeText(job.company)}/job/${normalizeText(job.title)}`}>
              {job.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CompanyPage;
