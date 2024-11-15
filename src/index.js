import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";
import Home from "./pages/Home";
import Search from "./pages/Search";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Map></Map> */}
    {/* <Test></Test> */}
    {/* <Home></Home> */}
    <Search></Search>
  </React.StrictMode>
);
