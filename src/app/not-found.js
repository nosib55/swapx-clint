"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 px-6">

      {/* Emoji */}
      <div className="text-7xl mb-4">😕</div>

      <h1 className="text-4xl font-bold text-blue-600">Page Not Found</h1>

      <p className="text-gray-600 text-center mt-3 max-w-md text-lg">
        Oops! We can’t seem to find the page you’re looking for.
      </p>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="mt-8 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
      >
        ← Go Back
      </button>
    </div>
  );
}
