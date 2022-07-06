import React, { useEffect, useState } from "react";
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
import { useFetchPopulation } from "@src/hooks/useFetchPopulation";

export const Chart: React.VFC = () => {
  const [mapData, setMapData] = useState([]);
  const { population, status } = useFetchPopulation();
  const { state } = useContext(AppContext);

  type fetchDataType = {
    year: number;
    value: number;
  };

  useEffect(() => {
    if (status === "success") {
      const { data } = population.result.data[0];
      const { prefCode } = state.currentPref[0];

      const createdObj = data.map((item: fetchDataType, index: number) => {
        const tempObj = {
          name: item.year,
          [prefCode]: item.value,
        };

        if (mapData[index] !== undefined) {
          const merged = Object.assign(mapData[index], tempObj);
          return merged;
        } else {
          return tempObj;
        }
      });
      setMapData(createdObj);
    }
  }, [population]);

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={mapData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            layout="vertical"
            align="right"
            verticalAlign="middle"
            width={130}
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
