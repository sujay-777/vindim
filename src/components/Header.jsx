

import { FaTwitter, FaInstagram, FaReddit, FaEnvelope } from "react-icons/fa";

const Header = () => {
  return (
    <header className="w-full py-4 bg-transparent text-white flex items-center justify-between px-8 fixed top-0 left-0 z-50">
      {/* Logo / Brand Name */}
      <h1 className="text-2xl font-bold font-poppins">VINDIM</h1>

      {/* Social Media Links */}
      <nav className="flex space-x-6 text-lg font-medium">
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaTwitter size={20} />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaInstagram size={20} />
        </a>
        <a
          href="mailto:example@email.com"
          className="opacity-80 hover:opacity-100 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaEnvelope size={20} />
        </a>
        <a
          href="https://reddit.com"
          target="_blank"
          rel="noopener noreferrer"
          className="opacity-80 hover:opacity-100 hover:text-purple-400 transition-all duration-300 transform hover:scale-110"
        >
          <FaReddit size={20} />
        </a>
      </nav>
    </header>
  );
};

export default Header;

