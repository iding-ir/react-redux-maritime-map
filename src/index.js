import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "stylecraft/dist/stylecraft.css";
import "mapbox-gl/dist/mapbox-gl.css";

import "./index.css";
import "./hack.css";
import App from "./components/app";
import store from "./stores";

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
