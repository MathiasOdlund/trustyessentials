import "./Profile.css";
import React, { Component } from "react";
import netlifyIdentity from "netlify-identity-widget";
import TestImage from "../../Assets/productImage/test.png";
//Initing netlify
netlifyIdentity.init();
console.log(netlifyIdentity.currentUser());
const user = netlifyIdentity.currentUser();
export default class Search extends Component {
  render() {
    return (
      <div>
        <div className="greeting">
          <h1>Hello, {user.user_metadata.full_name}</h1>
        </div>
        <div className="orders">
          <img src={TestImage} alt="" />
          <h1>Title</h1>
          <h2>Short desc</h2>
          <p>long desc</p>
        </div>
      </div>
    );
  }
}
