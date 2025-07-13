import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../assets/logo3.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
    { name: "Experience a Demo", path: "/demo", special: true },
  ];

  return (
    <nav className="fixed w-full z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="MarketInsight Logo" className="h-auto w-auto max-h-44" />
          </Link>


          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`${item.special ? "bg-gradient-to-r from-secondary to-accent px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300" : "hover:text-secondary transition-colors duration-300"
                  }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-2xl">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div initial={{ height: 0 }} animate={{ height: isOpen ? "auto" : 0 }} className="md:hidden overflow-hidden">
          <div className="py-4 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-2 ${item.special ? "bg-gradient-to-r from-secondary to-accent rounded-full text-center" : "hover:text-secondary"}`}
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
