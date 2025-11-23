export default function Hero() {
  return (
    <section
      className="
        relative w-full h-screen 
        bg-cover bg-center bg-no-repeat 
        flex items-center justify-center 
        px-6
      "
      style={{ backgroundImage: "url('/hero-bg.png')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl text-white px-4">
        <h1 className="
          text-4xl 
          sm:text-5xl 
          md:text-6xl 
          font-extrabold 
          drop-shadow-xl
        ">
          SWAP-X
        </h1>

        <p className="
          text-base 
          sm:text-lg 
          md:text-xl 
          text-gray-200 
          mt-4 
          drop-shadow
        ">
          Buy, sell, and discover second-hand products with ease.
        </p>

        <button 
          className="
            mt-8 
            px-6 py-3 
            sm:px-8 sm:py-4 
            md:px-10 md:py-4 
            bg-blue-600 
            text-white 
            rounded-lg 
            text-sm 
            sm:text-base 
            md:text-lg 
            hover:bg-blue-700 
            transition 
            shadow-lg
          "
        >
         <a href="/products">Start Exploring</a>
        </button>
      </div>
    </section>
  );
}
