import React from "react";
import { PrefTypes } from "@src/types";

type Props = {
  pref: PrefTypes;
  handleChangeCheckBox: (pref: PrefTypes) => void;
};

export const CheckBoxItem: React.VFC<Props> = ({
  pref,
  handleChangeCheckBox,
}) => {
  return (
    <li key={pref.prefCode}>
      <label htmlFor={pref.prefName}>
        <input
          type="checkbox"
          name=""
          id={pref.prefName}
          data-pref={pref}
          onChange={() => handleChangeCheckBox(pref)}
        />
        <span>{pref.prefName}</span>
      </label>
    </li>
  );
};
