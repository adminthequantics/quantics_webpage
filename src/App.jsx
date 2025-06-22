import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/common/Navbar";
import Footer from "./components/common/Footer";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Solutions from "./pages/Solutions";
import Industries from "./pages/Industries";
import Demo from "./pages/Demo";

function App() {
  return (
    <Router>
      <div className="min-h-screen gradient-bg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/demo" element={<Demo />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
