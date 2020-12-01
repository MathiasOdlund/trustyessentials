import React, { Component } from "react";
import "./Navbar.css";
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
export function initNetlifyIdentity() {
  console.log("initnetlyifidntity");
  const script = document.createElement("script");
  script.src = "https://identity.netlify.com/v1/netlify-identity-widget.js";
  script.async = true;
  document.body.appendChild(script);
}
function openNetlifyModal() {
  const netlifyIdentity = window.netlifyIdentity;

  if (netlifyIdentity) {
    netlifyIdentity.open();
  } else {
    console.log("netlifyidentity not defined :(");
  }
}
class NetlifyIdentity extends Component {
  componentDidMount() {
    initNetlifyIdentity();
  }

  render() {
    return <div></div>;
  }
}

initNetlifyIdentity();
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
