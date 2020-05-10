import React, { Component } from "react";

import "./modal.css";

class Modal extends Component {
  render() {
    return (
      <>
        <div class="sc-modal">
          <div class="sc-card">
            <header class="sc-card-header">
              <h3>Lorem ipsum</h3>
            </header>

            <div class="sc-card-body">
              <p>
                Suspendisse gravida turpis sed tempor cursus. Donec nec ultrices
                felis. Orci varius natoque penatibus et magnis dis parturient
                montes.
              </p>
            </div>

            <footer class="sc-card-footer">
              <div class="sc-form-button sc-md sc-flex-rr">
                <button type="button">
                  <span>Close</span>
                </button>
              </div>
            </footer>
          </div>
        </div>

        <div class="sc-overlay"></div>
      </>
    );
  }
}

export default Modal;
