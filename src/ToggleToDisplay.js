import React from "react";
class ToggleToDisplay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((state) => ({
      display: !state.display,
    }));
  }

  render() {
    return (
      //1st way use IF/ELSE statement:
      //if(this.state.display){return (
      // <div> <button>Toggle to Display</button>
      //<p> Displayed!</p>
      //  )}else{
      //return <div> <button>Toggle to Display</button>
      // }
      //2nd WAY WITH && OPERATOR
      //   (this.state.display && (
      //     <div>
      //       <button onClick={this.handleClick}> Toggle </button>
      //       <p> Displayed</p>
      //     </div>
      //   )) || <button onClick={this.handleClick}> Toggle </button>
      // );

      //3rd WAY AND THE BEST && OPERATOR
      <div>
        <button onClick={this.handleClick}>Toggle to display</button>
        {this.state.display && <p>Displayed!</p>}
      </div>
    );
  }
}
export default ToggleToDisplay;
