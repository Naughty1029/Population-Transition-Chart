import React from "react";
import { PrefTypes } from "@src/types";

type Props = {
  pref: PrefTypes;
  checkedPrefectures: (pref: PrefTypes) => void;
};

export const CheckBoxItem: React.VFC<Props> = ({
  pref,
  checkedPrefectures,
}) => {
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
