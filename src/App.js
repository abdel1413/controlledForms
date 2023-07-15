import "./App.css";
import ControlledInput from "./ControlledInput";
import Counter from "./Counter";
import CurrentDate from "./CurrentDate";
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
    </div>
  );
}

export default App;
