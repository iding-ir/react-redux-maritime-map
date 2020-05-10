import { combineReducers } from "redux";

import cargosReducer from "./cargos";
import geojsonsReducer from "./geojsons";

const combinedReducers = combineReducers({
  cargos: cargosReducer,
  geojsons: geojsonsReducer,
});

export default combinedReducers;
