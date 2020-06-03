import React, { Component } from "react";
import Autocomplete from "react-autocomplete";
import * as classnames from "classnames";

import "./Nav.scss";

class Nav extends Component {
  render() {
    const {
      mapcraft,
      vessels,
      allCargos,
      selectedCargo,
      setCargo,
    } = this.props;

    const shouldItemRender = (item, value) =>
      item.id.toLowerCase().indexOf(value.toLowerCase()) > -1;

    const renderInput = (props) => (
      <input
        {...props}
        className="cargo-search"
        type="search"
        placeholder="cargo-id (abc-1234)"
      />
    );

    const renderItem = (item, isHighlighted) => {
      const classes = classnames("autocomplete-item", {
        "autocomplete-highlighted": isHighlighted,
      });

      return <div className={classes}>{item.id}</div>;
    };

    const onChangeAutocomplete = (event) => setCargo(event.target.value);

    const onSelectAutocomplete = (value) => {
      setCargo(value);

      let geoJson = Object.assign({}, vessels);

      geoJson.features = geoJson.features.filter((feature) => {
        return feature.properties.cargos.filter((cargo) => cargo.id === value)
          .length;
      });

      mapcraft.fitBounds({
        geoJson,
      });
    };

    const onChangeRoute = (event) => {
      const geoJson = Object.assign({}, mapcraft.geoJsons.routes);

      geoJson.features = geoJson.features.filter(
        (feature) => feature.properties.id === event.target.value
      );

      mapcraft.fitBounds({
        geoJson,
      });
    };

    const onChangeLayer = (event) => {
      const layer = event.target.value;
      const visibility = event.target.checked ? "visible" : "none";

      mapcraft.switchLayer({
        layer,
        visibility,
      });
    };

    return (
      <nav className="nav">
        <form className="sc-form">
          <div className="block sc-flex-r">
            <div className="sc-form-text">
              <Autocomplete
                shouldItemRender={shouldItemRender}
                getItemValue={(item) => item.id}
                items={allCargos}
                renderInput={renderInput}
                renderItem={renderItem}
                value={selectedCargo}
                onChange={onChangeAutocomplete}
                onSelect={onSelectAutocomplete}
              />
            </div>
          </div>

          <div className="block">
            <div className="sc-form-select">
              <select value="" onChange={onChangeRoute}>
                <option value="" disabled={true}>
                  Select a route...
                </option>
                <option value="r-1">ECSA to North Europe</option>
                <option value="r-2">St. Lawrence to Europe</option>
                <option value="r-3">Far East to Middle East</option>
                <option value="r-4">Chile to Far East</option>
              </select>
            </div>
          </div>

          <div className="block layer-manager">
            <div className="sc-form-checkbox">
              <input
                type="checkbox"
                value="point-symbol-vessels"
                id="layer-vessels"
                onChange={onChangeLayer}
                defaultChecked={true}
              />

              <label htmlFor="layer-vessels">
                <i className="sc-icon-checkbox"></i>

                <span>Vessels</span>
              </label>
            </div>

            <div className="sc-form-checkbox">
              <input
                type="checkbox"
                value="point-symbol-ports"
                id="layer-ports"
                onChange={onChangeLayer}
                defaultChecked={true}
              />

              <label htmlFor="layer-ports">
                <i className="sc-icon-checkbox"></i>

                <span>Ports</span>
              </label>
            </div>

            <div className="sc-form-checkbox">
              <input
                type="checkbox"
                value="polyline-line-routes"
                id="layer-routes"
                onChange={onChangeLayer}
                defaultChecked={true}
              />

              <label htmlFor="layer-routes">
                <i className="sc-icon-checkbox"></i>

                <span>Routes</span>
              </label>
            </div>
          </div>
        </form>
      </nav>
    );
  }
}

export default Nav;
