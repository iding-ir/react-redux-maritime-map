import { SET_CARGOS } from "../constants";

const INITIAL_STATE = {
  cargos: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CARGOS:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;
