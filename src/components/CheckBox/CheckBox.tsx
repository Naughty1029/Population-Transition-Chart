import React from "react";
import "@components/CheckBox/CheckBox.scss";
import { CheckBoxItem } from "@components/CheckBox/CheckBoxItem";
import { PrefTypes } from "@src/types/index";
import { useFetchAllPrefs } from "@src/hooks/useFetchAllPrefs";
import { useCheckPrefectures } from "@src/hooks/useCheckPrefectures";

export const CheckBox: React.VFC = () => {
  const { prefs, isLoading } = useFetchAllPrefs();
  const { checkedPrefectures } = useCheckPrefectures();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <ul className="checkbox">
      {prefs["result"].map((pref: PrefTypes) => (
        <CheckBoxItem
          key={pref.prefCode}
          pref={pref}
          checkedPrefectures={checkedPrefectures}
        />
      ))}
    </ul>
  );
};
