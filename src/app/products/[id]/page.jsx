"use client";

import { useParams } from "next/navigation";
import { demoProducts } from "../page";

export default function ProductDetails() {
  const { id } = useParams();

  const product = demoProducts.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="text-center py-20 text-3xl">
        Product not found
      </div>
    );
  }

  // ⭐ Add to Cart Function
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartProducts")) || [];

    // avoid duplicates
    const alreadyAdded = existingCart.find((p) => p.id === product.id);
    if (!alreadyAdded) {
      existingCart.push(product);
    }

    localStorage.setItem("cartProducts", JSON.stringify(existingCart));

    alert("Product added to Manage Products!");
  };

  return (
    <div className="px-6 py-20 max-w-5xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <img
          src={product.image}
          alt={product.title}
          className="w-full h-auto rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>

          <p className="text-blue-600 text-2xl mt-2 font-semibold">
            ${product.price}
          </p>

          <p className="mt-6 text-gray-700">{product.shortDescription}</p>

          <p className="mt-4 text-gray-800 text-lg font-medium">
            Seller Number:{" "}
            <span className="font-bold text-blue-700">
              {product.sellerNumber}
            </span>
          </p>

          {/* ⭐ Add To Cart Button */}
          <button
            onClick={handleAddToCart}
            className="mt-8 px-8 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Add To Cart
          </button>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Full Details</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          {product.details}
        </p>
      </div>
    </div>
  );
}
