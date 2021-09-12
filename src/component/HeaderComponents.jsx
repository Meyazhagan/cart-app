import React, { Component } from "react";

import NavBar from "./NavBarComponent";
import Head from "./sub/Head";

class Header extends Component {
  render() {
    const {
      data: { navBar, cart, heading },
      clearCart,
    } = this.props;
    return (
      <>
        <NavBar navBar={navBar} cart={cart} clearCart={clearCart} />
        <Head data={heading} />
      </>
    );
  }
}

export default Header;
