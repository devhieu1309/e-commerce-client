function Accessories() {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-6 md:pt-8 space-x-3">
      <div className="bg-white p-2 sm:p-3 rounded-md">
        <h2 className="relative text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[4px] sm:before:w-[5px] md:before:w-[6px] before:h-6 sm:before:h-7 md:before:h-8 before:bg-[#000F8F]">
          Phụ kiện
        </h2>
        <div className="pt-4 sm:pt-5 md:pt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4 gap-y-4">
            {[...Array(12)].map((_, index) => (    
                <div key={index} className="p-2 sm:p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] cursor-pointer">
                    <div className="relative">
                    <div className="h-[120px] sm:h-[140px] md:h-[160px] lg:h-[185px] w-full">
                        <img
                        className="w-full h-full object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                        src="/230913055843-mt0u3fe-a2.webp"
                        alt=""
                        />
                    </div>
                    <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                        Giảm 21%
                        <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                        </span>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2 py-[2px] bg-[#000F8F] w-[55px] sm:w-[60px] md:w-[70px] rounded-2xl absolute bottom-1">
                        <img
                        className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px]"
                        src="/title_image_1_tag.webp"
                        alt=""
                        />
                        <span className="text-white text-[11px] sm:text-[12px] md:text-[13px]">Mới</span>
                    </div>
                    </div>
                    <div className="pt-3 sm:pt-4 md:pt-5">
                    <h3 className="text-[#231F20] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-medium hover:text-amber-400 line-clamp-2">
                        iPad Air 5 64GB - Chính hãng VN
                    </h3>
                    <p className="text-red-500 font-extrabold py-1 sm:py-2 text-[12px] sm:text-[13px] md:text-[14px]">13.390.000đ</p>
                    <del className="text-gray-500 py-1 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px]">16.990.000đ</del>
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#F3F4F6] rounded-sm py-2 sm:py-3 px-2">
                        Bảo hành chính hãng Apple 12 tháng
                    </p>
                    <div className="flex items-center justify-between py-1 sm:py-2">
                        <div className="flex items-center justify-center space-x-1">
                        <img
                            className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] md:h-[15px] md:w-[15px] object-contain"
                            src="/icons8-heart-50.png"
                            alt="Thích"
                        />
                        <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            Thích
                        </span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                        <img
                            className="h-[12px] w-[12px] sm:h-[14px] sm:w-[14px] md:h-[15px] md:w-[15px] object-contain"
                            src="/icons8-circle-50.png"
                            alt="Thích"
                        />
                        <span className="text-[11px] sm:text-[12px] md:text-[13px] lg:text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            So Sánh
                        </span>
                        </div>
                    </div>
                    </div>
                </div>
            ))}
        </div>
        <div className="flex items-center justify-center pt-4 sm:pt-6 md:pt-8 pb-4 sm:pb-5">
          <button className="flex items-center justify-center bg-white px-3 py-1 sm:py-2 space-x-2 rounded-md border border-[#000F8F] text-[13px] sm:text-[14px] md:text-[15px]">
            <span className="text-[#000F8F]">Xem toàn bộ sản phẩm</span>
            <span className="text-[#000F8F] text-[16px] sm:text-[18px] md:text-[20px] font-bold">
              {" "}
              &rarr;{" "}
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Accessories;
