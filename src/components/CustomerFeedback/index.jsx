import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
function CustomerFeedback() {
  return (
    <>
      <div className="pb-8">
        <div className="container mx-auto px-32 pt-8 space-x-3">
          <div className="bg-white p-2 rounded-md">
            <h2 className="relative text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-8 before:bg-[#000F8F]">
              Feedback từ khách hàng
            </h2>
            <div className="w-full py-4">
              <Swiper
                slidesPerView={2} // ✅ hiển thị 4 slide cùng lúc
                spaceBetween={10}
                modules={[Navigation]}
                navigation={true}
                pagination={{ type: "fraction" }}
                className="mySwiper bg-white"
              >
                <SwiperSlide>
                  <div className=" flex rounded-md border border-gray-200 shadow-md p-4 bg-white">
                    <div className="w-2/5 flex flex-col items-center pr-4 ">
                      <div>
                        <img
                          className="w-[60px] h-[60px] object-cover"
                          src="/danhgia_1.webp"
                          alt=""
                        />
                      </div>
                      <h4 className="pt-4 font-medium text-[#000F8F]">
                        Hoàng Dung
                      </h4>
                      <p className="font-medium">Nhân viên văn phòng</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-light">
                        Mình lần đầu mua ở Dolaphone. Shop có rất nhiều sản phẩm
                        cao cấp mà mình tham khảo nhiều nơi ít có thông tin.
                        Tình trạng sản phẩm chính hãng nên mình khá yên tâm khi
                        quyết định mua sản phẩm tại đây.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex rounded-md border border-gray-200 shadow-md p-4 bg-white">
                    <div className="w-2/5 flex flex-col items-center pr-4 ">
                      <div>
                        <img
                          className="w-[60px] h-[60px] object-cover"
                          src="/danhgia_1.webp"
                          alt=""
                        />
                      </div>
                      <h4 className="pt-4 font-medium text-[#000F8F]">
                        Hoàng Dung
                      </h4>
                      <p className="font-medium">Nhân viên văn phòng</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-light">
                        Mình lần đầu mua ở Dolaphone. Shop có rất nhiều sản phẩm
                        cao cấp mà mình tham khảo nhiều nơi ít có thông tin.
                        Tình trạng sản phẩm chính hãng nên mình khá yên tâm khi
                        quyết định mua sản phẩm tại đây.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex rounded-md border border-gray-200 shadow-md p-4 bg-white">
                    <div className="w-2/5 flex flex-col items-center pr-4 ">
                      <div>
                        <img
                          className="w-[60px] h-[60px] object-cover"
                          src="/danhgia_1.webp"
                          alt=""
                        />
                      </div>
                      <h4 className="pt-4 font-medium text-[#000F8F]">
                        Hoàng Dung
                      </h4>
                      <p className="font-medium">Nhân viên văn phòng</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-light">
                        Mình lần đầu mua ở Dolaphone. Shop có rất nhiều sản phẩm
                        cao cấp mà mình tham khảo nhiều nơi ít có thông tin.
                        Tình trạng sản phẩm chính hãng nên mình khá yên tâm khi
                        quyết định mua sản phẩm tại đây.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  <div className=" flex rounded-md border border-gray-200 shadow-md p-4 bg-white">
                    <div className="w-2/5 flex flex-col items-center pr-4 ">
                      <div>
                        <img
                          className="w-[60px] h-[60px] object-cover"
                          src="/danhgia_1.webp"
                          alt=""
                        />
                      </div>
                      <h4 className="pt-4 font-medium text-[#000F8F]">
                        Hoàng Dung
                      </h4>
                      <p className="font-medium">Nhân viên văn phòng</p>
                    </div>
                    <div className="flex-1">
                      <p className="font-light">
                        Mình lần đầu mua ở Dolaphone. Shop có rất nhiều sản phẩm
                        cao cấp mà mình tham khảo nhiều nơi ít có thông tin.
                        Tình trạng sản phẩm chính hãng nên mình khá yên tâm khi
                        quyết định mua sản phẩm tại đây.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
            {/* <div className="flex pt-8 space-x-3">
              <div className="w-1/2 flex rounded-md border border-gray-200 shadow-md p-4 bg-white">
                <div className="w-2/5 flex flex-col items-center pr-4 ">
                  <div>
                    <img
                      className="w-[60px] h-[60px] object-cover"
                      src="/danhgia_1.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="pt-4 font-medium text-[#000F8F]">
                    Hoàng Dung
                  </h4>
                  <p className="font-medium">Nhân viên văn phòng</p>
                </div>
                <div className="flex-1">
                  <p className="font-light">
                    Mình lần đầu mua ở Dolaphone. Shop có rất nhiều sản phẩm cao
                    cấp mà mình tham khảo nhiều nơi ít có thông tin. Tình trạng
                    sản phẩm chính hãng nên mình khá yên tâm khi quyết định mua
                    sản phẩm tại đây.
                  </p>
                </div>
              </div>
              <div className="w-1/2 flex rounded-md border border-gray-200 shadow-md p-4 bg-white">
                <div className="w-2/5 flex flex-col items-center pr-4 ">
                  <div>
                    <img
                      className="w-[60px] h-[60px] object-cover"
                      src="/danhgia_2.webp"
                      alt=""
                    />
                  </div>
                  <h4 className="pt-4 font-medium text-[#000F8F]">Sở Bình</h4>
                  <p className="font-medium">Chủ shop đồ ngủ Bìn Bìn</p>
                </div>
                <div className="flex-1">
                  <p className="font-light">
                    Mình lần đầu mua ở Dolaphone. Shop có rất nhiều sản phẩm cao
                    cấp mà mình tham khảo nhiều nơi ít có thông tin. Tình trạng
                    sản phẩm chính hãng nên mình khá yên tâm khi quyết định mua
                    sản phẩm tại đây.
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default CustomerFeedback;
