import React from "react";
class ControlledSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputV: "",
      submitV: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ inputV: e.target.value });
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState({ submitV: this.state.inputV });
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.inputV} />
          <button type="submit">Submit</button>
        </form>
        <h1> Here is you form value: {this.state.submitV}</h1>
      </div>
    );
  }
}

export default ControlledSubmit;
