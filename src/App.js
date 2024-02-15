import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav/Nav";
import Home from "./components/Pages/Home";
import "./App.css";
import Products from "./components/Pages/Products";
import Services from "./components/Pages/Services";
import SignUp from "./components/Pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/products" element={<Products />} />
          <Route exact path="/services" element={<Services />} />
          <Route exact path="/sign-up" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
