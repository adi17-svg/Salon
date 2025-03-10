import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Brand section */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start items-center mb-4">
              <div className="relative">
                <div className="absolute -inset-2 bg-amber-200 rounded-full blur opacity-30">
                  <h3 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-amber-500 to-amber-700 bg-clip-text text-transparent relative">
                    BeautySalon
                  </h3>
                </div>
              </div>
              <p className="text-amber-600 text-sm leading-relaxed max-w-xs mx-auto md:mx-0 font-medium">
                Discover your natural glow with our premium beauty treatments
                and expert care
              </p>
            </div>
          </div>

          {/* Timing section */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">
              Opening hours
            </h4>
            <ul className="space-y-2">
              <li className="text-gray-600 text-sm">
                <span className="font-medium">Tuesday-Saturday</span> 9AM-7PM
              </li>
              <li className="text-gray-600 text-sm">
                <span className="font-medium">Sunday</span> 10AM-10PM
              </li>
              <li className="text-gray-600 text-sm">
                <span className="font-medium">Monday</span> Closed
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="text-center md:text-left">
            <h4 className="text-lg font-semibold text-amber-800 mb-4 font-[Poppins]">
              Explore
            </h4>
            <ul className="space-y-3">
              {["Home", "About", "Services", "Book appointment"].map((link) => (
                <li key={link} className="flex items-center">
                  {/* Dot */}
                  <span className="bg-amber-200 group-hover:bg-amber-300 w-1.5 h-1.5 rounded-full mr-2 transition-colors"></span>
                  {/* Link text */}
                  <a
                    href="#"
                    className="text-amber-600 hover:text-amber-800 transition-all text-sm font-medium"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
