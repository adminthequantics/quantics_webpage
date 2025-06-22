import React from "react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="glass-effect mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">MarketInsight</h3>
            <p className="text-gray-400">Transforming market research with AI-powered insights</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="/services" className="hover:text-secondary">
                  Services
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:text-secondary">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/industries" className="hover:text-secondary">
                  Industries
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-gray-400">contact@marketinsight.com</p>
            <p className="text-gray-400">+1 (555) 123-4567</p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <FaLinkedin className="text-2xl hover:text-secondary cursor-pointer" />
              <FaTwitter className="text-2xl hover:text-secondary cursor-pointer" />
              <FaGithub className="text-2xl hover:text-secondary cursor-pointer" />
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 MarketInsight. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
