import React from "react";
import "@components/Chart/Chart.scss";
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
      prefName: "北海道",
      prefCode: "c1220",
    },
    {
      prefName: "東京",
      prefCode: "c1221",
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
              name={value.prefName}
              dataKey={value.prefCode}
              stroke="#8884d8"
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};
