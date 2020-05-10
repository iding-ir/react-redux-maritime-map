import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import "stylecraft/dist/stylecraft.css";

import "./app.css";
import Nav from "./nav";
import Map from "./map";
import Modal from "./modal";
import initializeMapcraft from "../utils/initializeMap";
import { setCargos, setCargo } from "../actions/cargos";
import { setVessels, setPorts, setRoutes } from "../actions/geojsons";
import { showModal, hideModal } from "../actions/modal";

class App extends Component {
  componentDidMount() {
    this.initializeMap();
  }

  render() {
    const {
      vessels,
      allCargos,
      selectedCargo,
      setCargo,
      modal,
      hideModal,
    } = this.props;

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

        <Modal modal={modal} hideModal={hideModal} />
      </div>
    );
  }

  initializeMap = () => {
    const {
      setCargos,
      setVessels,
      setPorts,
      setRoutes,
      showModal,
    } = this.props;

    this.mapcraft = initializeMapcraft();

    this.mapcraft.load().then(() => {
      const { map, geoJsons } = this.mapcraft;
      const { vessels, ports, routes } = geoJsons;

      setVessels(vessels);
      setPorts(ports);
      setRoutes(routes);

      const cargos = vessels.features.reduce(
        (total, item) => [...total, ...item.properties.cargos],
        []
      );

      setCargos(cargos);

      map.on("click", "point-symbol-vessels", function (event) {
        const { id, name } = event.features[0].properties;
        const routes = JSON.parse(event.features[0].properties.routes);
        const cargos = JSON.parse(event.features[0].properties.cargos);

        showModal({ id, name, routes, cargos });
      });
    });
  };
}

const mapStateToProps = (state) => ({
  vessels: state.geojsons.vessels,
  ports: state.geojsons.ports,
  routes: state.geojsons.routes,
  allCargos: state.cargos.all,
  selectedCargo: state.cargos.selected,
  modal: state.modal,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      setCargos,
      setCargo,
      setVessels,
      setPorts,
      setRoutes,
      showModal,
      hideModal,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(App);
