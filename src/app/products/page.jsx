"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Loading from "../loading";
import ErrorPage from "../error";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products`);
        const data = await res.json();

        setProducts(data);
      } catch (error) { <ErrorPage error={error}></ErrorPage>
        console.error("Failed to fetch products:", error);
      }
    }

    loadProducts();
  }, []);

  return (
    <div className="px-6 py-16 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center">All Products</h1>
      <p className="text-center text-gray-600 mt-2">
        Explore all available second-hand products on SWAP-X
      </p>

      
      {products.length === 0 && (
<Loading></Loading>      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
        {products.map((product) => (
          <Link
            key={product._id || product.id}
            href={`/products/${product._id || product.id}`}
            className="block bg-white border rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
          >
            <img
              src={product.imageUrl}
              alt={product.title}
              className="w-full h-56 object-cover rounded-t-xl"
            />

            <div className="p-4">
              <h3 className="font-bold text-xl">{product.title}</h3>

              <p className="text-blue-600 font-semibold mt-2 text-lg">
                {product.price} TK
              </p>

              <p className="text-gray-600 text-sm mt-2 line-clamp-2">
                {product.shortDescription}
              </p>

              <p className="text-gray-700 mt-3 text-sm">
                Seller:{" "}
                <span className="font-semibold">{product.sellerNumber}</span>
              </p>

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
