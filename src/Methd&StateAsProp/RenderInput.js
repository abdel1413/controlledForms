import React from "react";
class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Rendering Input:</h2>
        <span> This is the input value from parent: {this.props.input}</span>
      </div>
    );
  }
}
export default RenderInput;
