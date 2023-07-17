import React from "react";

const styles = {
  width: 250,
  margin: 5,
};
class ToggleTenery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      userAge: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    this.setState((state) => ({ userAge: state.input }));
  }
  handleChange(event) {
    this.setState({
      input: event.target.value,
      userAge: "",
    });
  }

  render() {
    const btnOne = <button onClick={this.handleClick}>Submit!</button>;
    const btnTwo = <button>You May Enter</button>;
    const btnThree = <button>You Shall Not Pass</button>;
    return (
      <div>
        <h1>Enter Your Age to continue</h1>
        <input
          style={styles}
          type="number"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <br />
        {this.state.userAge === ""
          ? btnOne
          : this.state.userAge >= 18
          ? btnTwo
          : btnThree}
      </div>
    );
  }
}
export default ToggleTenery;
