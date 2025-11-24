export default function HowItWorks() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-blue-600 drop-shadow-sm">
        How SWAP-X Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mt-14 max-w-6xl mx-auto">

        {/* Step 1 */}
        <div className="
          p-8 rounded-2xl shadow-lg bg-white text-center transition 
          transform hover:-translate-y-2 hover:shadow-2xl 
          hover:bg-blue-50 hover:border-blue-300 border
        ">
          <span className="text-5xl">📸</span>
          <h3 className="font-bold text-2xl mt-4 text-gray-800">Post Your Product</h3>
          <p className="text-gray-600 mt-3">
            Upload images, set price, and publish a listing.
          </p>
        </div>

        {/* Step 2 */}
        <div className="
          p-8 rounded-2xl shadow-lg bg-white text-center transition 
          transform hover:-translate-y-2 hover:shadow-2xl 
          hover:bg-green-50 hover:border-green-300 border
        ">
          <span className="text-5xl">🔍</span>
          <h3 className="font-bold text-2xl mt-4 text-gray-800">Explore Listings</h3>
          <p className="text-gray-600 mt-3">
            Discover second-hand products around the area.
          </p>
        </div>

        {/* Step 3 */}
        <div className="
          p-8 rounded-2xl shadow-lg bg-white text-center transition 
          transform hover:-translate-y-2 hover:shadow-2xl 
          hover:bg-purple-50 hover:border-purple-300 border
        ">
          <span className="text-5xl">🤝</span>
          <h3 className="font-bold text-2xl mt-4 text-gray-800">Buy or Swap</h3>
          <p className="text-gray-600 mt-3">
            Connect with sellers and complete safe transactions.
          </p>
        </div>

        {/* Step 4 — Sell New Products */}
        <div className="
          p-8 rounded-2xl shadow-lg bg-white text-center transition 
          transform hover:-translate-y-2 hover:shadow-2xl 
          hover:bg-yellow-50 hover:border-yellow-300 border
        ">
          <span className="text-5xl">🛒</span>
          <h3 className="font-bold text-2xl mt-4 text-gray-800">Buy New Products</h3>
          <p className="text-gray-600 mt-3">
            Browse brand-new items from verified sellers.
          </p>
        </div>

      </div>
    </section>
  );
}
