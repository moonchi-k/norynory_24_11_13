import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Router } from "react-router-dom";
import Test from "./Test";
import Home from "./pages/Home";
import Search from "./pages/Search";
import { GlobalStyled } from "./GlobalStyled";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GlobalStyled></GlobalStyled>
    <Router>
      <Home></Home>
    </Router>
  </React.StrictMode>
);
