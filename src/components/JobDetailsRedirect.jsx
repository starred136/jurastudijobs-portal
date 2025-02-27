import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css";



const JobDetailsRedirect = ({ jobId }) => {
  const navigate = useNavigate();

  return (
    <button
      className="apply-button"
      onClick={() => navigate(`/job/${jobId}`)}
    >
      View Details
    </button>
  );
};

export default JobDetailsRedirect;
