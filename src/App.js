import react from "react";
// import { Router, Route, BrowserRouter, Switch } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Login from "./components/Login/Loginn.js";
import Registration from "./components/Registration/Registrationn";
import Home from "./components/Home/Home.js";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
