function IpadProBanner() {
  return (
    <>
      <div className="container mx-auto px-32 pt-8 flex space-x-3 ">
        <div className="overflow-hidden rounded-md">
          <img
            className="h-[220px] object-cover rounded-md transform transition-transform duration-2500 hover:scale-105"
            src="/banner2.webp"
          alt="Banner"
          />
        </div>
      </div>
    </>
  );
}

export default IpadProBanner;
