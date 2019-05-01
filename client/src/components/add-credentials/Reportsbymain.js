import React, { Component } from "react";
import { Link } from "react-router-dom";
import Chart from "../charts/chart";

class Reports extends Component {
  render() {
    return (
      <div className="add-reportsby">
        <div className="container">
          <div className="col-md-8 m-auto">
            <Link to="/dashboard" className="btn btn-light">
              Go Back
            </Link>
            <h1 className="display-4 text-center">Reports</h1>
            <p className="lead text-center"> by Maintenance</p>
            <Chart />
          </div>
        </div>
      </div>
    );
  }
}

export default Reports;
