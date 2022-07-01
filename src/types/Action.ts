import { PrefTypes } from "@src/types/index";

export type Action = {
  type: "ADD_PREFS";
  payload: PrefTypes;
};
