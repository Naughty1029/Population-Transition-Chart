import React from "react";
import { Head } from "../Head/Head";
import { Chart } from "../Chart/Chart";
import { CheckBox } from "../CheckBox/CheckBox";

export const Layout: React.VFC = () => {
  return (
    <>
      <Head />
      <Chart />
      <CheckBox />
    </>
  );
};
