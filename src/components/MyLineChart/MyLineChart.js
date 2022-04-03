import React from "react";
import { Line, LineChart, XAxis, YAxis } from "recharts";

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
      <LineChart width={400} height={400} data={data} color={{ color: "red" }}>
        <Line type="monotone" dataKey={"sell"} stroke="#4304e8"></Line>
        <XAxis dataKey={"month"}></XAxis>
        <YAxis></YAxis>
      </LineChart>
      <p className="text-center">sell</p>
    </div>
  );
};

export default MyLineChart;
