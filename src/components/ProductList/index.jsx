import { Link } from "react-router-dom";

function ProductList() {
  return (
    <>
      <div className="container mx-auto px-32 py-8">
        <div className="bg-white p-3 rounded-md">
          <div className="flex space-x-8">
            <div className="flex items-center space-x-2 bg-[#000F8F] rounded-sm p-2">
              <img
                className="h-[30px] w-[30px] object-contain"
                src="/title_image_1_allpro1.webp"
                alt=""
              />
              <p className="text-white font-bold">Sản phẩm mới</p>
            </div>
            <div className="flex items-center space-x-2 border border-gray-500 rounded-sm p-2 hover:bg-[#000F8F] hover:text-white">
              <img
                className="h-[30px] w-[30px] object-contain"
                src="/title_image_2_allpro1.webp"
                alt=""
              />
              <p className="font-bold">Sản phẩm nổi bật</p>
            </div>
            <div className="flex items-center space-x-2 border border-gray-500 rounded-sm p-2 hover:bg-[#000F8F] hover:text-white">
              <img
                className="h-[30px] w-[30px] object-contain"
                src="/title_image_3_allpro1.png"
                alt=""
              />
              <p className="font-bold">Sản phẩm bán chạy</p>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-4 py-10 px-2">
            {[...Array(10)].map((_, index) => (
              <div
                key={index}
                className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]"
              >
                <div className="relative">
                  <div className="h-[220px] w-[220px]">
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
                   <Link to="/iphone-15-256gb-chinh-hang-vn-a"> 
                    <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                      iPad Pro 11 inch M2 2022 2TB Wifi + 5G - Chính hãng VN
                    </h3>
                   </Link>
                  <p className="text-red-500 font-extrabold py-2">Liên hệ</p>
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
            ))}
          </div>
          <div className="flex items-center justify-center pb-5">
            <button className="flex items-center justify-center border border-[#000F8F] px-3 py-1 space-x-2 rounded-md">
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

export default ProductList;
