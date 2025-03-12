import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          {/* About Section */}
          <div>
            <h2 className="text-xl font-semibold">Md. Al-Amin Hossain</h2>
            <p className="text-gray-400 mt-2">
              Frontend Developer | React.js | Tailwind CSS
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl font-semibold">Quick Links</h2>
            <ul className="mt-2 space-y-2">
              <li>
                <a href="#about" className="text-gray-400 hover:text-white">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="text-gray-400 hover:text-white">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="text-gray-400 hover:text-white">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div>
            <h2 className="text-xl font-semibold">Follow Me</h2>
            <div className="flex justify-center md:justify-start space-x-4 mt-2">
              <a
                href="https://github.com/alamin20cse"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/md-al-amin-hossain-08146b355/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://www.facebook.com/md.al.amin.hossain.706026/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white text-2xl"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Md. Al-Amin Hossain. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
