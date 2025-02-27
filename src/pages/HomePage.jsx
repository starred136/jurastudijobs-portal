import React from "react";
import HomePageNavBar from "../components/HomePageNavBar";
import HomePageHeader from "../components/HomePageHeader";
import HomePageJobListingItem from "../components/HomePageJobListingItem";
import { jobList } from "../api/jobs";

import "../styles/HomePage.css"; 


const HomePage = () => {
  return (
    <div>
      <HomePageNavBar />
      <HomePageHeader />
      <div className="job-listing-container">
        {jobList.map((job) => (
          <HomePageJobListingItem key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
