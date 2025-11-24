import { FaFacebook, FaInstagram, FaTwitter, FaGlobe } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">

        {/* Left: Logo + Slogan */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <img src="/logo.png" alt="logo" className="w-32 mx-auto md:mx-0" />
          <p className="mt-3 text-gray-400">
            The smarter way to buy & sell second-hand products.
          </p>
        </div>

        {/* Right: Social Icons */}
        <div className="flex gap-6 text-2xl">

          <a href="#" className="hover:text-blue-500 transition">
            <FaGlobe />
          </a>

          <a href="#" className="hover:text-blue-500 transition">
            <FaFacebook />
          </a>

          <a href="#" className="hover:text-blue-500 transition">
            <FaInstagram />
          </a>

          <a href="#" className="hover:text-blue-500 transition">
            <FaTwitter />
          </a>

        </div>

      </div>

      {/* Bottom line */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-800 pt-4">
        © {new Date().getFullYear()} SWAP-X — All rights reserved.
      </div>
    </footer>
  );
}
