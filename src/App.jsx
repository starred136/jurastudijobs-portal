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
        <Route path="/:companyName/job/:jobTitle" element={<JobDetailsPage />} />
        {/* Optional: a route for a company page */}
        <Route path="/:companyName" element={<CompanyPage />} />
        
        <Route path="*" element={<NotFoundPage />} />     
        {/* This wildcard route will catch any undefined routes */}
      </Routes>
    </Router>
  );
};

export default App;


