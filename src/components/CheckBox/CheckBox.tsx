import React, { useState } from "react";
import "@components/CheckBox/CheckBox.scss";
import { CheckBoxItem } from "@components/CheckBox/CheckBoxItem";
import { PrefTypes } from "@src/types/index";
import { useFetchAllPrefs } from "@src/hooks/useFetchAllPrefs";
import { useCheckPrefectures } from "@src/hooks/useCheckPrefectures";
import { useQuery } from "react-query";

export const CheckBox: React.VFC = () => {
  const { prefs, isLoading } = useFetchAllPrefs();
  const [currentPref, setCurrentPref] = useState({} as PrefTypes);
  const { checkedPrefectures } = useCheckPrefectures();

  const fetchPopulation = async (currentPref: PrefTypes) => {
    const fetchUrl = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${currentPref.prefCode}`;
    const res = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        "x-api-key": "KKigZnHRZ261R2CQ4EuI5dJOpDtwRH3oT1V62ahn",
      },
    });
    return res.json();
  };

  const { data: population } = useQuery(["population", currentPref], () =>
    fetchPopulation(currentPref)
  );
  console.log(population);

  const handleChangeCheckBox = (pref: PrefTypes) => {
    checkedPrefectures(pref);
    setCurrentPref(pref);
  };

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }
  return (
    <ul className="checkbox">
      {prefs["result"].map((pref: PrefTypes) => (
        <CheckBoxItem
          key={pref.prefCode}
          pref={pref}
          handleChangeCheckBox={handleChangeCheckBox}
        />
      ))}
    </ul>
  );
};
