import { SET_VESSELS, SET_PORTS, SET_ROUTES } from "../constants";

const INITIAL_STATE = {
  vessels: {},
  ports: {},
  routes: {},
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_VESSELS:
      return { ...state, vessels: action.payload };
    case SET_PORTS:
      return { ...state, ports: action.payload };
    case SET_ROUTES:
      return { ...state, routes: action.payload };
    default:
      return state;
  }
};

export default reducer;
