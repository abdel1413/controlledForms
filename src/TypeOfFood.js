import Fruit from "./Fruits";
import Vegetables from "./Vegetables";
import React from "react";

class TypeOfFood extends React.Component {
  // constructor(props) {
  //     super(props)
  // }
  render() {
    return (
      <dic>
        <h1>Types of food:</h1>
        <Fruit />
        <Vegetables />
      </dic>
    );
  }
}

export default TypeOfFood;
