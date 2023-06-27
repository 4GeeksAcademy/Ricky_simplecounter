//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { SimpleCounter } from "./component/simplecounter";
let secs = 1;
const timer = setInterval(() => {
  if (secs === 9999) {
    clearInterval(timer);
  }
  ReactDOM.render(
    <SimpleCounter seconds={secs} />,
    document.querySelector("#app")
  );
  secs++;
}, 1000);

//render your react application
