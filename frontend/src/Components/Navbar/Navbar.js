import React, { Component } from "react";
import netlifyIdentity from "netlify-identity-widget";
import "./Navbar.css";
//sleep
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

//searchbar
var searchBox = document.querySelectorAll(
  '.search-box input[type="text"] + span'
);

searchBox.forEach((elm) => {
  elm.addEventListener("click", () => {
    elm.previousElementSibling.value = "";
  });
});
//login
netlifyIdentity.init();
function openNetlifyModal() {
  sleep(2000);
  netlifyIdentity.open();
}
netlifyIdentity.on("login", () => {
  window.location.href = "/profile";
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
              <a href="/about">About</a>
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
          <div className="user">
            <p
              onClick={() => {
                openNetlifyModal();
              }}
              id="login-button"
            >
              Account
            </p>
          </div>
        </nav>
      </div>
    );
  }
}
