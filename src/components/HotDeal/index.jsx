import { useRef, useState, useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

function HotDeal() {
  const messages = [
    "Nhiều chương trình khuyến mãi với ưu đãi cực hấp dẫn",
    "Cam kết giá tốt nhất thị trường",
    "Sản phẩm chính hãng, Mới 100%, Bảo hành đến 2 năm, 1 ĐỔI 1 trong 10 ngày do lỗi NSX",
  ];

  const products = [
    { id: 1, name: "Cốc sạc nhanh Apple 20W", price: "490.000₫" },
    { id: 2, name: "Ốp lưng MagSafe iPhone 15", price: "1.429.000₫" },
    { id: 3, name: "Apple Watch SE 2022 GPS", price: "6.390.000₫" },
    { id: 4, name: "iPad Gen 9 64GB Wifi", price: "6.990.000₫" },
    // có thể thêm nhiều sản phẩm
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [messages.length]);

  return (
    <>
      <div className="container mx-auto px-32 py-8 text-white">
        <div className="bg-[#000F8F] p-3 rounded-md">
          <div className="flex items-center justify-between relative after:content-[''] after:block after:h-[1px] after:bg-white after:absolute after:left-0 after:-bottom-3 after:w-full">
            <div className="w-1/2 flex items-center space-x-2 group/deal">
              <img
                className="w-[115px] animate-zoomFade"
                src="/hot_icon.webp"
                alt="Hot Deal"
              />
              <h2 className="relative text-[24px font-bold uppercase pl-4 group-hover/deal:text-amber-400">
                Deal nổi bật
              </h2>
            </div>
            <div className="flex-1">
              <p className="text-center">{messages[index]}</p>
            </div>
          </div>
          <div className="flex pt-10 pb-3 px-4">
            <div className="w-4/7 flex flex-col items-center justify-center pr-5">
              <p className="text-center">
                Chương trình đã kết thúc, hẹn gặp lại trong thời gian sớm nhất!
              </p>
              <img
                className="w-[300px] h-[300px] object-contain"
                src="/flash.webp"
                alt="Sale"
              />
              <div className="flex-1"></div>
            </div>
            <div className="relative w-[900px]">
              <Swiper
                slidesPerView={4}
                spaceBetween={15}
                modules={[Navigation]} // Thêm Navigation
                navigation={true} // Kích hoạt nút prev/next mặc định
                // pagination={{ clickable: true }}
                className="mySwiper"
                pagination={{
                  type: "fraction",
                }}
              >
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white rounded-md">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[200px] w-[200px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                          <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                            iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng
                            VN
                          </h3>
                          <p className="text-red-500 font-extrabold py-2">
                            Liên hệ
                          </p>
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                            Bảo hành chính hãng Apple 12 tháng
                          </p>
                          <div className="pb-4 flex items-center justify-between py-2">
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
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                          </div>
                        </div>
                        <p className="mt-2 font-semibold text-black">
                          Hết hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white rounded-md">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[200px] w-[200px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                          <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                            iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng
                            VN
                          </h3>
                          <p className="text-red-500 font-extrabold py-2">
                            Liên hệ
                          </p>
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                            Bảo hành chính hãng Apple 12 tháng
                          </p>
                          <div className="pb-4 flex items-center justify-between py-2">
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
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                          </div>
                        </div>
                        <p className="mt-2 font-semibold text-black">
                          Hết hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white rounded-md">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[200px] w-[200px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                          <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                            iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng
                            VN
                          </h3>
                          <p className="text-red-500 font-extrabold py-2">
                            Liên hệ
                          </p>
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                            Bảo hành chính hãng Apple 12 tháng
                          </p>
                          <div className="pb-4 flex items-center justify-between py-2">
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
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                          </div>
                        </div>
                        <p className="mt-2 font-semibold text-black">
                          Hết hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white rounded-md">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[200px] w-[200px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                          <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                            iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng
                            VN
                          </h3>
                          <p className="text-red-500 font-extrabold py-2">
                            Liên hệ
                          </p>
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                            Bảo hành chính hãng Apple 12 tháng
                          </p>
                          <div className="pb-4 flex items-center justify-between py-2">
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
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                          </div>
                        </div>
                        <p className="mt-2 font-semibold text-black">
                          Hết hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white rounded-md">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[200px] w-[200px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                          <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                            iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng
                            VN
                          </h3>
                          <p className="text-red-500 font-extrabold py-2">
                            Liên hệ
                          </p>
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                            Bảo hành chính hãng Apple 12 tháng
                          </p>
                          <div className="pb-4 flex items-center justify-between py-2">
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
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                          </div>
                        </div>
                        <p className="mt-2 font-semibold text-black">
                          Hết hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white rounded-md">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[200px] w-[200px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                          <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                            iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng
                            VN
                          </h3>
                          <p className="text-red-500 font-extrabold py-2">
                            Liên hệ
                          </p>
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                            Bảo hành chính hãng Apple 12 tháng
                          </p>
                          <div className="pb-4 flex items-center justify-between py-2">
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
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                          </div>
                        </div>
                        <p className="mt-2 font-semibold text-black">
                          Hết hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white rounded-md">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[200px] w-[200px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                          <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                            iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng
                            VN
                          </h3>
                          <p className="text-red-500 font-extrabold py-2">
                            Liên hệ
                          </p>
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                            Bảo hành chính hãng Apple 12 tháng
                          </p>
                          <div className="pb-4 flex items-center justify-between py-2">
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
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                          </div>
                        </div>
                        <p className="mt-2 font-semibold text-black">
                          Hết hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white rounded-md">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[200px] w-[200px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                          <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                            iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng
                            VN
                          </h3>
                          <p className="text-red-500 font-extrabold py-2">
                            Liên hệ
                          </p>
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                            Bảo hành chính hãng Apple 12 tháng
                          </p>
                          <div className="pb-4 flex items-center justify-between py-2">
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
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                          </div>
                        </div>
                        <p className="mt-2 font-semibold text-black">
                          Hết hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className="">
                    <div className="bg-white rounded-md">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[200px] w-[200px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                          <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                            iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng
                            VN
                          </h3>
                          <p className="text-red-500 font-extrabold py-2">
                            Liên hệ
                          </p>
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                            Bảo hành chính hãng Apple 12 tháng
                          </p>
                          <div className="pb-4 flex items-center justify-between py-2">
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
                          <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                          </div>
                        </div>
                        <p className="mt-2 font-semibold text-black">
                          Hết hàng
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>

              <div className="flex items-center justify-center pt-5">
                <button className="flex items-center justify-center bg-white px-3 py-2 space-x-2 rounded-md">
                  <span className="text-[#000F8F]">Xem toàn bộ sản phẩm</span>
                  <span className="text-[#000F8F] text-[20px] font-bold">
                    {" "}
                    &rarr;{" "}
                  </span>
                </button>
              </div>
            </div>
            {/* <div className="flex-1 flex space-x-2 bg-amber-300">
              <div className="bg-white w-1/4 rounded-md">
                <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                  <div className="relative">
                    <div className="h-[200px] w-[200px]">
                      <img
                        className="object-contain"
                        src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                      iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng VN
                    </h3>
                    <p className="text-red-500 font-extrabold py-2">Liên hệ</p>
                    <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
                      Bảo hành chính hãng Apple 12 tháng
                    </p>
                    <div className="pb-4 flex items-center justify-between py-2">
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
                    <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
                    </div>
                  </div>
                  <p className="mt-2 font-semibold text-black">Hết hàng</p>
                </div>
              </div>
              <div className="bg-white w-1/4 rounded-md">
                <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                  <div className="relative">
                    <div className="h-[200px] w-[200px]">
                      <img
                        className="object-contain"
                        src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                      iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng VN
                    </h3>
                    <p className="text-red-500 font-extrabold py-2">Liên hệ</p>
                    <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
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
              </div>
              <div className="bg-white w-1/4 rounded-md">
                <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                  <div className="relative">
                    <div className="h-[200px] w-[200px]">
                      <img
                        className="object-contain"
                        src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                      iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng VN
                    </h3>
                    <p className="text-red-500 font-extrabold py-2">Liên hệ</p>
                    <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
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
              </div>
              <div className="bg-white w-1/4 rounded-md">
                <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                  <div className="relative">
                    <div className="h-[200px] w-[200px]">
                      <img
                        className="object-contain"
                        src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
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
                      iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng VN
                    </h3>
                    <p className="text-red-500 font-extrabold py-2">Liên hệ</p>
                    <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
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
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default HotDeal;

// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// export default function HotDeal() {
//   const products = Array.from({ length: 10 }, (_, i) => ({
//     id: i + 1,
//     name: `Sản phẩm ${i + 1}`,
//   }));

//   return (
//     <Swiper
//       modules={[Navigation]}
//       spaceBetween={-300}
//       slidesPerView={5}
//       slidesPerGroup={1}
//       navigation
//       grabCursor
//     >
//       <SwiperSlide>
//         <div className="w-[180px] h-[500px] bg-white shadow rounded flex items-center justify-center">
//           <div className="bg-white rounded-md">
//             <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
//               <div className="relative">
//                 <div className="h-[200px] w-[200px]">
//                   <img
//                     className="object-contain"
//                     src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
//                     alt=""
//                   />
//                 </div>
//                 <div className="absolute top-2">
//                   <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
//                     Giảm 21%
//                     <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
//                   </span>
//                 </div>
//                 <div className="flex space-x-2 py-[2px] bg-[#000F8F] w-[70px] rounded-2xl absolute bottom-1">
//                   <img
//                     className="h-[20px] w-[20px]"
//                     src="/title_image_1_tag.webp"
//                     alt=""
//                   />
//                   <span className="text-white text-[13px]">Mới</span>
//                 </div>
//               </div>
//               <div className="pt-5">
//                 <h3 className="text-[#231F20] text-[16px] font-medium">
//                   iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng VN
//                 </h3>
//                 <p className="text-red-500 font-extrabold py-2">Liên hệ</p>
//                 <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2 text-black">
//                   Bảo hành chính hãng Apple 12 tháng
//                 </p>
//                 <div className="pb-4 flex items-center justify-between py-2">
//                   <div className="flex items-center justify-center space-x-1">
//                     <img
//                       className="h-[15px] w-[15px] object-contain"
//                       src="/icons8-heart-50.png"
//                       alt="Thích"
//                     />
//                     <span className="text-[15px] text-[#231F20] font-semibold">
//                       Thích
//                     </span>
//                   </div>
//                   <div className="flex items-center justify-center space-x-1">
//                     <img
//                       className="h-[15px] w-[15px] object-contain"
//                       src="/icons8-circle-50.png"
//                       alt="Thích"
//                     />
//                     <span className="text-[15px] text-[#231F20] font-semibold">
//                       So Sánh
//                     </span>
//                   </div>
//                 </div>
//                 <div className="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
//                   <div className="h-full w-full bg-[linear-gradient(45deg,#1e3a8a_25%,#3b82f6_25%,#3b82f6_50%,#1e3a8a_50%,#1e3a8a_75%,#3b82f6_75%,#3b82f6_100%)] bg-[length:40px_40px] animate-stripes rounded-full"></div>
//                 </div>
//               </div>
//               <p className="mt-2 font-semibold text-black">Hết hàng</p>
//             </div>
//           </div>
//         </div>
//       </SwiperSlide>
//     </Swiper>
//   );
// }
