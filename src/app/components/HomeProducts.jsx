"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "@/app/loading";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch first 4 products
  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await fetch("https://swapx-server.vercel.app/products");
        const data = await res.json();
        setProducts(data.slice(0, 4)); // show only 4 products
      } catch (error) {
        console.error("Error loading products:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProducts();
  }, []);

  if (loading) return <Loading />;

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">

      {/* Section Title */}
      <h1 className="text-4xl font-bold text-center">Featured Products</h1>
      <p className="text-center text-gray-600 mt-2">
        Explore the latest items available for sale
      </p>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 mt-12">
        {products.map((product) => (
          <Link
            key={product._id}
            href={`/products/${product._id}`}
            className="block bg-white border rounded-xl shadow hover:shadow-lg hover:-translate-y-1 transition"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-48 object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="text-lg font-semibold">{product.title}</h3>
              <p className="text-blue-600 font-bold mt-1">{product.price} TK</p>
              <p className="text-gray-600 text-sm mt-1 line-clamp-2">
                {product.shortDescription}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* View All Button */}
      <div className="text-center mt-12">
        <Link
          href="/products"
          className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          View All Products →
        </Link>
      </div>
    </div>
  );
}
