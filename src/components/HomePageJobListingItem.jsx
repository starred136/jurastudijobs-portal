import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"; // ✅ Import homepage-specific styles

const HomePageJobListingItem = ({ job }) => {
  const navigate = useNavigate();

  // Navigate to job details page
  const handleJobClick = () => {
    navigate(`/job/${job.id}`);
  };

  // Navigate to company page
  const handleCompanyClick = (e) => {
    e.stopPropagation(); // Prevent job detail navigation
    navigate(`/company/${job.companyId}`);
  };

  return (
    <section className="job-card">
      {/* Job Header Section */}
      <div className="job-header">
        {/* ✅ Clicking logo goes to company page */}
        <img
          src={job.logo}
          alt={`${job.company} Logo`}
          className="company-logo"
          onClick={handleCompanyClick}
        />
        <div className="job-details">
          {/* ✅ Clicking company name goes to company page */}
          <span className="company-name" onClick={handleCompanyClick}>
            {job.company}
          </span>
          {/* ✅ Clicking job title goes to job details */}
          <h2 className="job-title" onClick={handleJobClick}>
            {job.title}
          </h2>
        </div>
      </div>

      {/* Job Content Section */}
      <div className="job-contain">
        <p className="location">{job.location}</p>

        {/* Language & Semester Images */}
        <div className="langue-container">
          {/* ✅ Language Images */}
          {job.languages.map((lang, index) => (
            <img key={index} src={lang} className="language-image" alt="Language" />
          ))}

          {/* ✅ Optional Small Language Image */}
          {/* {job.singleLanguageImage && (
            <img src={job.singleLanguageImage} className="language-image-single" alt="Single Language" />
          )} */}

          {/* ✅ Apply Button - Appears between Language & Semester Image */}
          <button className="apply-button" onClick={handleJobClick}>
            Bewerben <img src="/assets/icons/Login.png" alt="Login Icon" />
          </button>

          {/* ✅ Semester Image */}
          {job.semesterImage && (
            <img src={job.semesterImage} className="semester-image" alt="Semester" />
          )}
        </div>

        {/* Responsive: On mobile screens (≤768px), entire job card is clickable */}
        <div className="mobile-click-area" onClick={handleJobClick}></div>

        {/* Job Tags - Not clickable */}
        <div className="job-tags">
          {job.tags.map((tag, index) => (
            <span key={index} className="job-tag">{tag}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePageJobListingItem;
