import { HashRouter, Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Detail from "./pages/Detail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/detail" element={<Detail />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
