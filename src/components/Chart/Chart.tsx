import React from "react";
import "./Chart.scss";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export const Chart: React.VFC = () => {
  const checekPrefs = [
    {
      name: "北海道",
      code: "c1220",
    },
    {
      name: "東京",
      code: "c1221",
    },
  ];
  const data = [
    {
      name: 1995,
      c1220: 600,
      c1221: 500,
    },
    {
      name: 2000,
      c1220: 1000,
      c1221: 500,
    },
    {
      name: 2005,
      c1220: 600,
      c1221: 500,
    },
  ];
  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
          {checekPrefs.map((value, index) => (
            <Line
              key={index}
              type="monotone"
              name={value.name}
              dataKey={value.code}
              stroke="#8884d8"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
