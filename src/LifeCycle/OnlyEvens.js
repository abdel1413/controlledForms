import React from "react";

class OnlyEvens extends React.Component {
  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("Should I update?");
    if (nextProps.value % 2 === 0) {
      return true;
    }
    return false;
  }

  componentDidUpdate() {
    console.log(" yes, so component re-renders");
  }

  render() {
    return (
      <div>
        <button onClick={this.props.handleUpdate}>Add</button>
        <p>{this.props.value}</p>
      </div>
    );
  }
}
export default OnlyEvens;
