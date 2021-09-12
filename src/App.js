import React, { Component } from "react";

import Header from "./component/HeaderComponents";
import Body from "./component/BodyComponents";

import Footer from "./component/sub/Footer";
import Message from "./component/sub/Message";

import headData from "./data/HeaderData.json";
import productData from "./data/ProductData.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { headData, productData, message: [], msgIndex: 1 };
  }

  componentDidMount() {
    this.handleCart();
  }

  render() {
    const { headData, productData, message, msgIndex } = this.state;
    return (
      <>
        <Header data={headData} clearCart={this.clearCart} />
        <Body data={productData} handleCart={this.handleCart} />
        {message.map((msg, index) => (
          <Message key={msgIndex} message={msg} />
        ))}
        <Footer data={headData.credit} />
      </>
    );
  }
  handleCart = (index) => {
    const { headData, productData, msgIndex } = this.state;
    const newProductData = [...productData];
    let info = "";
    if (index + 1) {
      newProductData[index].inCart = newProductData[index].inCart
        ? false
        : true;
      info = `${productData[index].title} is ${
        newProductData[index].inCart ? "add to cart" : "removed from cart"
      }`;
    }
    const newItems = [];
    newProductData.forEach((prod) => {
      if (prod.inCart) {
        newItems.push(prod);
      }
    });
    this.setState({
      headData: {
        ...headData,
        cart: { items: newItems, count: newItems.length },
      },
      productData: [...newProductData],
      message: [info],
      msgIndex: msgIndex + 1,
    });
  };

  clearCart = () => {
    const { headData, productData, msgIndex } = this.state;
    const newProductData = [...productData];
    const newItems = [];
    newProductData.forEach((prod) => {
      prod.inCart = prod.inCart && false;
    });
    this.setState({
      headData: {
        ...headData,
        cart: { items: newItems, count: 0 },
      },
      productData: [...newProductData],
      message: ["Cart Cleared"],
      msgIndex: msgIndex + 1,
    });
  };
}

export default App;
