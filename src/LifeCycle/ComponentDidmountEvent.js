import React from "react";
class ComponentDidtmountEvent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "",
    };
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleMessage = this.handleMessage.bind(this);
  }
  handleMessage() {
    this.setState((state) => ({
      message: state.message + "this is a updated message",
    }));
  }
  handleKeyPress(event) {
    if (event.keyCode === 13) {
      this.handleMessage();
    }
  }
  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress);
  }

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
      </div>
    );
  }
}
export default ComponentDidtmountEvent;
