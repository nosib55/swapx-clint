export default function WhyUs() {
  return (
    <section className="py-20 px-6 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-gray-800">
        Why Choose <span className="text-blue-600">SWAP-X?</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-14 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="
          p-8 rounded-2xl 
          bg-gradient-to-br from-blue-50 to-blue-100
          shadow-md 
          hover:shadow-xl hover:-translate-y-2 
          transition duration-300
        ">
          <div className="text-5xl mb-4">✨</div>
          <h3 className="font-bold text-2xl text-gray-800">User Friendly</h3>
          <p className="text-gray-700 mt-3">
            A clean and simple experience designed for easy buying and selling.
          </p>
        </div>

        {/* Card 2 */}
        <div className="
          p-8 rounded-2xl 
          bg-gradient-to-br from-yellow-50 to-yellow-100
          shadow-md 
          hover:shadow-xl hover:-translate-y-2 
          transition duration-300
        ">
          <div className="text-5xl mb-4">💸</div>
          <h3 className="font-bold text-2xl text-gray-800">No Fees</h3>
          <p className="text-gray-700 mt-3">
            SWAP-X does not charge commission. Every penny remains yours.
          </p>
        </div>

        {/* Card 3 */}
        <div className="
          p-8 rounded-2xl 
          bg-gradient-to-br from-green-50 to-green-100
          shadow-md 
          hover:shadow-xl hover:-translate-y-2 
          transition duration-300
        ">
          <div className="text-5xl mb-4">🔐</div>
          <h3 className="font-bold text-2xl text-gray-800">Secure & Trusted</h3>
          <p className="text-gray-700 mt-3">
            Verified listings and safe user profiles for worry-free transactions.
          </p>
        </div>

      </div>
    </section>
  );
}
