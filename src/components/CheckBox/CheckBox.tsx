import React from "react";
import { useQuery } from "react-query";
import "./CheckBox.scss";

export const CheckBox: React.VFC = () => {
  const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";
  const fetchPrefectures = async () => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "KKigZnHRZ261R2CQ4EuI5dJOpDtwRH3oT1V62ahn",
      },
    });
    return res.json();
  };

  const { data, isLoading } = useQuery("prefectures", fetchPrefectures);
  console.log(data);

  type Props = {
    prefCode: number;
    prefName: string;
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <ul className="checkbox">
      {data["result"].map((pref: Props) => (
        <li key={pref.prefCode}>
          <label htmlFor={pref.prefName}>
            <input type="checkbox" name="" id={pref.prefName} />
            <span>{pref.prefName}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
