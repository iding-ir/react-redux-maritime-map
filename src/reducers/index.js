import { combineReducers } from "redux";

import cargosReducer from "./cargos";

const combinedReducers = combineReducers({
  cargos: cargosReducer,
});

export default combinedReducers;
