import React, { useEffect } from "react";
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
  const { state } = useContext(AppContext);
  const { population } = useFetchPopulation();

  useEffect(() => {
    //この中でstate.mapDataの値を変更したい
    //配列の一番最後の要素が直近で選択した都道府県として取得する
    const currentPref = state.checkedPrefs[state.checkedPrefs.length - 1];
    let currentPrefCode;
    currentPref ? (currentPrefCode = currentPref["prefCode"]) : "";
    console.log(currentPrefCode);

    const flag = true;
    if (flag) {
      //もし既にobjectの中に同じ都道府県があれば削除
    } else {
      //もし既にobjectの中に同じ都道府県がなければ追加
    }
  }, [population, state.checkedPrefs]);

  return (
    <div className="chart">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart width={500} height={300} data={state.mapData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend layout="vertical" align="right" verticalAlign="middle" />
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
