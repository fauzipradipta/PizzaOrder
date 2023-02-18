import React from "react";
import {
  //BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import Home from "./Home";
import Menu from "./Menu";
// import Cart from "./Cart";
// import Contact from "./ContactUs";
import Logo from "../../Assets/logo.jpg";

export default function Navigation() {
  return (
    <div className="navbar">
      <div className="Leftside">
        <img alt="" src={Logo} />
      </div>
      <div className="Rightside">
        <Link to="/home"> Home </Link>
        <Link to="/menu"> Menu </Link>        
        {/* <Link to="/contact"> Contact </Link> */}
        {/* <Link to="/cart">Cart</Link> */}
      </div>
      <Routes>
        <Route path="/home" exact element={<Home />} />
        <Route path="/menu" element={<Menu />}></Route>        
        {/* <Route path="/contact" element={<Contact />} /> */}
        {/* <Route path="/cart" element={<Cart />} /> */}
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}
