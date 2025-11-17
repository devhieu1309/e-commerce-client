import { Link } from "react-router-dom";

function ListFavoriteProducts() {
  return (
    <>
      <div className="container w-full border border-gray-200  bg-white pl-[110px] pr-[110px]">
        <div className="grid grid-cols-5 gap-4 px-2 py-5">
          {[...Array(1)].map((_, index) => (
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
                <p className="py-2 font-extrabold text-red-500">Liên hệ</p>
                <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                  Bảo hành chính hãng Apple 12 tháng
                </p>
                <div className="flex items-center justify-between py-2">
                  <div className="flex items-center justify-center space-x-1">
                    <img
                      className="h-[15px] w-[15px] object-contain "
                      src="/icons8-heart-50.png"
                      alt="Thích"
                    />
                    <span className="text-[15px] text-[#231F20] hover:text-amber-400">
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
      </div>
    </>
  );
}

export default ListFavoriteProducts;
