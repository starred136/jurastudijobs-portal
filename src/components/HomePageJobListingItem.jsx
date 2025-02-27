// import React from "react";
// import { useNavigate } from "react-router-dom";

// // import "../styles/HomePage.css"; // ✅ Correct path


// const HomePageJobListingItem = ({ job }) => {
//   const navigate = useNavigate();

//   return (
//     <section className="job-card" onClick={() => navigate(`/job/${job.id}`)}>
//       <div className="job-header">
//         <img src={job.logo} alt={`${job.company} Logo`} className="company-logo" />
//         <div className="job-details">
//           <span className="company-name">{job.company}</span>
//           <h2 className="job-title">{job.title}</h2>
//         </div>
//       </div>
//       <div className="job-contain">
//         <p className="location">{job.location}</p>
//         <div className="langue-container">
//           {job.languages.map((lang, index) => (
//             <img key={index} src={lang} className="language-image" alt="Language" />
//           ))}
//                   {/* <button className="apply-button">View Details</button> */}
        
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomePageJobListingItem;


import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/HomePage.css"; 

const HomePageJobListingItem = ({ job }) => {
  const navigate = useNavigate();

  return (
    <section className="job-card" onClick={() => navigate(`/job/${job.id}`)}>
      {/* Job Header Section */}
      <div className="job-header">
        <img src={job.logo} alt={`${job.company} Logo`} className="company-logo" />
        <div className="job-details">
          <span className="company-name">{job.company}</span>
          <h2 className="job-title">{job.title}</h2>
        </div>
      </div>

      {/* Job Content Section */}
      <div className="job-contain">
        <p className="location">{job.location}</p>

        {/* Language & Semester Images */}
        <div className="langue-container">
          {job.languages.map((lang, index) => (
            <img key={index} src={lang} className="language-image" alt="Language" />
          ))}

          <button className="apply-button">
            Bewerben <img src="/assets/icons/Login.png" alt="Login Icon" />
          </button>

          {job.semesterImage && (
            <img src={job.semesterImage} className="semester-image" alt="Semester" />
          )}
        </div>

        {/* Job Tags */}
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
