import { PrefTypes } from "@src/types/index";

export type Action =
  | {
      type: "ADD_PREFS";
      payload: PrefTypes;
    }
  | {
      type: "DELETE_PREFS";
      payload: PrefTypes;
    }
  | {
      type: "CHANGE_CURRENTPREF";
      payload: PrefTypes;
    };
