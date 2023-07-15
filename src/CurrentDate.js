import React from "react";
import Calendar from "./Calendar";
class CurrentDate extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Calendar date={Date()} />
      </div>
    );
  }
}

export default CurrentDate;
