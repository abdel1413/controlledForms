import React from "react";

/**
 *
 * NOTE:
 * The input / textearea fields have their owns state that are
 * controlled by the browser. So
 * to make then controlled by the React state not by the browser,
 *  we set the 'value' attribute to the state (this.state.input)
 * in the input element.
 * This way the input is controlled by React state not the browser.
 *
 */
class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inputValue: event.target.value });
  }
  // we can also do this in the input
  //onChange={this.handleChange}
  render() {
    return (
      <div>
        <input
          value={this.state.inputValue}
          onChange={(event) => {
            this.handleChange(event);
          }}
        />
        <h1>Controlled input</h1>
        <p>This are The input values: {this.state.inputValue}</p>
      </div>
    );
  }
}

export default ControlledInput;
