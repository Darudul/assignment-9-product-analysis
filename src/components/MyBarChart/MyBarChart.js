import React from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const MyBarChart = () => {
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
      investment: 400000,
      sell: 590,
      revenue: 61000,
    },
  ];
  return (
    <div className=" fw-bold">
      <h4 className=" text-warning fw-bolder">Bar Chart</h4>
      <h4 className="text-center mb-lg-4 text-info fw-bold">
        Invesment VS Revenue
      </h4>

      <BarChart width={600} height={400} data={data}>
        {/* <Legend
          width={100}
          wrapperStyle={{
            top: 20,
            right: 10,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
            lineHeight: "20px",
          }}
        /> */}

        <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
        <Tooltip />
        <Legend />
        <Bar dataKey="investment" stackId="a" fill="#8884d8" barSize={30} />
        <Bar dataKey="revenue" stackId="a" fill="#82ca9d" barSize={30} />
        <XAxis dataKey="month"></XAxis>
        <YAxis></YAxis>
      </BarChart>
    </div>
  );
};

export default MyBarChart;
