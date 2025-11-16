function Iphone15ProBanner() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-6 md:pt-8 flex space-x-3">
        <div className="overflow-hidden rounded-md w-full">
          <img
            className="h-[150px] sm:h-[180px] md:h-[200px] lg:h-[220px] w-full object-cover rounded-md transform transition-transform duration-2500 hover:scale-105"
            src="/banner.webp"
            alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default Iphone15ProBanner;
