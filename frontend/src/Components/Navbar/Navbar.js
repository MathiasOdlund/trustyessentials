import React, { Component } from "react";
import "./Navbar.css";
export default class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <div className="logo">
            <a href="/">
              <h1>Trusty Essentials</h1>
            </a>
          </div>
          <div className="navlinks">
            <li>
              <a href="/explore">Explore</a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About Us</a>
            </li>
            <div className="shoppingcart"></div>
          </div>
        </nav>
      </div>
    );
  }
}
