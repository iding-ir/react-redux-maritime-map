import React, { Component } from "react";
import * as classnames from "classnames";

import "./modal.css";

class Modal extends Component {
  render() {
    const { modal, hideModal } = this.props;
    const { visible, id, name, routes, cargos } = modal;

    const modalClasses = classnames("sc-modal", {
      "sc-is-active": visible,
    });

    const overlayClasses = classnames("sc-overlay", {
      "sc-is-active": visible,
    });

    return (
      <>
        <div class={modalClasses}>
          <div class="sc-card">
            <header class="sc-card-header">
              <h3>{name}</h3>
            </header>

            <div class="sc-card-body">
              <h5>Cargos:</h5>

              <div className="sc-grid-4">
                {cargos.map((item) => (
                  <span className="badge">{item.id}</span>
                ))}
              </div>
            </div>

            <footer class="sc-card-footer">
              <div class="sc-form-button sc-md sc-flex-rr">
                <button type="button" onClick={hideModal}>
                  <span>Close</span>
                </button>
              </div>
            </footer>
          </div>
        </div>

        <div class={overlayClasses} onClick={hideModal}></div>
      </>
    );
  }
}

export default Modal;
