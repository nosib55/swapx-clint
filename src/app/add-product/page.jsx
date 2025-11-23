"use client";

import { useState } from "react";

export default function AddProductPage() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [shortDescription, setShortDescription] = useState("");
  const [details, setDetails] = useState("");
  const [sellerNumber, setSellerNumber] = useState(""); // ⭐ NEW FIELD

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Product Added:", {
      title,
      price,
      image,
      shortDescription,
      details,
      sellerNumber, // ⭐ include seller number
    });

    alert("Product added successfully! (Demo only)");

    // reset form
    setTitle("");
    setPrice("");
    setImage("");
    setShortDescription("");
    setDetails("");
    setSellerNumber(""); // reset
  };

  return (
    <div className="px-6 py-20 max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Add New Product</h1>
      <p className="text-gray-600 text-center mt-2">
        Create a new listing on SWAP-X
      </p>

      <form onSubmit={handleSubmit} className="mt-10 space-y-6">

        {/* Title */}
        <div>
          <label className="font-semibold">Product Title</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Ex: Used Camera"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="font-semibold">Price (USD)</label>
          <input
            type="number"
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Ex: 150"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>

        {/* Image URL */}
        <div>
          <label className="font-semibold">Image URL</label>
          <input
            type="text"
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Ex: https://example.com/photo.jpg"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
        </div>

        {/* Seller Number */}
        <div>
          <label className="font-semibold">Seller Phone Number</label>
          <input
            type="tel"
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Ex: 017XXXXXXXX"
            value={sellerNumber}
            onChange={(e) => setSellerNumber(e.target.value)}
            required
          />
        </div>

        {/* Short Description */}
        <div>
          <label className="font-semibold">Short Description</label>
          <textarea
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Ex: Excellent condition, perfect for beginners"
            rows="3"
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Full Details */}
        <div>
          <label className="font-semibold">Full Details</label>
          <textarea
            className="w-full mt-2 p-3 border rounded-lg"
            placeholder="Complete product details here..."
            rows="5"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Add Product
        </button>
      </form>
    </div>
  );
}
