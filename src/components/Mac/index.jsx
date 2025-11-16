import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function Mac() {
  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-32 pt-4 sm:pt-6 md:pt-8 flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-3">
        <div className="bg-white rounded-md p-2 w-full lg:w-1/4 flex flex-row lg:flex-col items-center justify-center space-x-2 lg:space-x-0 lg:space-y-2">
          <div className="overflow-hidden rounded-md w-1/2 lg:w-full">
            <img
              className="h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] w-full object-cover rounded-md transform transition-transform duration-2500 hover:scale-105"
              src="/banner1_product3.webp"
              alt="banner1_product3.webp"
            />
          </div>
          <div className="overflow-hidden rounded-md w-1/2 lg:w-full">
            <img
              className="h-[150px] sm:h-[200px] md:h-[250px] lg:h-[300px] w-full object-cover rounded-md transform transition-transform duration-2500 hover:scale-105"
              src="/banner2_product3.webp"
              alt="banner2_product3.webp"
            />
          </div>
        </div>
        <div className="bg-white flex-1 p-2 rounded-md">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 sm:pb-6 gap-3 sm:gap-0">
            <h2 className="relative text-[18px] sm:text-[20px] md:text-[22px] lg:text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[4px] sm:before:w-[5px] md:before:w-[6px] before:h-6 sm:before:h-7 md:before:h-8 before:bg-[#000F8F]">
              Mac
            </h2>
            <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-5">
              <div className="text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-medium bg-gray-200 rounded-md px-2 py-1 hover:text-white hover:bg-[#000F8F]">
                MacBook
              </div>
              <div className="text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-medium bg-gray-200 rounded-md px-2 py-1 hover:text-white hover:bg-[#000F8F]">
                Mac Studio
              </div>
              <div className="text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-medium bg-gray-200 rounded-md px-2 py-1 hover:text-white hover:bg-[#000F8F]">
                iMac
              </div>
              <div className="text-[#000F8F] text-[12px] sm:text-[13px] md:text-[14px] lg:text-[16px] font-medium bg-gray-200 rounded-md px-2 py-1 hover:text-white hover:bg-[#000F8F]">
                Mac mini
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[900px]">
            <Swiper
              slidesPerView={2}
              spaceBetween={10}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 12,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 10,
                },
              }}
              modules={[Navigation]}
              navigation={true}
              pagination={{ type: "fraction" }}
              className="mySwiper bg-white"
            >
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[120px] sm:h-[150px] md:h-[170px] lg:h-[190px] w-full">
                        <img
                          className="w-full h-full object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
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
                        MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                      </h3>
                      <p className="text-red-500 font-extrabold py-1 sm:py-2 text-[12px] sm:text-[13px] md:text-[14px]">
                        34.990.000đ
                      </p>
                      <del className="text-gray-500 py-1 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px]">44.999.000đ</del>
                      <p className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#F3F4F6] rounded-sm py-2 sm:py-3 px-2">
                        Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản
                        xuất
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[120px] sm:h-[150px] md:h-[170px] lg:h-[190px] w-full">
                        <img
                          className="w-full h-full object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
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
                        MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                      </h3>
                      <p className="text-red-500 font-extrabold py-1 sm:py-2 text-[12px] sm:text-[13px] md:text-[14px]">
                        34.990.000đ
                      </p>
                      <del className="text-gray-500 py-1 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px]">44.999.000đ</del>
                      <p className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#F3F4F6] rounded-sm py-2 sm:py-3 px-2">
                        Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản
                        xuất
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[120px] sm:h-[150px] md:h-[170px] lg:h-[190px] w-full">
                        <img
                          className="w-full h-full object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
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
                        MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                      </h3>
                      <p className="text-red-500 font-extrabold py-1 sm:py-2 text-[12px] sm:text-[13px] md:text-[14px]">
                        34.990.000đ
                      </p>
                      <del className="text-gray-500 py-1 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px]">44.999.000đ</del>
                      <p className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#F3F4F6] rounded-sm py-2 sm:py-3 px-2">
                        Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản
                        xuất
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[120px] sm:h-[150px] md:h-[170px] lg:h-[190px] w-full">
                        <img
                          className="w-full h-full object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
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
                        MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                      </h3>
                      <p className="text-red-500 font-extrabold py-1 sm:py-2 text-[12px] sm:text-[13px] md:text-[14px]">
                        34.990.000đ
                      </p>
                      <del className="text-gray-500 py-1 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px]">44.999.000đ</del>
                      <p className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#F3F4F6] rounded-sm py-2 sm:py-3 px-2">
                        Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản
                        xuất
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[120px] sm:h-[150px] md:h-[170px] lg:h-[190px] w-full">
                        <img
                          className="w-full h-full object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
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
                        MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                      </h3>
                      <p className="text-red-500 font-extrabold py-1 sm:py-2 text-[12px] sm:text-[13px] md:text-[14px]">
                        34.990.000đ
                      </p>
                      <del className="text-gray-500 py-1 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px]">44.999.000đ</del>
                      <p className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#F3F4F6] rounded-sm py-2 sm:py-3 px-2">
                        Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản
                        xuất
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
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="p-1">
                  <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                    <div className="relative">
                      <div className="h-[120px] sm:h-[150px] md:h-[170px] lg:h-[190px] w-full">
                        <img
                          className="w-full h-full object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                          src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
                          alt=""
                        />
                      </div>
                      <div className="absolute top-2">
                        <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                          Giảm 12%
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
                        MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                      </h3>
                      <p className="text-red-500 font-extrabold py-1 sm:py-2 text-[12px] sm:text-[13px] md:text-[14px]">
                        34.990.000đ
                      </p>
                      <del className="text-gray-500 py-1 sm:py-2 text-[11px] sm:text-[12px] md:text-[13px]">44.999.000đ</del>
                      <p className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#F3F4F6] rounded-sm py-2 sm:py-3 px-2">
                        Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản
                        xuất
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
                    src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
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
                <h3 className="text-[#231F20] text-[16px] font-medium">
                  MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                </h3>
                <p className="text-red-500 font-extrabold py-2">34.990.000đ</p>
                <del className="text-gray-500 py-2">44.999.000đ</del>
                <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                  Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản xuất
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
                    src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
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
                <h3 className="text-[#231F20] text-[16px] font-medium">
                  MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                </h3>
                <p className="text-red-500 font-extrabold py-2">34.990.000đ</p>
                <del className="text-gray-500 py-2">44.999.000đ</del>
                <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                  Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản xuất
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
                    src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
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
                <h3 className="text-[#231F20] text-[16px] font-medium">
                  MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                </h3>
                <p className="text-red-500 font-extrabold py-2">34.990.000đ</p>
                <del className="text-gray-500 py-2">44.999.000đ</del>
                <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                  Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản xuất
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
                    src="/mbprom3-2310310143271-2310311343-075912c4-d9a2-4f18-a430-899faded17ec.webp"
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
                <h3 className="text-[#231F20] text-[16px] font-medium">
                  MacBook Pro M2 13" 2022 8CPU 10GPU 256GB
                </h3>
                <p className="text-red-500 font-extrabold py-2">34.990.000đ</p>
                <del className="text-gray-500 py-2">44.999.000đ</del>
                <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                  Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà sản xuất
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
          <div className="flex items-center justify-center pt-4 sm:pt-6 md:pt-8">
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
    </>
  );
}

export default Mac;
