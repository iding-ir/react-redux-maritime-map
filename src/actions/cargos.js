import { SET_CARGOS, SET_CARGO } from "../constants";

export const setCargos = (cargos) => {
  return {
    type: SET_CARGOS,
    payload: cargos,
  };
};

export const setCargo = (cargo) => {
  return {
    type: SET_CARGO,
    payload: cargo,
  };
};
