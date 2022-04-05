import React from "react";
import "./DashBoard.css";
import MyBarChart from "../MyBarChart/MyBarChart";
import MyLineChart from "../MyLineChart/MyLineChart";
import MyPieChart from "../MyPieChart/MyPieChart";

const DashBoard = () => {
  return (
    <div className="chart-style mt-5 ms-5 ">
      <MyLineChart></MyLineChart>
      <MyBarChart></MyBarChart>
      <MyPieChart></MyPieChart>
    </div>
  );
};

export default DashBoard;
