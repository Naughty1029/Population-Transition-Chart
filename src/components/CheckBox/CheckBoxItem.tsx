import React from "react";
import { PrefTypes } from "@src/types";
import { AppContext } from "@src/provider/AppContextProvider";
import { useContext } from "react";

type Props = {
  pref: PrefTypes;
};

export const CheckBoxItem: React.VFC<Props> = ({ pref }) => {
  const { state, dispatch } = useContext(AppContext);

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

  return (
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
  );
};
