import "./styles.css";
import React from "react";
import Heading from "./React_Component/Heading";
import List from "./React_Component/List";
import Images from "./React_Component/images";
import Greeting from "./React_Component/Greeting";
export default function App() {
  return (
    // <div className="App">
    <div>
      <Greeting />
      <Heading />
      <List />
      <Images />

      {/* <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2> */}
    </div>
  );
}
