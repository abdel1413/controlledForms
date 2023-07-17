import "./App.css";
import ControlledInput from "./ControlledInput";
import ControlledSubmit from "./ControlledSubmit";
import Counter from "./Counter";
import CurrentDate from "./CurrentDate";
import ComponentDidmount from "./LifeCycle/ComponentDidmount";
import ComponentDidtmountEvent from "./LifeCycle/ComponentDidmountEvent";
import ComponentWillMount from "./LifeCycle/ComponentWillMount";
import ShouldCompDidUpd from "./LifeCycle/ShouldCompDidUpd";
import MyParent from "./Methd&StateAsProp/MyParent";
import RandomDisplay from "./RandomDisplay";
import StateAsProps from "./StateAsProp/StateAsProps";
import StatelesFunc from "./StatelessFucn";
import ToDo from "./ToDo";
import ToggleIt from "./ToggleIt";
import ToggleTenery from "./ToggleTenery";
import ToggleToDisplay from "./ToggleToDisplay";
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
      <MyParent />
      <ComponentWillMount />
      <ComponentDidmount />
      <ComponentDidtmountEvent />
      <ShouldCompDidUpd />
      <RandomDisplay />
      <ToggleToDisplay />
      <ToggleTenery />
    </div>
  );
}

export default App;
