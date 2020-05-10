import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.css";

import "./nav.css";

class Nav extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">
          G2 Ocean
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <form className="form-inline">
            <div className="form-group my-2 my-lg-0">
              <input
                id="app-search"
                className="form-control mr-2"
                type="search"
                placeholder="cargo-id (abc-1234)"
                aria-label="Search"
              />

              <button
                id="app-search-submit"
                className="btn btn-primary my-2 my-sm-0"
                type="submit"
              >
                Track
              </button>
            </div>
          </form>
        </div>
      </nav>
    );
  }
}

export default Nav;
