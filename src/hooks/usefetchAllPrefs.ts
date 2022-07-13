import { useQuery } from "react-query";
import { PrefTypes } from "@src/types";

export const useFetchAllPrefs = () => {
  const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

  const fetchPrefectures = async () => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "KKigZnHRZ261R2CQ4EuI5dJOpDtwRH3oT1V62ahn",
      },
    });
    let json = await res.json();
    json = json.result.map((data: PrefTypes) => {
      let randomColor = "#";
      for (let i = 0; i < 6; i++) {
        randomColor += ((16 * Math.random()) | 0).toString(16);
      }
      return { ...data, color: randomColor };
    });
    return json;
  };

  const { data: prefs, isLoading } = useQuery("prefectures", fetchPrefectures);

  return { prefs, isLoading };
};
