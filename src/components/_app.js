import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import "./app.scss";
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

        <Modal
          modal={modal}
          hideModal={hideModal}
          selectedCargo={selectedCargo}
        />
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
      const {
        vessels: vesselsGeoJsons,
        ports: portsGeoJsons,
        routes: routesGeoJsons,
      } = geoJsons;

      setVessels(vesselsGeoJsons);
      setPorts(portsGeoJsons);
      setRoutes(routesGeoJsons);

      const cargos = vesselsGeoJsons.features.reduce(
        (total, item) => [...total, ...item.properties.cargos],
        []
      );

      setCargos(cargos);

      map.on("click", "point-symbol-vessels", (event) => {
        const { id, name } = event.features[0].properties;
        const routes = JSON.parse(event.features[0].properties.routes);
        const cargos = JSON.parse(event.features[0].properties.cargos);

        showModal({ id, name, routes, cargos });
      });

      map.on("click", "point-symbol-ports", (event) => {
        const name = event.features[0].properties.name;
        const routes = JSON.parse(event.features[0].properties.routes);
        const coordinates = event.features[0].geometry.coordinates.slice();

        while (Math.abs(event.lngLat.lng - coordinates[0]) > 180) {
          coordinates[0] += event.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        const vesselsHtml = vesselsGeoJsons.features
          .filter(
            (feature) =>
              feature.properties.routes.filter((route) =>
                routes.includes(route)
              ).length
          )
          .reduce(
            (total, vessel) => (total += `<li>${vessel.properties.name}</li>`),
            ""
          );

        const html = `<div class="sc-card sc-borderless">
          <header class="sc-card-header">
            <h5>${name}</h5>
          </header>

          <div class="sc-card-body">
            <p>The following vessels visit this port:</p>

            <ul class="sc-list">${vesselsHtml}</ul>
          </div>
        </div>`;

        this.mapcraft.openPopup({
          lnglat: coordinates,
          html,
        });
      });

      map.on("click", "polyline-line-routes", (event) => {
        const { id, name } = event.features[0].properties;
        const coordinates = event.lngLat;

        const vesselsHtml = vesselsGeoJsons.features
          .filter((feature) => {
            return feature.properties.routes.filter((route) => route === id)
              .length;
          })
          .reduce((total, vessel) => {
            return (total += `<li>${vessel.properties.name}</li>`);
          }, "");

        const html = `<div class="sc-card sc-borderless">
          <header class="sc-card-header">
            <h5>${name}</h5>
          </header>

          <div class="sc-card-body">
            <p>The following vessels use this route:</p>

            <ul class="sc-list">${vesselsHtml}</ul>
          </div>
        </div>`;

        this.mapcraft.openPopup({
          lnglat: coordinates,
          html,
        });
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
