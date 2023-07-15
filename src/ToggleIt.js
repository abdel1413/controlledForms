import React from "react";
class ToggleIt extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false,
    };
    this.toggleClick = this.toggleClick.bind(this);
  }

  toggleClick() {
    //1st way
    this.setState((state) => ({ visibility: !state.visibility }));

    this.setState((state) => {
      if (state.visibility === true) {
        return (state.visibility = false);
      } else {
        return (state.visibility = true);
      }
    });
  }

  render() {
    if (this.state.visibility) {
      return (
        <>
          <button onClick={this.toggleClick}>Click Me!</button>
          <h1> Now You See Me</h1>
        </>
      );
    } else {
      return (
        <>
          <button onClick={this.toggleClick}>Click Me! </button>
        </>
      );
    }
  }
}

export default ToggleIt;