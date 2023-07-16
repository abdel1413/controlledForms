import React from "react";
class RenderInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <p> This is the input value from parent: {this.props.input}</p>
      </div>
    );
  }
}
export default RenderInput;
