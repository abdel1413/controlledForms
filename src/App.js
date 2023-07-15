import "./App.css";
import ControlledInput from "./ControlledInput";
import ControlledSubmit from "./ControlledSubmit";
import Counter from "./Counter";
import CurrentDate from "./CurrentDate";
import StateAsProps from "./StateAsProps";
import StatelesFunc from "./StatelessFucn";
import ToDo from "./ToDo";
import ToggleIt from "./ToggleIt";
import TypeOfFood from "./TypeOfFood";

function App() {
  return (
    <div className="App">
      <TypeOfFood />
      <CurrentDate />
      <ToDo />
      <StatelesFunc />
      <ToggleIt />
      <Counter />
      <ControlledInput />
      <ControlledSubmit />
      <StateAsProps />
    </div>
  );
}

export default App;
