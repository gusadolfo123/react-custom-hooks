import React from "react";
import ReactDOM from "react-dom";
import { HooksApp } from "./HooksApp";

import "./components/myStyles.css";
import "./index.css";
import { CounterWithCustomHook } from "./components/CounterWithCustomHook";

ReactDOM.render(<CounterWithCustomHook />, document.getElementById("root"));
