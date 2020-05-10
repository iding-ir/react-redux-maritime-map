import { combineReducers } from "redux";

import cargosReducer from "./cargos";
import geojsonsReducer from "./geojsons";
import modalReducer from "./modal";

const combinedReducers = combineReducers({
  cargos: cargosReducer,
  geojsons: geojsonsReducer,
  modal: modalReducer,
});

export default combinedReducers;
