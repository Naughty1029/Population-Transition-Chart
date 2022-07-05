import { PrefTypes } from "@src/types/index";
import { MapDataTypes } from "@src/types/MapDataTypes";

export type State = {
  checkedPrefs: Array<PrefTypes>;
  mapData: Array<MapDataTypes>;
};
