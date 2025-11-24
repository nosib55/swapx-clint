export default function Loading() {
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center bg-white">
      {/* Spinner */}
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 border-solid"></div>

      {/* Text */}
      <p className="mt-4 text-gray-600 text-lg font-medium">
        Loading, please wait...
      </p>
    </div>
  );
}
