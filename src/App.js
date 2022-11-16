import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarBucks from "./components/Navbar";
// import Register from "./components/pages/Register";
// import Login from "./components/pages/Login";
import Home from "./components/pages/Home";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div>
        <NavbarBucks />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        {/* <Route exact path="/" element={<Register />} /> */}
        {/* <Route exact path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
