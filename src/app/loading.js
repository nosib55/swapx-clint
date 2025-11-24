export default function Loading() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="flex flex-col items-center gap-6">

        {/* Glowing Ring Loader */}
        <div className="relative">
          <div className="h-20 w-20 rounded-full border-4 border-blue-500 border-t-transparent animate-spin"></div>

          {/* Glow Effect */}
          <div className="absolute inset-0 h-20 w-20 rounded-full blur-xl bg-blue-400 opacity-30 animate-pulse"></div>
        </div>

        {/* Loading Text */}
        <p className="text-xl font-semibold text-blue-700 animate-pulse tracking-wide">
          Loading, please wait...
        </p>
      </div>
    </div>
  );
}
