import React from "react";

class Vegetables extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1> The vegetables are:</h1>
        <ul>
          <li>Brussel Sprouts</li>
          <li>Broccoli</li>
          <li>Squach</li>
          <li>Spinash</li>
        </ul>
      </div>
    );
  }
}
export default Vegetables;
