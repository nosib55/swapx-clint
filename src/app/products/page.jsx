import Link from "next/link";

// ⭐ Demo product data with seller number
export const demoProducts = [
  {
    id: "1",
    title: "Used Camera",
    price: 150,
    image: "https://placehold.co/500x400?text=Camera",
    shortDescription: "Great camera for beginners.",
    details: "Includes battery, strap, and memory card. Works perfectly.",
    sellerNumber: "01711111111",
  },
  {
    id: "2",
    title: "Gaming Laptop",
    price: 550,
    image: "https://placehold.co/500x400?text=Laptop",
    shortDescription: "Powerful laptop for gaming and work.",
    details: "16GB RAM, 512GB SSD, GTX graphics.",
    sellerNumber: "01822222222",
  },
  {
    id: "3",
    title: "Wireless Headphones",
    price: 40,
    image: "https://placehold.co/500x400?text=Headphones",
    shortDescription: "Comfortable and long battery life.",
    details: "Noise cancelling, 20 hours battery.",
    sellerNumber: "01933333333",
  },
];

export default function ProductsPage() {
  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      {/* Page Title */}
      <h1 className="text-4xl font-bold text-center">All Products</h1>
      <p className="text-center text-gray-600 mt-2">
        Explore all available second-hand products on SWAP-X
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
        {demoProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            className="block bg-white border rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            {/* Product Image */}
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />

            {/* Card Body */}
            <div className="p-4">
              <h3 className="font-bold text-xl">{product.title}</h3>

              <p className="text-blue-600 font-semibold mt-2 text-lg">
                ${product.price}
              </p>

              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {product.shortDescription}
              </p>

              {/* Seller Number */}
              <p className="text-gray-700 mt-3 text-sm">
                Seller:{" "}
                <span className="font-semibold">{product.sellerNumber}</span>
              </p>

              {/* View Details */}
              <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                View Details
              </button>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
