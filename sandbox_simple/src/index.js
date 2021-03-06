import React from "react";
import ReactDOM from "react-dom";
import Demo from "./demo/demo";

import "react-awesome-query-builder/lib/css/styles.css";

function App() {
  return (
    <div className="App">
      <Demo />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

