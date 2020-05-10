import React, { Component } from "react";

import "./modal.css";

class Modal extends Component {
  render() {
    return (
      <div
        className="modal fade"
        id="app-modal-vessel"
        tabIndex="-1"
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-lg modal-dialog-centered"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title"></h5>

              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>

            <div className="modal-body">
              <form className="form-inline mb-2">
                <input
                  id="app-search-owner"
                  className="form-control mr-2"
                  type="search"
                  placeholder="owner-id (ab-123)"
                  aria-label="Search"
                />

                <button
                  id="app-search-owner-submit"
                  className="btn btn-primary mr-2 my-sm-0"
                  type="submit"
                >
                  Search
                </button>

                <button
                  id="app-search-owner-reset"
                  className="btn btn-light my-2 my-sm-0"
                  type="reset"
                >
                  Reset
                </button>
              </form>

              <p>Enter an owner-id to search for their cargo in this vessel.</p>

              <div className="app-cargo-result"></div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;
