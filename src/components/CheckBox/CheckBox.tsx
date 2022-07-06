import React, { useContext } from "react";
import "@components/CheckBox/CheckBox.scss";
import { CheckBoxItem } from "@components/CheckBox/CheckBoxItem";
import { PrefTypes } from "@src/types/index";
import { useCheckPrefectures } from "@src/hooks/useCheckPrefectures";
import { AppContext } from "@src/provider/AppContextProvider";
import { useFetchAllPrefs } from "@src/hooks/usefetchAllPrefs";
export const CheckBox: React.VFC = () => {
  const { prefs, isLoading } = useFetchAllPrefs();
  const { dispatch } = useContext(AppContext);
  const { checkedPrefectures } = useCheckPrefectures();

  const handleChangeCheckBox = (pref: PrefTypes) => {
    checkedPrefectures(pref);
    dispatch({ type: "CHANGE_CURRENTPREF", payload: pref });
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
