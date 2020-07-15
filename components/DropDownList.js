import React, { Component } from "react";
import { Dropdown } from "react-native-material-dropdown";

export default class Example extends Component {
  render() {
    let data = [
      {
        value: "Banana",
      },
      {
        value: "Mango",
      },
      {
        value: "Pear",
      },
    ];

    return (
      <Dropdown
     
      

        label="Favorite Fruit"
        labelFontSize="18"
        data={data}
      />
    );
  }
}
