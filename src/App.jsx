import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import JobDetailsPage from "./pages/JobDetailsPage";
import CompanyDetailsPage from './pages/CompanyDetailsPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />

        {/* <Route path="/job/:companySlug/:jobTitleSlug" element={<JobDetailsPage />} /> */}
        {/* <Route path="/company/:companyId" element={<CompanyDetailsPage />} /> */}
        
        <Route path="*" element={<NotFoundPage />} /> 

        <Route path="/job/:id" element={<JobDetailsPage />} />
        <Route path="/company/:id" element={<CompanyDetailsPage />} />
        {/* This wildcard route will catch any undefined routes */}
      </Routes>
    </Router>
  );
};

export default App;


