import React from "react";
import Results from "./Results";
class GameOfChance extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  // set the state by getting the previous state and
  //add one (1) to the counter any time the btn is clicked
  handleClick() {
    // this.setState((prevState) => {
    //   return { counter: prevState.counter + 1 };
    // });

    //or
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    // generate a random number which is 50/50 odds
    let expression = Math.random() >= 0.5;
    return (
      <div>
        <button onClick={this.handleClick}>Play Again!</button>
        <Results fiftyFifty={expression} />
        <p>Turn:{this.state.counter}</p>
      </div>
    );
  }
}
export default GameOfChance;
