import { Action, State } from "@src/types/index";

export const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case "ADD_PREFS":
      return {
        ...state,
        checkedPrefs: [...state.checkedPrefs, action.payload],
      };

    default:
      return state;
  }
};
