"use client";

export default function ErrorPage({ error }) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      
      <h1 className="text-4xl font-bold text-red-600">
        Something went wrong!
      </h1>

      <p className="text-gray-700 mt-3 text-lg text-center px-4">
        {error?.message || "An unexpected error occurred."}
      </p>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>
    </div>
  );
}
