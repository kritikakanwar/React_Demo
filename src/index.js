import React from "react";
import ReactDom from "react-dom";
import App from "./App";

var img = "https://picsum.photos/200";
// This willl give us current Year
var currentYear = new Date().getFullYear();
// this is the way to apply css styles in react
const customStyle = {
  color: "Pink",
  fontSize: "20px",
  border: "1px solid purple"
};

ReactDom.render(
  <div>
    {/* Below line of code is showing another way to use css styles */}
    <h2 style={customStyle}>This is React inline style Demo </h2>
    <App />
    <p>Copyright {currentYear}</p>
  </div>,
  document.getElementById("root")
);
