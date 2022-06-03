import React from "react";
import { Pie, PieChart } from "recharts";

const MyPieChart = () => {
  // ttsgsyyuxgs
  const data01 = [
    {
      name: "Mar",
      value: 10401,
    },
    {
      name: "Apr",
      value: 24500,
    },
    {
      name: "May",
      value: 67010,
    },
    {
      name: "Jun",
      value: 40405,
    },
    {
      name: "Jul",
      value: 50900,
    },
  ];
  const data02 = [
    {
      name: "Mar",
      value: 10401,
    },
    {
      name: "Apr",
      value: 24500,
    },
    {
      name: "May",
      value: 67010,
    },
    {
      name: "Jun",
      value: 40405,
    },
    {
      name: "Jul",
      value: 50900,
    },
  ];
  return (
    <div>
      <h4 className="text-center text-warning fw-bolder">Pie Chart</h4>
      <h4 className="text-center mb-lg-4 text-info fw-bold">
        Invesment VS Revenue
      </h4>
      <PieChart width={730} height={250}>
        <Pie
          data={data01}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
        <Pie
          data={data02}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#82ca9d"
          label
        />
      </PieChart>
    </div>
  );
};

export default MyPieChart;
