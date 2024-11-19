import React from "react";
import ReactDOM from "react-dom/client";
import Test from "./Test";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { GlobalStyled } from "./GlobalStyled";
import Router from "./Router";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled></GlobalStyled>
    <Router />
  </React.StrictMode>
);
