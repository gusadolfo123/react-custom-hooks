import React from "react";
import ReactDOM from "react-dom";
import { HooksApp } from "./HooksApp";

import "./components/myStyles.css";
import "./index.css";
import { CounterWithCustomHook } from "./components/CounterWithCustomHook";
import { SimpleForm } from "./components/useEffect/SimpleForm";
import { FormWithCustomHook } from "./components/useEffect/FormWithCustomHook";
import { MultipleCustomHooks } from "./components/MultipleCustomHooks";
import { FocusScreen } from "./components/FocusScreen";
import { RealExampleRef } from "./components/RealExampleRef";
import { Layout } from "./components/Layout.js";
import { Memorize } from "./components/Memorize";
import { MemoHook } from "./components/MemoHook";

ReactDOM.render(<MemoHook />, document.getElementById("root"));
