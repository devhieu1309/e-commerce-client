import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

function RelatedProducts(prop) {
  const { relatedProducts } = prop;
  return (
    <>
      <div className="mb-7">
        <div className="bg-white p-2 rounded-md">
          <div className="flex items-center justify-between pb-6">
            <h2 className="relative text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-8 before:bg-[#000F8F]">
              Sản phẩm liên quan
            </h2>
          </div>
          <div className="w-full">
            <Swiper
              slidesPerView={5}
              spaceBetween={10}
              modules={[Navigation]}
              navigation={true}
              pagination={{ type: "fraction" }}
              className="mySwiper bg-white"
            >
              {relatedProducts && relatedProducts.length > 0 ? (
                relatedProducts.map((product) => (
                  <SwiperSlide key={product.product_id}>
                    <div className="p-1">
                      <div className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]">
                        <div className="relative">
                          <div className="h-[190px] w-[190px]">
                            <img
                              className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                              src={product.items[0]?.image}
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
                          <Link to={`/product/${product.product_id}`}>
                            <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                              {product.product_name}
                            </h3>
                          </Link>
                          <p className="text-red-500 font-extrabold py-2">
                            {new Intl.NumberFormat('vi-VN').format(product.items[0].price)}
                            đ
                          </p>
                          {/* <del className="text-gray-500 py-2">24.990.000đ</del> */}
                          <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                            Được hỗ trợ 1 đổi 1 trong 30 ngày nếu có lỗi từ nhà
                            sản xuất
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
                ))
              ) : (
                <p>Không có sản phẩm liên quan.</p>
              )}
            </Swiper>
          </div>
          <div className="flex items-center justify-center pt-8 pb-3">
            <button className="flex items-center justify-center bg-white px-3 py-1 space-x-2 rounded-md border border-[#000F8F]">
              <span className="text-[#000F8F]">Xem toàn bộ sản phẩm</span>
              <span className="text-[#000F8F] text-[20px] font-bold">
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

export default RelatedProducts;
