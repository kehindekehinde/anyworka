import React from "react";
import ReactDom from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';

import App from "./App";
import "./index.css";
import "./App.css";

ReactDom.render(<App />, document.getElementById("root"));
