import React, { FunctionComponent } from "react";
import "./styles.css";
import Wheel from "./Wheel";

const App: FunctionComponent = () => (
  <div className="App">
    <h2>Activity Wheel</h2>
    <Wheel />
  </div>
);

export default App;
