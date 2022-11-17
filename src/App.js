import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarBucks from "./components/Navbar";
// import Register from "./components/pages/Register";
// import Login from "./components/pages/Login";
import Home from "./pages/Home";
import Profile from "./pages/Profile";

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  // const [currentForm, setCurrenform] = useState('login')
   

  return (
    <Router>
      <div>
        <NavbarBucks />
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        {/* <Route exact path="/" element={<Register />} /> */}
        {/* <Route exact path="/login" element={<Login />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
