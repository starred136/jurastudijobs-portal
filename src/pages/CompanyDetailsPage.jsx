import { useParams } from "react-router-dom";
import { jobList } from "../api/jobs";

const CompanyDetailsPage = () => {
  const { id } = useParams();
  const company = jobList.find((job) => job.companyId === parseInt(id));

  if (!company) {
    return <h2>Company not found</h2>;
  }

  return (
    <div className="company-details-container">
      <h1>{company.company}</h1>
      <img src={company.logo} alt={`${company.company} Logo`} />
      <p>Location: {company.location}</p>
    </div>
  );
};

export default CompanyDetailsPage;
