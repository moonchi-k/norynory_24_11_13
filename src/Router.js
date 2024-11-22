import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Result from "./pages/Result";
import Detail from "./pages/Detail";

const Router = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/result" element={<Result />} />
        <Route path="/detail/:title" element={<Detail />} />
      </Routes>
    </HashRouter>
  );
};

export default Router;
