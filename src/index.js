import React from "react";
import ReactDOM from "react-dom";
import { HooksApp } from "./HooksApp";

import "./components/myStyles.css";
import "./index.css";
import { CounterWithCustomHook } from "./components/CounterWithCustomHook";
import { SimpleForm } from "./components/useEffect/SimpleForm";
import { FormWithCustomHook } from "./components/useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./components/MultipleCustomHooks";

ReactDOM.render(
  <MultipleCustomHooks title="Formulario" />,
  document.getElementById("root")
);
