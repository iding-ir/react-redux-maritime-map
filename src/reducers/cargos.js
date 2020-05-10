import { SET_CARGOS, SET_CARGO } from "../constants";

const INITIAL_STATE = {
  all: [],
  selected: "",
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_CARGOS:
      return { ...state, all: action.payload };
    case SET_CARGO:
      return { ...state, selected: action.payload };
    default:
      return state;
  }
};

export default reducer;
