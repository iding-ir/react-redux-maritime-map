import { SET_CARGOS } from "../constants";

export const setCargos = (cargos) => {
  return {
    type: SET_CARGOS,
    payload: cargos,
  };
};
