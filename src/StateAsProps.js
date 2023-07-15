import React from "react";
import NavBar from "./NavBar";
/**
 * Stateful Parent component passes its state to its
 * child component which then return a state from its parent comp
 */
class StateAsProps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Smith",
    };
  }
  render() {
    return (
      <div>
        <NavBar name={this.state.name} />
      </div>
    );
  }
}
export default StateAsProps;
