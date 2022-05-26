import { Routes, Route } from "react-router-dom";

import Category from "../page/category";
import Detail from "../page/Detail";
import Home from "../page/Home";

const Navigator = () => (
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/category/:name" element={<Category />}></Route>
    <Route path="/detail" element={<Detail />}></Route>
  </Routes>
);
export default Navigator;
