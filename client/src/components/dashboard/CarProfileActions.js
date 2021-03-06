import React from "react";
import { Link } from "react-router-dom";

const CarProfileActions = () => {
  return (
    <div className="btn-group mb-4" role="group">
      <Link to="/edit-carprofile" className="btn btn-light">
        <i className="fas fa-user-circle text-info mr-1" /> Edit CarProfile
      </Link>
      <Link to="/add-maintenance" className="btn btn-light">
        <i className="fab fa-black-tie text-info mr-1" />
        Add Maintenance
      </Link>
      <Link to="/add-mileage" className="btn btn-light">
        <i className="fas fa-graduation-cap text-info mr-1" />
        Add Mileage
      </Link>
      <Link to="/add-expense" className="btn btn-light">
        <i className="fas fa-wallet text-info mr-1" />
        Add Expense
      </Link>
      <Link to="/add-reports" className="btn btn-light">
        <i className="fas fa-scroll text-info mr-1" />
        Report By Expense
      </Link>
    </div>
  );
};

export default CarProfileActions;
