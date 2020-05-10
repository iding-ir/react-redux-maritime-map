import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import Mapcraft from "mapcraft";
import "stylecraft/dist/stylecraft.css";

import "./app.css";
import Nav from "./nav";
import Map from "./map";
import Modal from "./modal";
import { setCargos, setCargo } from "../actions/cargos";
import { setVessels, setPorts, setRoutes } from "../actions/geojsons";

class App extends Component {
  componentDidMount() {
    this.initializeMap();
  }

  render() {
    const { vessels, allCargos, selectedCargo, setCargo } = this.props;

    return (
      <div className="app">
        <Nav
          mapcraft={this.mapcraft}
          vessels={vessels}
          allCargos={allCargos}
          selectedCargo={selectedCargo}
          setCargo={setCargo}
        />

        <Map />

        <Modal />
      </div>
    );
  }

  initializeMap = () => {
    const { setCargos, setVessels, setPorts, setRoutes } = this.props;

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
      const { vessels, ports, routes } = this.mapcraft.geoJsons;

      setVessels(vessels);
      setPorts(ports);
      setRoutes(routes);

      const cargos = vessels.features.reduce(
        (total, item) => [...total, ...item.properties.cargoes],
        []
      );

      setCargos(cargos);
    });
  };
}

const mapStateToProps = (state) => ({
  vessels: state.geojsons.vessels,
  ports: state.geojsons.ports,
  routes: state.geojsons.routes,
  allCargos: state.cargos.all,
  selectedCargo: state.cargos.selected,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCargos,
      setCargo,
      setVessels,
      setPorts,
      setRoutes,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
