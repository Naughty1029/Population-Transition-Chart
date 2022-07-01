import { useQuery } from "react-query";

export const usefetchAllPrefs = () => {
  const url = "https://opendata.resas-portal.go.jp/api/v1/prefectures";

  const fetchPrefectures = async () => {
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "x-api-key": "KKigZnHRZ261R2CQ4EuI5dJOpDtwRH3oT1V62ahn",
      },
    });
    return res.json();
  };

  const { data, isLoading } = useQuery("prefectures", fetchPrefectures);

  return { data, isLoading };
};
