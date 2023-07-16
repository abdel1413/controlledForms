import React from "react";

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h2> Hello, my name is:{this.props.name}</h2>
      </div>
    );
  }
}

export default NavBar;
