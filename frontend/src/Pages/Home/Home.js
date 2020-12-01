import "./home.css";
import React, { Component } from "react";
//Importing essential components
import Navbar from "../../Components/Navbar/Navbar";
import phoneImage from "../../Assets/img/home-gadet.jpeg";

export default class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="phoneImage">
          <div className="explore">
          <h1>Affordable Reliable Flawless</h1>
          <button type="button" class="btn btn-dark btn-primary">
            EXPLORE
          </button>
          </div>
          <img src={phoneImage} alt="hy" />
        </div>
      </div>
    );
  }
}
