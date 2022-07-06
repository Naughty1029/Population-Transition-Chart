import React from "react";
import "@components/Chart/Chart.scss";
import { useContext } from "react";
import { AppContext } from "@src/provider/AppContextProvider";
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
  const { state } = useContext(AppContext);

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={state.mapData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            width={200}
          />
          {state.checkedPrefs.map((value, index) => (
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
