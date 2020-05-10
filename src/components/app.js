import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";
import Mapcraft from "mapcraft";
// import "easy-autocomplete";

import "./app.css";
import Nav from "./nav";
import Map from "./map";
import Modal from "./modal";

class App extends Component {
  componentDidMount() {
    this.initializeMap();
  }

  render() {
    return (
      <div className="app">
        <Nav />

        <Map />

        <Modal />
      </div>
    );
  }

  initializeMap = () => {
    this.mapcraft = new Mapcraft({
      env: {
        mapbox: {
          token:
            "pk.eyJ1IjoiYXlkaW5naGFuZSIsImEiOiJjazJpcXB1Zm8xamNvM21sNjlsMG95ejY3In0.jMuteEFuzviEuitJZ-DY2w",
        },
      },
      styles: {
        // light: "mapbox://styles/mapbox/streets-v11",
        light: "/mapcraft/jsons/styles/light/style.json",
      },
      map: {
        container: "app-map",
        center: [35, 35],
        zoom: 2,
        hash: false,
      },
      controls: {
        fullscreen: false,
        geolocation: false,
        navigation: true,
      },
      icons: {
        port: "/assets/images/icon-port.png",
        vessel: "/assets/images/icon-vessel.png",
        default: "/assets/images/icon-default.png",
      },
      geoJsons: {
        routes: "/data/routes.json",
        ports: "/data/ports.json",
        vessels: "/data/vessels.json",
      },
    });

    this.mapcraft.load().then(() => {
      this.cargos = this.mapcraft.geoJsons.vessels.features.reduce(
        (total, item) => [...total, ...item.properties.cargoes],
        []
      );
    });
  };
}

export default App;
