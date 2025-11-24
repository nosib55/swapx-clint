export default function Hero() {
  return (
    <section
      className="relative w-full h-screen bg-gradient-to-br from-blue-600 to-purple-700 flex items-center justify-center px-8 text-white"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl text-center space-y-6">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-xl">
          Discover Great Deals
        </h1>

        <p className="text-lg md:text-2xl text-gray-200 max-w-2xl mx-auto">
          Explore a wide range of gadgets, electronics, and accessories at unbeatable prices.
        </p>

        <a
          href="/products"
          className="inline-block mt-4 px-10 py-4 bg-white text-blue-700 font-semibold rounded-xl shadow-lg hover:bg-gray-200 transition"
        >
          Browse Products
        </a>
      </div>
    </section>
  );
}