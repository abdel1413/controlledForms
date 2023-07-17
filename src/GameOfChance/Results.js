import React from "react";

class Results extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // return (
    //   <>{this.props.fiftyFifty ? <h1>You Win!</h1> : <h1>You Lose!</h1>}</>
    // );
    return <h1>{this.props.fiftyFifty ? "You Win!" : "You Lose!"}</h1>;
  }
}
export default Results;
