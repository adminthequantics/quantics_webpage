import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "../../../favicon/favicon.svg";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Solutions", path: "/solutions" },
    { name: "Industries", path: "/industries" },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to scroll to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  return (
    <>
      {/* Blur overlay for content behind navbar when scrolled */}
      {scrolled && (
        <div
          className="fixed top-0 left-0 right-0 h-24 bg-gradient-to-b from-white/80 to-transparent backdrop-blur-sm z-40 pointer-events-none"
          style={{ height: '80px' }}
        />
      )}

      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "top-4" : "top-0"
        }`}>
        {/* Container with rounded background and border */}
        <div className={`mx-4 lg:mx-8 transition-all duration-300 ${scrolled
            ? "bg-white/95 backdrop-blur-md rounded-full shadow-lg ring-1 ring-gray-900/10 border border-gray-200"
            : "bg-transparent"
          }`}>
          <div className="px-4 lg:px-8">
            <div className={`flex justify-between items-center transition-all duration-300 ${scrolled ? "h-16" : "h-20"
              }`}>
              {/* Logo */}
              <Link to="/" className="flex items-center" onClick={scrollToTop}>
                <img
                  src={logo}
                  alt="MarketInsight Logo"
                  className={`transition-all duration-300 ${scrolled ? "w-[160px]" : "w-[160px]"
                    } w-auto logo-blue`}
                />
              </Link>

              {/* Desktop Menu - Right aligned */}
              <div className="hidden lg:flex items-center space-x-2">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={scrollToTop}
                    className={`px-5 py-2 rounded-full transition-all duration-300 ${scrolled
                        ? "text-gray-700 hover:text-gray-900 hover:bg-blue-400"
                        : "text-gray-600 hover:text-gray-800"
                      }`}
                  >
                    {item.name}
                  </Link>
                ))}

                {/* Experience a Demo button */}
                <Link
                  to="/demo"
                  onClick={scrollToTop}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ml-2 ${scrolled
                      ? "bg-blue-600 text-white hover:bg-blue-700 shadow-sm"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                    }`}
                >
                  Experience a Demo
                </Link>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`lg:hidden text-2xl transition-colors duration-300 ${scrolled ? "text-gray-800" : "text-gray-600"
                  }`}
              >
                {isOpen ? <HiX /> : <HiMenu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden"
            >
              <div className="bg-white rounded-2xl shadow-lg mx-4 mt-2 p-4 border border-gray-300">
                <div className="space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      className="block px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToTop();
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-2 border-t border-gray-200">
                    <Link
                      to="/demo"
                      className="block w-full text-center bg-blue-600 text-white px-4 py-3 rounded-full hover:bg-blue-700 transition-colors duration-200 mb-2"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToTop();
                      }}
                    >
                      Experience a Demo
                    </Link>
                    <Link
                      to="/contact"
                      className="block w-full text-center border-2 border-gray-800 text-gray-800 px-4 py-3 rounded-full hover:bg-gray-800 hover:text-white transition-colors duration-200"
                      onClick={() => {
                        setIsOpen(false);
                        scrollToTop();
                      }}
                    >
                      Get in touch
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/*  */}
    </>
  );
};

export default Navbar;