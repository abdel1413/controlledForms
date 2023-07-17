import React from "react";

class RandomDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      randomIndex: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleClick() {
    if (this.state.inputValue) {
      this.setState({
        randomIndex: Math.floor(Math.random() * 20),
        inputValue: "",
      });
    }
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }

  render() {
    const possibleAnswers = [
      "It is certain",
      "It is decidedly so",
      "Without a doubt",
      "Yes, definitely",
      "You may rely on it",
      "As I see it, yes",
      "Outlook good",
      "Yes",
      "Signs point to yes",
      "Reply hazy try again",
      "Ask again later",
      "Better not tell you now",
      "Cannot predict now",
      "Concentrate and ask again",
      "Don't count on it",
      "My reply is no",
      "My sources say no",
      "Most likely",
      "Outlook not so good",
      "Very doubtful",
    ];

    //1st way using map()
    // const answer = possibleAnswers.map((element, index) => {
    //   if (this.state.randomIndex === index) {
    //     return element;
    //   }
    // });

    // 2nd and best way to acces using []
    const answer = possibleAnswers[this.state.randomIndex];

    return (
      <div>
        <input
          type="text"
          value={this.state.inputValue}
          onChange={this.handleChange}
        />
        <button onClick={this.handleClick}>click to display random data</button>
        <h2>Random answer:</h2>
        <p>{answer}</p>
      </div>
    );
  }
}
export default RandomDisplay;
