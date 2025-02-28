import { useParams } from "react-router-dom";
import { jobList } from "../api/jobs";
// import "../styles/JobDetailsPage.css"; // ✅ Import details page styles

const JobDetailsPage = () => {
  const { id } = useParams();
  const job = jobList.find((job) => job.id === parseInt(id));

  if (!job) {
    return <h2>Job not found</h2>;
  }

  return (
    <div className="job-details-container">
      <h1>{job.title}</h1>
      <img src={job.logo} alt={`${job.company} Logo`} />
      <h3>Company: {job.company}</h3>
      <p>Location: {job.location}</p>
      <div className="job-tags">
        {job.tags.map((tag, index) => (
          <span key={index} className="job-tag">{tag}</span>
        ))}
      </div>
      <button className="apply-button">Apply Now</button>
    </div>
  );
};

export default JobDetailsPage;
