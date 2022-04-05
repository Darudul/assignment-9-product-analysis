import React from "react";
import { Legend, Line, LineChart, Tooltip, XAxis, YAxis } from "recharts";

const MyLineChart = () => {
  const data = [
    {
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      month: "Apr",
      investment: 400000,
      sell: 323,
      revenue: 24500,
    },
    {
      month: "May",
      investment: 600000,
      sell: 626,
      revenue: 67010,
    },
    {
      month: "Jun",
      investment: 700000,
      sell: 529,
      revenue: 40405,
    },
    {
      month: "Jul",
      investment: 500000,
      sell: 566,
      revenue: 50900,
    },
    {
      month: "Aug",
      investment: 1000000,
      sell: 590,
      revenue: 61000,
    },
  ];

  return (
    <div className="fw-bold">
      <h4 className="text-center text-warning fw-bolder">Line Chart</h4>
      <LineChart
        width={400}
        height={400}
        data={data}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
      >
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey={"sell"} stroke="#4304e8"></Line>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
      </LineChart>
    </div>
  );
};

export default MyLineChart;
