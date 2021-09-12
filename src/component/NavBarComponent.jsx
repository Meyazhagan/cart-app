import React, { Component } from "react";

import NavWrapper, { toggleButton } from "./sub/NavWrapper";
import { createNavList } from "./sub/dropDown";

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const {
      navBar,
      cart: { count },
      clearCart,
    } = this.props;
    return (
      <NavWrapper>
        {toggleButton}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {navBar.map((nav, index) => createNavList(nav, index))}
          </ul>
          <button className="btn btn-outline-dark" onClick={clearCart}>
            <i className="bi-cart-fill me-1"></i>
            Cart
            <span className="badge bg-dark text-white ms-1 rounded-pill">
              {count}
            </span>
          </button>
        </div>
      </NavWrapper>
    );
  }
}

export default NavBar;
