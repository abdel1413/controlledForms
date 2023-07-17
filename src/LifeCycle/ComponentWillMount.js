import React from "react";

class ComponentWillMount extends React.Component {
  componentWillMount() {
    console.log();
  }
  render() {
    return <div>Component will mount is deprecated</div>;
  }
}
export default ComponentWillMount;
