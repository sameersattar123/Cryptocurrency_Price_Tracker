import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import  Home  from "./pages/Home";
import Dashboad from "./pages/Dashboad";
import Compare from "./pages/Compare";
import Coin from "./pages/Coin";
import "./App.css"
const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/coin/:coinId" element={<Coin />} />
          <Route path="/dashboard" element={<Dashboad />} />
          <Route path="/compare" element={<Compare />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
