import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./Components/App";

/* This file takes the App component, imported above, and renders it to the DOM, inside the 'root' element.

npm start - runs local development server 
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
