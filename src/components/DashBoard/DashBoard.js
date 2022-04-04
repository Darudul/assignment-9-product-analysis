import React from "react";
import MyBarChart from "../MyBarChart/MyBarChart";

import MyLineChart from "../MyLineChart/MyLineChart";

const DashBoard = () => {
  return (
    <div className="mt-5 ms-5 d-md-flex d-lg-flex d-sm-flex justify-content-around">
      <MyLineChart></MyLineChart>
      <MyBarChart></MyBarChart>
     
    </div>
  );
};

export default DashBoard;
