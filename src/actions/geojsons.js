import { SET_VESSELS, SET_PORTS, SET_ROUTES } from "../constants";

export const setVessels = (vessels) => {
  return {
    type: SET_VESSELS,
    payload: vessels,
  };
};

export const setPorts = (ports) => {
  return {
    type: SET_PORTS,
    payload: ports,
  };
};

export const setRoutes = (routes) => {
  return {
    type: SET_ROUTES,
    payload: routes,
  };
};
