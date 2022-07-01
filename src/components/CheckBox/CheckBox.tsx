import React from "react";
import { useContext } from "react";
import "@components/CheckBox/CheckBox.scss";
import { PrefTypes } from "@src/types/index";
import { AppContext } from "@src/provider/AppContextProvider";
import { usefetchAllPrefs } from "@src/hooks/usefetchAllPrefs";

export const CheckBox: React.VFC = () => {
  const { state, dispatch } = useContext(AppContext);
  const { data, isLoading } = usefetchAllPrefs();

  const checkedPrefectures = (pref: PrefTypes) => {
    const prefIsExist = state.checkedPrefs.find(
      (data) => data.prefCode === pref.prefCode
    );
    if (prefIsExist) {
      //もし既にobjectの中に同じ都道府県があれば削除
      dispatch({ type: "DELETE_PREFS", payload: pref });
    } else {
      //もし既にobjectの中に同じ都道府県がなければ追加
      dispatch({ type: "ADD_PREFS", payload: pref });
    }
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
