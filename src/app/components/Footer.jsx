export default function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        
        {/* Left side: Logo + slogan */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold text-blue-600">SWAP-X</h2>
          <p className="text-gray-600 mt-1">
            Smart platform to buy & sell second-hand products.
          </p>
        </div>

        {/* Right side: Social links */}
        <div className="flex gap-4 text-gray-600 text-2xl mt-4 md:mt-0">
          <a href="#" className="hover:text-blue-600">🌐</a>
          <a href="#" className="hover:text-blue-600">📘</a>
          <a href="#" className="hover:text-blue-600">📸</a>
          <a href="#" className="hover:text-blue-600">🐦</a>
        </div>

      </div>

      <p className="text-center text-gray-500 text-sm mt-6">
        © {new Date().getFullYear()} SWAP-X. All rights reserved.
      </p>
    </footer>
  );
}
