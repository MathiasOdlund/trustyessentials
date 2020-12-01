import React, { Component } from "react";
//Importing essential components
import Navbar from "../../Components/Navbar/Navbar";
import Search from "../../Components/Search/Search";

export default class Products extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Search />
      </div>
    );
  }
}
