import React from "react";
import DiamondsTable from "../../components/DiamondsTable";
import FilterForm from "../../container/filterForm";

const LandingPage: React.FC = () => {
  return (
    <div>
      <FilterForm />
      <DiamondsTable />
    </div>
  );
};

export default LandingPage;
