import React from "react";
import OnlyEvens from "./OnlyEvens";

class ShouldCompDidUpd extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
    };

    this.handleUpdate = this.handleUpdate.bind(this);
  }

  handleUpdate() {
    this.setState((state) => ({ value: state.value + 1 }));
  }

  render() {
    return (
      <div>
        {/* <button onClick={this.handleUpdate}>Add</button> */}
        <OnlyEvens value={this.state.value} handleUpdate={this.handleUpdate} />
      </div>
    );
  }
}
export default ShouldCompDidUpd;
