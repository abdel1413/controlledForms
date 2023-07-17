import React from "react";

class ComponentDidmount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUsers: null,
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        activeUsers: 7659,
      });
    }, 5000);
  }

  render() {
    return (
      <div>
        <h2>Component did mount</h2>
        <h1> The active users are: {this.state.activeUsers}</h1>
      </div>
    );
  }
}
export default ComponentDidmount;
