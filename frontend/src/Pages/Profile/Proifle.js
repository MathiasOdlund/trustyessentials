import "./Profile.css";
import React, { Component } from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Profile from "../../Components/Profile/Profile";
export default class Proifle extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Profile />
      </div>
    );
  }
}
