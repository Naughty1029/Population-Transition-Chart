import { useContext } from "react";
import { AppContext } from "@src/provider/AppContextProvider";
import { PrefTypes } from "@src/types/index";

export const useCheckPrefectures = () => {
  const { state, dispatch } = useContext(AppContext);

  const checkedPrefectures = async (pref: PrefTypes) => {
    const prefIsExist = state.checkedPrefs.find(
      (data) => data.prefCode === pref.prefCode
    );
    if (prefIsExist) {
      //もし既にobjectの中に同じ都道府県があれば削除
      dispatch({ type: "DELETE_PREFS", payload: pref });
    } else {
      //もし既にobjectの中に同じ都道府県がなければ追加
      dispatch({ type: "ADD_PREFS", payload: pref });
    }
  };

  return { state, checkedPrefectures };
};
