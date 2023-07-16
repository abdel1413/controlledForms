import React from "react";
class GetInput extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>Get Input</h1>
        <input value={this.props.input} onChange={this.props.handleChange} />
      </div>
    );
  }
}
export default GetInput;
