import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage";
import CompanyPage from './pages/CompanyPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* New route pattern for job details */}
        <Route path="/:companyName/job/:jobTitle" element={<JobDetailsPage />} />
        {/* Optional: a route for a company page */}
        <Route path="/:companyName" element={<CompanyPage />} />
        
        <Route path="*" element={<NotFoundPage />} /> 

        {/* <Route path="/job/:id" element={<JobDetailsPage />} /> */}
        {/* <Route path="/company/:id" element={<CompanyDetailsPage />} /> */}
        {/* This wildcard route will catch any undefined routes */}
      </Routes>
    </Router>
  );
};

export default App;


