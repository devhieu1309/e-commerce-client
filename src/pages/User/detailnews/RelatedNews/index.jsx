import { Link } from "react-router-dom";

function RelatedNews() {
  return (
    <>
      <div className="container pl-[100px] pr-[100px] mb-8 mt-2 w-full shadow-md">
        <div className="grid p-6 bg-white rounded-md">
          <h1 className="pl-2 mb-4 text-3xl font-bold text-blue-900 border-l-4 border-blue-700">
            TIN TỨC
          </h1>

          <div className="grid grid-cols-4 gap-3">
            {/* Card 1 */}

            <div className="bg-white rounded-lg shadow-md ">
              <div className="p-2 border-4 border-white ">
                <img
                  src="https://onewaymobile.vn/upload_images/images/iPhone-15-1.jpg"
                  alt="Tin 1"
                  className="object-cover w-full h-48 transition hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold">
                  iPhone 15 hồng có mấy phiên bản? 5 Điểm độc đáo khiến nhiều
                  chị em yêu thích
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Apple ra mắt hai phiên bản màu hồng dành iPhone 15 series gồm
                  dòng thường và dòng Plus. Sắc hồng nhạt quyến rũ, gam màu nhẹ
                  nhàng, không quá nổi bật nhưng tạo nên cá tính riêng cho các
                  phái nữ khi sử dụng.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-md ">
              <div className="p-2 border-4 border-white ">
                <img
                  src="https://onewaymobile.vn/upload_images/images/iPhone-15-1.jpg"
                  alt="Tin 1"
                  className="object-cover w-full h-48 transition hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold">
                  iPhone 15 hồng có mấy phiên bản? 5 Điểm độc đáo khiến nhiều
                  chị em yêu thích
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Apple ra mắt hai phiên bản màu hồng dành iPhone 15 series gồm
                  dòng thường và dòng Plus. Sắc hồng nhạt quyến rũ, gam màu nhẹ
                  nhàng, không quá nổi bật nhưng tạo nên cá tính riêng cho các
                  phái nữ khi sử dụng.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md ">
              <div className="p-2 border-4 border-white ">
                <img
                  src="https://onewaymobile.vn/upload_images/images/iPhone-15-1.jpg"
                  alt="Tin 1"
                  className="object-cover w-full h-48 transition hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold">
                  iPhone 15 hồng có mấy phiên bản? 5 Điểm độc đáo khiến nhiều
                  chị em yêu thích
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Apple ra mắt hai phiên bản màu hồng dành iPhone 15 series gồm
                  dòng thường và dòng Plus. Sắc hồng nhạt quyến rũ, gam màu nhẹ
                  nhàng, không quá nổi bật nhưng tạo nên cá tính riêng cho các
                  phái nữ khi sử dụng.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md ">
              <div className="p-2 border-4 border-white ">
                <img
                  src="https://onewaymobile.vn/upload_images/images/iPhone-15-1.jpg"
                  alt="Tin 1"
                  className="object-cover w-full h-48 transition hover:scale-105"
                />
              </div>
              <div className="p-3">
                <h3 className="text-lg font-semibold">
                  iPhone 15 hồng có mấy phiên bản? 5 Điểm độc đáo khiến nhiều
                  chị em yêu thích
                </h3>
                <p className="mt-1 text-sm text-gray-600">
                  Apple ra mắt hai phiên bản màu hồng dành iPhone 15 series gồm
                  dòng thường và dòng Plus. Sắc hồng nhạt quyến rũ, gam màu nhẹ
                  nhàng, không quá nổi bật nhưng tạo nên cá tính riêng cho các
                  phái nữ khi sử dụng.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-md">
          <Link to="/news">
            <button
              className="p-6 mb-5 ml-[600px] font-bold text-blue-900 border border-blue-900 rounded-md hover:text-white hover:bg-blue-800"
              type="submit"
            >
              Xem toàn bộ tin tức{" "}
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default RelatedNews;
