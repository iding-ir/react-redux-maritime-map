import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "stylecraft/dist/stylecraft.css";
import "mapbox-gl/dist/mapbox-gl.css";

import "./css/index.css";
import "./css/mapbox-hacks.css";
import "./css/hacks.css";
import App from "./components/app";
import store from "./stores";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
