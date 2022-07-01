import { Action, State } from "@src/types/index";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_PREFS":
      return {
        ...state,
        checkedPrefs: [...state.checkedPrefs, action.payload],
      };

    case "DELETE_PREFS":
      return {
        ...state,
        checkedPrefs: state.checkedPrefs.filter(
          (data) => data.prefCode !== action.payload.prefCode
        ),
      };

    default:
      return state;
  }
};
