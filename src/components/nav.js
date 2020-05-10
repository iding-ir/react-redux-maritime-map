import React, { Component } from "react";
import Autocomplete from "react-autocomplete";

import "./nav.css";

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
      <input {...props} type="search" placeholder="cargo-id (abc-1234)" />
    );

    const renderItem = (item, isHighlighted) => (
      <div
        style={{
          background: isHighlighted ? "silver" : "white",
        }}
      >
        {item.id}
      </div>
    );

    const onChange = (event) => setCargo(event.target.value);

    const onSelect = (value) => {
      setCargo(value);

      let geoJson = Object.assign({}, vessels);

      geoJson.features = geoJson.features.filter((feature) => {
        return feature.properties.cargoes.filter((cargo) => cargo.id === value)
          .length;
      });

      mapcraft.fitBounds({
        geoJson,
      });
    };

    return (
      <nav className="nav">
        <form className="sc-form sc-flex-r">
          <div className="sc-form-text">
            <Autocomplete
              shouldItemRender={shouldItemRender}
              getItemValue={(item) => item.id}
              items={allCargos}
              renderInput={renderInput}
              renderItem={renderItem}
              value={selectedCargo}
              onChange={onChange}
              onSelect={onSelect}
            />
          </div>

          <div className="sc-form-button sc-md">
            <button type="button">
              <i className="sc-icon-search"></i>

              <span>Track</span>
            </button>
          </div>
        </form>
      </nav>
    );
  }
}

export default Nav;
