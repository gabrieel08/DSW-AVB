import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./Components/Header";
import Home from "./pages/Home";
import Favoritos from "./pages/Favoritos";
import Detalhes from "./pages/Detalhes";

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/detalhes/:code" element={<Detalhes />} />
      </Routes>
    </>
  );
}
