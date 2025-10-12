import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function Ipad() {
  return (
    <>
      <div className="container mx-auto px-32 pt-8 flex space-x-3">
        <div className="bg-white flex-1 p-2 rounded-md">
          <div className="flex items-center justify-between pb-6">
            <h2 className="relative text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-8 before:bg-[#000F8F]">
              IPad
            </h2>
            <div className="flex space-x-5">
              <div className="text-[#000F8F] text-[16px] font-medium bg-gray-200 rounded-md px-2 py-1 hover:text-white hover:bg-[#000F8F]">
                iPad Pro
              </div>
              <div className="text-[#000F8F] text-[16px] font-medium bg-gray-200 rounded-md px-2 py-1 hover:text-white hover:bg-[#000F8F]">
                iPad Air
              </div>
              <div className="text-[#000F8F] text-[16px] font-medium bg-gray-200 rounded-md px-2 py-1 hover:text-white hover:bg-[#000F8F]">
                iPad Gen 10
              </div>
              <div className="text-[#000F8F] text-[16px] font-medium bg-gray-200 rounded-md px-2 py-1 hover:text-white hover:bg-[#000F8F]">
                iPad Gen 9
              </div>
            </div>
          </div>
          <div className="w-[900px]">
            <Swiper
              slidesPerView={4} // ✅ hiển thị 4 slide cùng lúc
              spaceBetween={10}
              modules={[Navigation]}
              navigation={true}
              pagination={{ type: "fraction" }}
              className="mySwiper bg-white"
            >
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[190px] w-[190px]">
                        <img
                          className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/220309063455-ipad-air-select-wif.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
                          <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                        </span>
                      </div>
                      <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                        <img
                          className="h-[20px] w-[20px]"
                          src="/title_image_1_tag.webp"
                          alt=""
                        />
                        <span className="text-white text-[13px]">Mới</span>
                      </div>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                        iPad Air 5 64GB - Chính hãng VN
                      </h3>
                      <p className="text-red-500 font-extrabold py-2">
                        13.390.000đ
                      </p>
                      <del className="text-gray-500 py-2">16.990.000đ</del>
                      <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                        Bảo hành chính hãng Apple 12 tháng
                      </p>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-heart-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            Thích
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-circle-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            So Sánh
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[190px] w-[190px]">
                        <img
                          className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/220309063455-ipad-air-select-wif.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
                          <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                        </span>
                      </div>
                      <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                        <img
                          className="h-[20px] w-[20px]"
                          src="/title_image_1_tag.webp"
                          alt=""
                        />
                        <span className="text-white text-[13px]">Mới</span>
                      </div>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                        iPad Air 5 64GB - Chính hãng VN
                      </h3>
                      <p className="text-red-500 font-extrabold py-2">
                        13.390.000đ
                      </p>
                      <del className="text-gray-500 py-2">16.990.000đ</del>
                      <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                        Bảo hành chính hãng Apple 12 tháng
                      </p>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-heart-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            Thích
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-circle-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            So Sánh
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[190px] w-[190px]">
                        <img
                          className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/220309063455-ipad-air-select-wif.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
                          <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                        </span>
                      </div>
                      <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                        <img
                          className="h-[20px] w-[20px]"
                          src="/title_image_1_tag.webp"
                          alt=""
                        />
                        <span className="text-white text-[13px]">Mới</span>
                      </div>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                        iPad Air 5 64GB - Chính hãng VN
                      </h3>
                      <p className="text-red-500 font-extrabold py-2">
                        13.390.000đ
                      </p>
                      <del className="text-gray-500 py-2">16.990.000đ</del>
                      <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                        Bảo hành chính hãng Apple 12 tháng
                      </p>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-heart-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            Thích
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-circle-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            So Sánh
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[190px] w-[190px]">
                        <img
                          className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/220309063455-ipad-air-select-wif.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
                          <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                        </span>
                      </div>
                      <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                        <img
                          className="h-[20px] w-[20px]"
                          src="/title_image_1_tag.webp"
                          alt=""
                        />
                        <span className="text-white text-[13px]">Mới</span>
                      </div>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                        iPad Air 5 64GB - Chính hãng VN
                      </h3>
                      <p className="text-red-500 font-extrabold py-2">
                        13.390.000đ
                      </p>
                      <del className="text-gray-500 py-2">16.990.000đ</del>
                      <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                        Bảo hành chính hãng Apple 12 tháng
                      </p>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-heart-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            Thích
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-circle-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            So Sánh
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[190px] w-[190px]">
                        <img
                          className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/220309063455-ipad-air-select-wif.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
                          <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                        </span>
                      </div>
                      <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                        <img
                          className="h-[20px] w-[20px]"
                          src="/title_image_1_tag.webp"
                          alt=""
                        />
                        <span className="text-white text-[13px]">Mới</span>
                      </div>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                        iPad Air 5 64GB - Chính hãng VN
                      </h3>
                      <p className="text-red-500 font-extrabold py-2">
                        13.390.000đ
                      </p>
                      <del className="text-gray-500 py-2">16.990.000đ</del>
                      <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                        Bảo hành chính hãng Apple 12 tháng
                      </p>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-heart-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            Thích
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-circle-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            So Sánh
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[190px] w-[190px]">
                        <img
                          className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/220309063455-ipad-air-select-wif.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
                          <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                        </span>
                      </div>
                      <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                        <img
                          className="h-[20px] w-[20px]"
                          src="/title_image_1_tag.webp"
                          alt=""
                        />
                        <span className="text-white text-[13px]">Mới</span>
                      </div>
                    </div>
                    <div className="pt-5">
                      <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                        iPad Air 5 64GB - Chính hãng VN
                      </h3>
                      <p className="text-red-500 font-extrabold py-2">
                        13.390.000đ
                      </p>
                      <del className="text-gray-500 py-2">16.990.000đ</del>
                      <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                        Bảo hành chính hãng Apple 12 tháng
                      </p>
                      <div className="flex items-center justify-between py-2">
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-heart-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            Thích
                          </span>
                        </div>
                        <div className="flex items-center justify-center space-x-1">
                          <img
                            className="h-[15px] w-[15px] object-contain"
                            src="/icons8-circle-50.png"
                            alt="Thích"
                          />
                          <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                            So Sánh
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
          {/* <div className="grid grid-cols-4 gap-6 pb-8">
            <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
              <div className="relative">
                <div className="h-[200px] w-[200px]">
                  <img
                    className="object-contain"
                    src="/220309063455-ipad-air-select-wif.webp"
                    alt=""
                  />
                </div>
                <div className="absolute top-2">
                  <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                    Giảm 21%
                    <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                  </span>
                </div>
                <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                  <img
                    className="h-[20px] w-[20px]"
                    src="/title_image_1_tag.webp"
                    alt=""
                  />
                  <span className="text-white text-[13px]">Mới</span>
                </div>
              </div>
              <div className="pt-5">
                <h3 className="text-[#231F20] text-[16px] font-medium">
                  iPad Air 5 64GB - Chính hãng VN
                </h3>
                <p className="text-red-500 font-extrabold py-2">13.390.000đ</p>
                <del className="text-gray-500 py-2">16.990.000đ</del>
                <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                  Bảo hành chính hãng Apple 12 tháng
                </p>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center justify-center space-x-1">
                    <img
                      className="h-[15px] w-[15px] object-contain"
                      src="/icons8-heart-50.png"
                      alt="Thích"
                    />
                    <span className="text-[15px] text-[#231F20] font-semibold">
                      Thích
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <img
                      className="h-[15px] w-[15px] object-contain"
                      src="/icons8-circle-50.png"
                      alt="Thích"
                    />
                    <span className="text-[15px] text-[#231F20] font-semibold">
                      So Sánh
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
              <div className="relative">
                <div className="h-[200px] w-[200px]">
                  <img
                    className="object-contain"
                    src="/220309063455-ipad-air-select-wif.webp"
                    alt=""
                  />
                </div>
                <div className="absolute top-2">
                  <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                    Giảm 21%
                    <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                  </span>
                </div>
                <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                  <img
                    className="h-[20px] w-[20px]"
                    src="/title_image_1_tag.webp"
                    alt=""
                  />
                  <span className="text-white text-[13px]">Mới</span>
                </div>
              </div>
              <div className="pt-5">
                <h3 className="text-[#231F20] text-[16px] font-medium">
                  iPad Air 5 64GB - Chính hãng VN
                </h3>
                <p className="text-red-500 font-extrabold py-2">13.390.000đ</p>
                <del className="text-gray-500 py-2">16.990.000đ</del>
                <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                  Bảo hành chính hãng Apple 12 tháng
                </p>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center justify-center space-x-1">
                    <img
                      className="h-[15px] w-[15px] object-contain"
                      src="/icons8-heart-50.png"
                      alt="Thích"
                    />
                    <span className="text-[15px] text-[#231F20] font-semibold">
                      Thích
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <img
                      className="h-[15px] w-[15px] object-contain"
                      src="/icons8-circle-50.png"
                      alt="Thích"
                    />
                    <span className="text-[15px] text-[#231F20] font-semibold">
                      So Sánh
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
              <div className="relative">
                <div className="h-[200px] w-[200px]">
                  <img
                    className="object-contain"
                    src="/220309063455-ipad-air-select-wif.webp"
                    alt=""
                  />
                </div>
                <div className="absolute top-2">
                  <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                    Giảm 21%
                    <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                  </span>
                </div>
                <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                  <img
                    className="h-[20px] w-[20px]"
                    src="/title_image_1_tag.webp"
                    alt=""
                  />
                  <span className="text-white text-[13px]">Mới</span>
                </div>
              </div>
              <div className="pt-5">
                <h3 className="text-[#231F20] text-[16px] font-medium">
                  iPad Air 5 64GB - Chính hãng VN
                </h3>
                <p className="text-red-500 font-extrabold py-2">13.390.000đ</p>
                <del className="text-gray-500 py-2">16.990.000đ</del>
                <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                  Bảo hành chính hãng Apple 12 tháng
                </p>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center justify-center space-x-1">
                    <img
                      className="h-[15px] w-[15px] object-contain"
                      src="/icons8-heart-50.png"
                      alt="Thích"
                    />
                    <span className="text-[15px] text-[#231F20] font-semibold">
                      Thích
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <img
                      className="h-[15px] w-[15px] object-contain"
                      src="/icons8-circle-50.png"
                      alt="Thích"
                    />
                    <span className="text-[15px] text-[#231F20] font-semibold">
                      So Sánh
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
              <div className="relative">
                <div className="h-[200px] w-[200px]">
                  <img
                    className="object-contain"
                    src="/220309063455-ipad-air-select-wif.webp"
                    alt=""
                  />
                </div>
                <div className="absolute top-2">
                  <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                    Giảm 21%
                    <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                  </span>
                </div>
                <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
                  <img
                    className="h-[20px] w-[20px]"
                    src="/title_image_1_tag.webp"
                    alt=""
                  />
                  <span className="text-white text-[13px]">Mới</span>
                </div>
              </div>
              <div className="pt-5">
                <h3 className="text-[#231F20] text-[16px] font-medium">
                  iPad Air 5 64GB - Chính hãng VN
                </h3>
                <p className="text-red-500 font-extrabold py-2">13.390.000đ</p>
                <del className="text-gray-500 py-2">16.990.000đ</del>
                <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                  Bảo hành chính hãng Apple 12 tháng
                </p>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center justify-center space-x-1">
                    <img
                      className="h-[15px] w-[15px] object-contain"
                      src="/icons8-heart-50.png"
                      alt="Thích"
                    />
                    <span className="text-[15px] text-[#231F20] font-semibold">
                      Thích
                    </span>
                  </div>
                  <div className="flex items-center justify-center space-x-1">
                    <img
                      className="h-[15px] w-[15px] object-contain"
                      src="/icons8-circle-50.png"
                      alt="Thích"
                    />
                    <span className="text-[15px] text-[#231F20] font-semibold">
                      So Sánh
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          <div className="flex items-center justify-center pt-8">
            <button className="flex items-center justify-center bg-white px-3 py-1 space-x-2 rounded-md border border-[#000F8F]">
              <span className="text-[#000F8F]">Xem toàn bộ sản phẩm</span>
              <span className="text-[#000F8F] text-[20px] font-bold">
                {" "}
                &rarr;{" "}
              </span>
            </button>
          </div>
        </div>
        <div className="bg-white rounded-md p-2 w-1/4 flex flex-col items-center justify-center space-y-2">
          <div className="overflow-hidden rounded-md">
            <img
              className="h-[300px] w-[300px] object-cover rounded-md transform transition-transform duration-2500 hover:scale-105"
              src="/banner1_product2.webp"
              alt="banner1_product2.webp"
            />
          </div>
          <div className="overflow-hidden rounded-md">
            <img
              className="h-[300px] w-[300px] object-cover rounded-md transform transition-transform duration-2500 hover:scale-105"
              src="/banner2_product2.webp"
              alt="banner2_product2.webp"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Ipad;
