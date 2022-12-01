import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css";
import NavbarBucks from "./components/Navbar";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Cart from "./pages/Cart";
import DetailProduct from "./pages/DetailProduct";
import Income from "./pages/IncomeTransaction";
import AddToping from "./pages/AddTopping";
import AddProduct from "./pages/AddProduct";
// import UserAdmin from "./components/UserAdmin";

function App() {

  return (
    <Router>
      <div>
        <NavbarBucks />
        {/* <UserAdmin /> */}
      </div>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/product/:title/:id/" element={<DetailProduct />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/income" element={<Income />} />
        <Route exact path="/add-topping" element={<AddToping />} />
        <Route exact path="/add-product" element={<AddProduct />} />
      </Routes>
    </Router>
  );
}

export default App;
