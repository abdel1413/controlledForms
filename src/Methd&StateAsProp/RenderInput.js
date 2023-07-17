import React from "react";
class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h2>Rendering Input:</h2>
        <p> This is the input value from parent: {this.props.input}</p>
      </div>
    );
  }
}
export default RenderInput;
