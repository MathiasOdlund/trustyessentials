import React, { Component } from "react";
import "./Navbar.css";

var searchBox = document.querySelectorAll(
  '.search-box input[type="text"] + span'
);

searchBox.forEach((elm) => {
  elm.addEventListener("click", () => {
    elm.previousElementSibling.value = "";
  });
});

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
          <div className="search-bar">
            <div class="flexbox">
              <div class="search">
                <div>
                  <input type="text" placeholder="Search . . ." required />
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}
