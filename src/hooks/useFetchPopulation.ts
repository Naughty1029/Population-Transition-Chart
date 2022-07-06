import { useQuery } from "react-query";
import { AppContext } from "@src/provider/AppContextProvider";
import { useContext } from "react";

export const useFetchPopulation = () => {
  const { state } = useContext(AppContext);

  const fetchPopulation = async (currentPrefCode: number) => {
    const fetchUrl = `https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear?prefCode=${currentPrefCode}`;
    const res = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        "x-api-key": "KKigZnHRZ261R2CQ4EuI5dJOpDtwRH3oT1V62ahn",
      },
    });
    return res.json();
  };

  const { data: population, status } = useQuery(
    ["population", state.currentPref[0].prefCode],
    () => fetchPopulation(state.currentPref[0].prefCode)
  );

  return { population, status };
};
