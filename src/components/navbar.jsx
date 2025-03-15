import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
      <nav className="bg-black text-white p-4 fixed top-0 w-full flex justify-center space-x-6 text-lg font-semibold z-50">
        <Link to="/">Home</Link>
        <Link to="/about">About Me</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    );
  };
  

export default Navbar;
