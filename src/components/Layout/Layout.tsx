import React from "react";
import { Head } from "@components/Head/Head";
import { Chart } from "@components/Chart/Chart";
import { CheckBox } from "@components/CheckBox/CheckBox";

export const Layout: React.VFC = () => {
  return (
    <>
      <Head />
      <Chart />
      <CheckBox />
    </>
  );
};
