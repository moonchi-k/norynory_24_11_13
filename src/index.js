import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";
import Map from "./Map";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Map></Map>
    <Test></Test>
  </React.StrictMode>
);
