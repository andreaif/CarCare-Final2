import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

import axios from "axios";

class Chart extends Component {
  state = {
    typeofexpense: "",
    totalamount: ""
  };
  componentDidMount() {
    this.getExpenses();
  }

  // GetExpenses
  getExpenses = () => {
    axios
      .get("api/carprofile/expense")
      .then(res => {
        this.setState({
          totalbusinessexpenses: res.data.totalbusinessexpenses,
          totalpersonalexpenses: res.data.totalpersonalexpenses
        });
      })
      .catch(err => console.log(err));
  };

  render() {
    const data = {
      labels: ["Business", "Personal"],
      datasets: [
        {
          data: [
            this.state.totalbusinessexpenses,
            this.state.totalpersonalexpenses
          ],
          backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
          hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"]
        }
      ]
    };

    return (
      <div>
        <h2> Report by Type of Expenses</h2>
        <Doughnut data={data} />
      </div>
    );
  }
}

export default Chart;
