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
    this.state = { headData, productData, message: [] };
  }

  componentDidMount() {
    this.handleCart();
  }

  render() {
    return (
      <>
        <Header data={this.state.headData} clearCart={this.clearCart} />
        <Body data={this.state.productData} handleCart={this.handleCart} />
        {this.state.message.map((msg, index) => (
          <Message key={index} message={msg} />
        ))}
        <Footer data={this.state.headData.credit} />
      </>
    );
  }
  handleCart = (index) => {
    const { headData, productData, message } = this.state;
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
      message: [...message, info],
    });
  };

  clearCart = () => {
    const { headData, productData } = this.state;
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
      message: [],
    });
  };
}

export default App;
