import React, { Component } from "react";
import * as classnames from "classnames";

import "./modal.css";

class Modal extends Component {
  render() {
    const { modal, hideModal, selectedCargo } = this.props;
    const { visible, id, name, routes, cargos } = modal;

    const modalClasses = classnames("sc-modal sc-lg", {
      "sc-is-active": visible,
    });

    const overlayClasses = classnames("sc-overlay", {
      "sc-is-active": visible,
    });

    return (
      <>
        <div className={modalClasses}>
          <div className="sc-card">
            <header className="sc-card-header">
              <h3>{name}</h3>
            </header>

            <div className="sc-card-body">
              <h5>Cargos:</h5>

              <div>
                {cargos.map((item) => {
                  const badgeClasses = classnames("badge", {
                    "is-selected": item.id === selectedCargo,
                  });

                  return <span className={badgeClasses}>{item.id}</span>;
                })}
              </div>
            </div>

            <footer className="sc-card-footer">
              <div className="sc-form-button sc-md sc-flex-rr">
                <button type="button" onClick={hideModal}>
                  <span>Close</span>
                </button>
              </div>
            </footer>
          </div>
        </div>

        <div className={overlayClasses} onClick={hideModal}></div>
      </>
    );
  }
}

export default Modal;
