import React from "react";
import { useContext } from "react";
import { AppContext } from "@src/App";
import { useQuery } from "react-query";
import "@components/CheckBox/CheckBox.scss";
import { PrefTypes } from "@src/types/index";

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
  const { state, dispatch } = useContext(AppContext);

  const checkedPrefectures = (pref: PrefTypes) => {
    console.log(state.checkedPrefs);
    //もし既にobjectの中に同じ都道府県があれば削除

    //もし既にobjectの中に同じ都道府県がなければ追加
    dispatch({ type: "ADD_PREFS", payload: pref });
  };

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <ul className="checkbox">
      {data["result"].map((pref: PrefTypes) => (
        <li key={pref.prefCode}>
          <label htmlFor={pref.prefName}>
            <input
              type="checkbox"
              name=""
              id={pref.prefName}
              onChange={() => checkedPrefectures(pref)}
            />
            <span>{pref.prefName}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
