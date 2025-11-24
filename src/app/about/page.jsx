export default function AboutPage() {
  return (
    <section className="w-full min-h-screen px-6 py-20 bg-gray-50 text-gray-800">
      <div className="max-w-5xl mx-auto space-y-10">
        <h1 className="text-4xl md:text-6xl font-extrabold text-blue-700">About SWAP-X</h1>

        <p className="text-lg md:text-xl leading-relaxed text-gray-700">
          SWAP-X is a modern web application designed for buying and selling both new and second-hand products. 
          The platform provides a simple, clean, and secure environment for users to list products, explore great deals, 
          and manage items with ease. Whether someone is clearing unused items or searching for budget-friendly gadgets, 
          SWAP-X brings convenience and accessibility together.
        </p>

        <h2 className="text-3xl font-bold text-blue-600">Our Mission</h2>
        <p className="text-lg md:text-xl text-gray-700">
          The mission of SWAP-X is to encourage sustainable buying practices by giving products a second life.
          By connecting buyers and sellers in one streamlined marketplace, the platform helps reduce waste while supporting affordability.
        </p>

        <h2 className="text-3xl font-bold text-blue-600">Why SWAP-X?</h2>
        <ul className="space-y-4 text-lg text-gray-700 list-disc list-inside">
          <li>Easy-to-use interface with smooth navigation.</li>
          <li>Secure login and protected forms through NextAuth.js.</li>
          <li>Modern, responsive UI built with Next.js App Router.</li>
          <li>Ability to add, manage, and explore a wide range of products.</li>
          <li>Focused on sustainability and practical buying.</li>
        </ul>

        <h2 className="text-3xl font-bold text-blue-600">Technologies Used</h2>
        <ul className="space-y-2 text-lg text-gray-700 list-disc list-inside">
          <li>Next.js (App Router)</li>
          <li>NextAuth.js for secure authentication</li>
          <li>Tailwind CSS for clean UI</li>
          <li>Express.js backend for product management</li>
        </ul>

        <div className="mt-10 p-6 bg-white shadow-lg rounded-xl border border-gray-200">
          <h3 className="text-2xl font-bold text-blue-600 mb-3">The Vision</h3>
          <p className="text-lg text-gray-700">
            SWAP-X aims to become a trusted platform where users can confidently buy and sell products.
            The long-term vision includes expanding categories, improving user tools, and integrating advanced features
            like bidding, AI-powered recommendations, and smart product verification.
          </p>
        </div>
      </div>
    </section>
  );
}