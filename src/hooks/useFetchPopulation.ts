import { useQuery } from "react-query";
import { PrefTypes } from "@src/types";

export const useFetchPopulation = (pref?: PrefTypes) => {
  const url =
    "https://opendata.resas-portal.go.jp/api/v1/population/composition/perYear";

  const fetchPopulation = async () => {
    const fetchUrl = pref ? `${url}?prefCode=${pref.prefCode}` : "";
    const res = await fetch(fetchUrl, {
      method: "GET",
      headers: {
        "x-api-key": "KKigZnHRZ261R2CQ4EuI5dJOpDtwRH3oT1V62ahn",
      },
    });
    return res.json();
  };

  const {
    data: population,
    status,
    refetch,
  } = useQuery("population", fetchPopulation, { enabled: false });

  return { population, status, refetch };
};
