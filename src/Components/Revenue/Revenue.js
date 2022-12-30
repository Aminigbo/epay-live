import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import "./revenue.css";

const Revenue = () => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      // legend: {
      //   position: 'top' ,
      // },
      // title: {
      //   display: true,
      //   text: 'Chart.js Line Chart',
      // },
    },
  };

  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"];
  const data = {
    labels,
    datasets: [
      {
        label: "Dataset 1",
        data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
        // borderColor: "rgb(255, 99, 132)",
        // backgroundColor: "rgba(255, 99, 132, 0.5)",
        borderColor: "red",
        fill: false,
      },
      {
        label: "Dataset 2",
        data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
        borderColor: "green",
        fill: false,
      },
    ],
  };

  // const data = {
  //   labels: "Dataset 1",
  //   datasets: [
  //     {
  //       data: [860, 1140, 1060, 1060, 1070, 1110, 1330, 2210, 7830, 2478],
  //       borderColor: "red",
  //       fill: false,
  //     },
  //     {
  //       data: [1600, 1700, 1700, 1900, 2000, 2700, 4000, 5000, 6000, 7000],
  //       borderColor: "green",
  //       fill: false,
  //     },
  //     {
  //       data: [300, 700, 2000, 5000, 6000, 4000, 2000, 1000, 200, 100],
  //       borderColor: "blue",
  //       fill: false,
  //     },
  //   ],
  // };

  // const options = {
  //   legend: { display: false },
  // };

  return (
    <div id="revenue-container">
      <p id="dash-cash-header">Revenue</p>
      <div className="income-loss">
        <p id="revenue-text" className="income">
          Income
        </p>
        <p id="revenue-text " className="revenus-loss-text">Loss</p>
      </div>
      <div id="revenue-graph-con">
        <Line options={options} data={data} />

        {/* <div id="revenue-graph-con-items">
          <div id="revenue-circle"></div>
          <div id="revenue-line"></div>
        </div>
        <div id="revenue-graph-con-items">
          <div id="revenue-circle"></div>
          <div id="revenue-line"></div>
        </div>
        <div id="revenue-graph-con-items">
          <div id="revenue-circle"></div>
          <div id="revenue-line"></div>
        </div>
        <div id="revenue-graph-con-items">
          <div id="revenue-circle"></div>
          <div id="revenue-line"></div>
        </div>
        <div id="revenue-graph-line" className="revenue-line-1">
          <img src={vector1} alt="#" className="revenue-line-img" />
        </div>
        <div id="revenue-graph-line" className="revenue-line-2">
          <img src={vector2} alt="#" className="revenue-line-img" />
        </div>
        <div className="revenue-graph-mon">
          <p>Jan</p>
          <p>Feb</p>
          <p>Mar</p>
          <p>Apr</p>
          <p>May</p>
          <p>Jun</p>
        </div> */}
      </div>
    </div>
  );
};

export default Revenue;
