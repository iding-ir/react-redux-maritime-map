import { SHOW_MODAL, HIDE_MODAL } from "../constants";

const INITIAL_STATE = {
  visible: false,
  id: null,
  name: "",
  routes: [],
  cargos: [],
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_MODAL:
      return { ...state, visible: true, ...action.payload };
    case HIDE_MODAL:
      return { ...state, visible: false };
    default:
      return state;
  }
};

export default reducer;
