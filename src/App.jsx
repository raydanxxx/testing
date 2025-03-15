import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Home from "./components/Home";
import AboutMe from "./components/about";
import Work from "./components/work";
import Contact from "./components/contact";

function App() {
  return (
    <Router>
      <div className="relative w-full h-screen overflow-hidden">
        <Navbar />
        <div className="h-screen overflow-auto relative flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutMe />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
