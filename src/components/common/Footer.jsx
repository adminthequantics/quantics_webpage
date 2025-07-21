import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaEnvelope,
  FaPhone,
  FaBrain,
  FaChartLine,
  FaRocket,
  FaArrowRight
} from "react-icons/fa";
import { HiSparkles } from "react-icons/hi";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand & Description */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6"
            >
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                The Quantics
              </h3>
              <div className="flex items-center gap-2 mb-4">
                <HiSparkles className="text-purple-400" />
                <span className="text-sm text-gray-400">AI-Powered Market Intelligence Platform</span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Transform your business decisions with real-time market insights powered by advanced AI.
                Our platform analyzes millions of data points to deliver actionable intelligence that drives growth.
              </p>
            </motion.div>
          </div>

          {/* Solutions */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Solutions</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/services" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group">
                  <FaChartLine className="text-xs text-blue-400" />
                  <span>Market Analytics</span>
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/solutions" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group">
                  <FaBrain className="text-xs text-purple-400" />
                  <span>AI Solutions</span>
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/industries" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group">
                  <FaRocket className="text-xs text-pink-400" />
                  <span>Industries</span>
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link to="/demo" onClick={scrollToTop} className="text-gray-400 hover:text-white text-sm transition-all duration-200 flex items-center gap-2 group">
                  <HiSparkles className="text-xs text-yellow-400" />
                  <span>Free Demo</span>
                  <FaArrowRight className="text-xs opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & CTA */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-gray-300">Get Started</h4>
            <motion.div whileHover={{ scale: 1.05 }} className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-xl mb-6">
              <p className="text-sm font-semibold mb-2">Ready to transform your research?</p>
              <Link to="/demo" onClick={scrollToTop} className="inline-flex items-center gap-2 text-xs bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                Start Free Trial
                <FaArrowRight className="text-xs" />
              </Link>
            </motion.div>

            <ul className="space-y-3">
              <li>
                <a href="mailto:hello@thequantics.com" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <FaEnvelope className="text-xs text-blue-400" />
                  sales@thequantics.com
                </a>
              </li>
              <li>
                <a href="tel:+918619183712" className="text-gray-400 hover:text-white text-sm transition-colors flex items-center gap-2">
                  <FaPhone className="text-xs text-green-400" />
                  ‎+91 86191 83712
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <p className="text-gray-400 text-sm">
                &copy; {currentYear} The Quantics. All rights reserved.
              </p>
              <div className="flex gap-6 text-sm">
                <Link to="/privacy" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
                <Link to="/terms" onClick={scrollToTop} className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-4">
              <span className="text-xs text-gray-500 mr-2">Follow us:</span>
              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                className="w-10 h-10 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg flex items-center justify-center hover:from-blue-600 hover:to-blue-700 transition-all duration-300 group"
              >
                <FaLinkedin className="text-sm group-hover:scale-110 transition-transform" />
              </motion.a>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-center"
          >
            <div className="inline-flex items-center gap-2 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>AI Systems Online</span>
              </div>
              <span>•</span>
              <span>Processing 125K requests/sec</span>
              <span>•</span>
              <span>99.99% Uptime</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
    </footer>
  );
};

export default Footer;
