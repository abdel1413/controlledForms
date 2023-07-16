import React from "react";
import GetInput from "./GetInput";
import RenderInput from "./RenderInput";

class MyParent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      inputValue: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ inputValue: e.target.value });
  }

  render() {
    return (
      <div>
        <GetInput
          input={this.state.inputValue}
          handleChange={this.handleChange}
        />
        <RenderInput input={this.state.inputValue} />
      </div>
    );
  }
}
export default MyParent;
