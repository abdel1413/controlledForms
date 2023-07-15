import List from "./List";
import React from "react";
class ToDo extends React.Component {
  render() {
    return (
      <div>
        <h1> Today's task:</h1>
        <List task={["go to gym", "visit friends", "go to park"]} />
        <h1>Tomorrow's task:</h1>
        <List task={["go to work", "have diner", " read a book"]} />
      </div>
    );
  }
}

export default ToDo;
