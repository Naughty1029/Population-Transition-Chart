import React from "react";
import "@components/CheckBox/CheckBox.scss";
import { CheckBoxItem } from "@components/CheckBox/CheckBoxItem";
import { PrefTypes } from "@src/types/index";
import { usefetchAllPrefs } from "@src/hooks/usefetchAllPrefs";

export const CheckBox: React.VFC = () => {
  const { data, isLoading } = usefetchAllPrefs();

  if (isLoading) {
    return <span>Loading...</span>;
  }
  return (
    <ul className="checkbox">
      {data["result"].map((pref: PrefTypes) => (
        <CheckBoxItem key={pref.prefCode} pref={pref} />
      ))}
    </ul>
  );
};
