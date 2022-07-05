import React from "react";
import { PrefTypes } from "@src/types";
import { useFetchPopulation } from "@src/hooks/useFetchPopulation";

type Props = {
  pref: PrefTypes;
  checkedPrefectures: (pref: PrefTypes) => void;
};

export const CheckBoxItem: React.VFC<Props> = ({
  pref,
  checkedPrefectures,
}) => {
  const { refetch } = useFetchPopulation(pref);

  const handleChangeCheckBox = () => {
    checkedPrefectures(pref);
    console.log(pref);
    refetch();
  };

  return (
    <li key={pref.prefCode}>
      <label htmlFor={pref.prefName}>
        <input
          type="checkbox"
          name=""
          id={pref.prefName}
          onChange={handleChangeCheckBox}
        />
        <span>{pref.prefName}</span>
      </label>
    </li>
  );
};
