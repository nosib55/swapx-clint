"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Loading from "../../loading";
import Swal from "sweetalert2";
import ProtectedRoute from "../../components/ProtectedRoute";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [isAdded, setIsAdded] = useState(false);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/products/${id}`);

        if (!res.ok) {
          throw new Error("Failed to fetch product");
        }

        const data = await res.json();
        setProduct(data);

        // Check if product already in cart
        const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
        const already = cart.find((p) => p._id === data._id);
        if (already) setIsAdded(true);

      } catch (err) {
        console.error("Error fetching product:", err);
        setProduct(null);
      } finally {
        setLoading(false);
      }
    }

    fetchProduct();
  }, [id]);

  if (loading) return <Loading />;

  if (!product) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold text-red-600">Product not found</h1>
        <button
          onClick={() => window.history.back()}
          className="mt-6 px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
        >
          ← Go Back
        </button>
      </div>
    );
  }

  // ⭐ Add to Cart
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cartProducts")) || [];
    const alreadyAdded = existingCart.find((p) => p._id === product._id);

    if (!alreadyAdded) {
      existingCart.push(product);
      localStorage.setItem("cartProducts", JSON.stringify(existingCart));
      setIsAdded(true);
    }

    Swal.fire({
      title: "Added to Cart!",
      text: `${product.title} is now in your cart.`,
      icon: "success",
      confirmButtonColor: "#3085d6",
      confirmButtonText: "OK",
    });
  };

  return (
    <ProtectedRoute>
      <div className="px-6 py-20 max-w-5xl mx-auto">
      
      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mb-8 px-5 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
      >
        ← Back
      </button>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

        <img
          src={product.imageUrl}
          alt={product.title}
          className="w-full h-auto rounded-xl shadow-lg"
        />

        <div>
          <h1 className="text-4xl font-bold">{product.title}</h1>

          <p className="text-blue-600 text-2xl mt-2 font-semibold">
            {product.price} TK
          </p>

          <p className="mt-6 text-gray-700">{product.shortDescription}</p>

          <p className="mt-4 text-gray-800 text-lg font-medium">
            Seller Number: <span className="font-bold text-blue-700">{product.sellerNumber}</span>
          </p>

          <p className="mt-2 text-gray-800 text-lg font-medium">
            Location: <span className="font-semibold text-green-700">{product.location}</span>
          </p>

          {/* ⭐ Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={isAdded}
            className={`mt-8 px-8 py-3 rounded-lg transition ${
              isAdded
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-green-600 hover:bg-green-700 text-white"
            }`}
          >
            {isAdded ? "✓ Added in Cart" : "Add To Cart"}
          </button>
        </div>
      </div>

      <div className="mt-16 bg-gray-50 p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold">Full Details</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">{product.fullDescription}</p>
      </div>
    </div>
    </ProtectedRoute>
  );
}
