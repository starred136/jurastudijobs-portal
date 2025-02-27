// src/components/JobCard.js
import React from "react";
import "../styles/HomePage.css";



const JobCard = ({ job }) => {
    return (
        <section className="job-card">
            <div className="job-header">
                <img src={job.companyLogo} alt={`${job.companyName} Logo`} />
                <div className="job-details">
                    <span className="company-name">{job.companyName}</span>
                    <h2 className="job-title">{job.jobTitle}</h2>
                </div>
            </div>

            <div className="job-contain">
                <div>
                    <p className="location">{job.location}</p>
                </div>
                <div className="langue-container">
                    <img src="/assets/icons/Language.png" className="language-image" alt="language" />
                    <button className="apply-button">
                        Bewerben <img src="/assets/icons/Login.png" alt="Login Icon" />
                    </button>
                    <img src={job.durationIcon} className="language-image" alt="Duration Icon" />
                </div>
                <div className="job-tags">
                    {job.jobTags.map((tag, index) => (
                        <span key={index} className="job-tag">{tag}</span>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default JobCard;
