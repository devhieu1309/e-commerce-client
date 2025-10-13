import { Link } from "react-router-dom";

function NewsList() {
  return (
    <>
      <div className="container flex space-x-2 px-[150px] mt-10 pb-[30px]">
        <div className="flex-col-1 w-[920px] ">
          <div className="p-3 bg-white rounded-lg shadow-md h-[370px]">
            <div className="p-1 ">
              <h2 className="relative text-blue-900 text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-8 before:bg-[#000F8F]">
                Danh mục nổi bật
              </h2>
            </div>

            <div className="flex space-x-2 w-[900px]  py-5 p-1 ">
              <div className="flex items-center ml-auto">
                <button className="flex items-center justify-center w-8 text-blue-600 bg-gray-300 border-blue-300 rounded-r-full h-18 hover:bg-blue-600 hover:text-white">
                  <span className="text-3xl ">{"<"}</span>
                </button>
              </div>

              <div className="">
                <img
                  src="https:/onewaymobile.vn/upload_images/images/iPhone-15-1.jpg"
                  alt="iPhone 15"
                  className="object-cover h-70 w-330"
                />
              </div>

              <div className="">
                <h2 className="pb-6 text-2xl font-bold hover:text-yellow-500">
                  {" "}
                  <Link to="/iphone-15-hong-co-may-phien-ban-5-diem-doc-dao-khien-nhieu-chi-em-yeu-thich">
                    {" "}
                    iPhone 15 hồng có mấy phiên bản? 5 Điểm độc đáo khiến nhiều
                    chị em yêu thích{" "}
                  </Link>
                </h2>

                <p className="pb-3 text-sm text-gray-500">
                  Ngày đăng: 17/11/2023
                </p>
                <p className="text-gray-700 ">
                  1. iPhone 15 màu hồng có mấy phiên bản? Apple ra mắt hai phiên
                  bản màu hồng dành iPhone 15 series gồm dòng thường và dòng
                  Plus. Sắc hồng nhạt quyến rũ, gam màu nhẹ nhàng, không quá nổi
                  bật nhưng tạo nên cá tính riêng cho các phái nữ khi sử dụng.
                </p>
              </div>

              <div className="flex items-center ml-auto">
                <button className="flex items-center justify-center w-8 text-blue-600 bg-gray-300 border-blue-300 rounded-l-full h-18 hover:bg-blue-600 hover:text-white">
                  <span className="text-3xl ">{">"}</span>
                </button>
              </div>
            </div>
          </div>{" "}
          <div className="p-2 mt-4 bg-white rounded-md">
            {/* danh sách tin tức */}

            <div className="mt-6 bg-white rounded-md gridp-6 left-30">
              <h1 className="pl-2 mb-4 text-2xl font-bold text-blue-900 border-l-4 border-blue-700">
                TIN TỨC
              </h1>

              <div className="grid grid-cols-3 gap-3">
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
                      iPhone 15 hồng có mấy phiên bản? 5 Điểm độc đáo khiến
                      nhiều chị em yêu thích
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Apple ra mắt hai phiên bản màu hồng dành iPhone 15 series
                      gồm dòng thường và dòng Plus. Sắc hồng nhạt quyến rũ, gam
                      màu nhẹ nhàng, không quá nổi bật nhưng tạo nên cá tính
                      riêng cho các phái nữ khi sử dụng.
                    </p>
                  </div>
                </div>

                {/* Card 2 */}

                <div className="overflow-hidden bg-white rounded-lg shadow-md">
                  <img
                    src="https://onewaymobile.vn/upload_images/images/iphone-15-mau-sac-1.jpeg"
                    alt="Tin 2"
                    className="object-cover w-full h-48"
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold">
                      iPhone 15 có mấy màu? Màu nào đẹp nhất
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Ngày 13/09, Apple đã trình làng 4 phiên bản iPhone 15
                      Series. Mỗi phiên bản đều có những nâng cấp ấn tượng. Hai
                      phiên bản mới năm nay sở hữu thiết kế ấn tượng với màn
                      hình đục lỗ, tính năng độc đáo Dynamics Island. Khung thép
                      không gỉ mang đến sự chắc chắn và bền bỉ.
                    </p>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="overflow-hidden bg-white rounded-lg shadow-md">
                  <img
                    src="https://onewaymobile.vn/upload_images/images/usbc-4.jpg"
                    alt="Tin 3"
                    className="object-cover w-full h-48"
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold">
                      Cổng sạc USB-C IPhone 15 và công dụng
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Thiết kế cổng sạc iPhone 15 tương tự như các cổng Type C
                      có sẵn trên thị trường. Apple cung cấp 2 phiên bản USB-C 2
                      với dòng thường và USB-C 3 với dòng cao cấp như Pro và Pro
                      Max.
                    </p>
                  </div>
                </div>
                <div className="overflow-hidden bg-white rounded-lg shadow-md">
                  <img
                    src="https://onewaymobile.vn/upload_images/images/ios-171-9.jpg"
                    alt="Tin 3"
                    className="object-cover w-full h-48"
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold">
                      14 cập nhật tính năng trên iOS 17.1
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Tính năng Airdrop thông qua Wifi và kết nối mạng trên iOS
                      17.7 đã khả dụng sau khi người dùng kết nối với thiết bị
                      khác. Việc chuyển đổi dữ liệu dễ dàng hơn mà không gây trở
                      ngại với số lượng tệp lớn. Một nút tính năng mới “receive
                      off” cho phép người dùng kích hoạt tính năng này ngay
                      trong phần cài đặt
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden bg-white rounded-lg shadow-md">
                  <img
                    src="https://onewaymobile.vn/upload_images/images/Apple-pencil-2.jpg"
                    alt="Tin 3"
                    className="object-cover w-full h-48"
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold">
                      Nên lựa chọn mẫu Apple Pencil nào trong 3 phiên bản
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Apple Pencil USB-C là phiên bản mới nhất được Apple cập
                      nhật ra mắt trong năm nay. Chiếc bút cảm ứng có mức giá rẻ
                      hơn 600.000VND so với phiên bản Pencil 2. Không chỉ vậy,
                      chúng còn giữ lại phần lớn những tính năng quan trọng
                      trong phiên bản cao cấp. Cụ thể:
                    </p>
                  </div>
                </div>

                <div className="overflow-hidden bg-white rounded-lg shadow-md">
                  <img
                    src="https://onewaymobile.vn/upload_images/images/usbc-4.jpg"
                    alt="Tin 3"
                    className="object-cover w-full h-48"
                  />
                  <div className="p-3">
                    <h3 className="text-lg font-semibold">
                      Cổng sạc USB-C IPhone 15 và công dụng
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      Thiết kế cổng sạc iPhone 15 tương tự như các cổng Type C
                      có sẵn trên thị trường. Apple cung cấp 2 phiên bản USB-C 2
                      với dòng thường và USB-C 3 với dòng cao cấp như Pro và Pro
                      Max.
                    </p>
                  </div>
                </div>
              </div>

              {/* phan trang */}

              <div className="flex justify-center gap-1 p-1 mt-1 space-x-2 ">
                <a
                  href="#"
                  className="px-3 py-1 border border-black rounded-sm hover:bg-blue-600 hover:text-white"
                >
                  {" "}
                  1{" "}
                </a>
                <a
                  href="#"
                  className="px-3 py-1 border border-black rounded-sm hover:bg-blue-600 hover:text-white"
                >
                  {" "}
                  2{" "}
                </a>
                <a
                  href="#"
                  className="px-3 py-1 border border-black rounded-sm hover:bg-blue-600 hover:text-white"
                >
                  <img
                    src="https://img.icons8.com/?size=100&id=37354&format=png&color=000000"
                    className="object-cover w-5 h-6"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-md ">
          <div className="p-3 bg-white rounded-md">
            <h3 className="text-lg font-bold text-blue-900 ">
              Danh mục tin tức
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="cursor-pointer hover:text-blue-600">Trang chủ</li>
              <li className="cursor-pointer hover:text-blue-600">Giới thiệu</li>
              <li className="cursor-pointer hover:text-blue-600">Sản phẩm</li>

              <li className="relative flex flex-col cursor-pointer group">
                {/* Hàng chính */}
                <div className="flex items-center justify-between">
                  <span>Tin tức</span>
                  <span className="pr-4">+</span>
                </div>

                {/* Menu con */}
                <div className="overflow-hidden transition-all duration-500 ease-in-out max-h-0 group-hover:max-h-96">
                  <ul className="p-3 space-y-2">
                    <li className="hover:text-blue-600">iPhone</li>
                    <li className="hover:text-blue-600">iPad</li>
                    <li className="hover:text-blue-600">Watch</li>
                    <li className="hover:text-blue-600">Mac</li>
                    <li className="hover:text-blue-600">AirPods</li>
                    <li className="hover:text-blue-600">Âm Thanh</li>
                    <li className="hover:text-blue-600">Phụ kiện</li>
                  </ul>
                </div>
              </li>

              <li className="cursor-pointer hover:text-blue-600">Review</li>
              <li className="cursor-pointer hover:text-blue-600">
                Câu hỏi thường gặp
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                Tra cứu bảo hành
              </li>
              <li className="cursor-pointer hover:text-blue-600">Đặt trước</li>
              <li className="cursor-pointer hover:text-blue-600">Liên hệ</li>
            </ul>

            <h3 className="mt-10 text-lg font-bold text-blue-900">
              Tin Tức Nổi Bật
            </h3>

            <div className="flex py-1 gird">
              <div className="w-5/12 py-3">
                <img
                  src="https://onewaymobile.vn/upload_images/images/iPhone-15-4.jpg"
                  alt="iphone 15"
                  className="object-cover w-25 h-15"
                />
              </div>
              <div className="w-7/12 py-3 text-sm">
                <span className="text-black">
                  {" "}
                  <strong>
                    iPhone 15 hồng có mấy phiên bản? 5 Điểm độc đáo khiến nhiều
                    chị em yêu thích
                  </strong>{" "}
                </span>
                <h5>17/11/2023</h5>
              </div>
            </div>

            <div className="flex py-1 gird">
              <div className="w-5/12 py-3">
                <img
                  src="https://onewaymobile.vn/upload_images/images/iphone-15-mau-sac-1.jpeg"
                  alt="iphone 15"
                  className="object-cover w-25 h-15"
                />
              </div>
              <div className="w-7/12 py-3 text-sm">
                <span className="text-black">
                  {" "}
                  <strong>iPhone 15 có mấy màu? Màu nào đẹp nhất</strong>{" "}
                </span>
                <h5>17/11/2023</h5>
              </div>
            </div>

            <div className="flex py-1 gird">
              <div className="w-5/12 py-3">
                <img
                  src="https://onewaymobile.vn/upload_images/images/ios-171-5.jpg"
                  alt="iphone 15"
                  className="object-cover w-25 h-15"
                />
              </div>
              <div className="w-7/12 py-3 text-sm">
                <span className="text-black">
                  {" "}
                  <strong>14 cập nhật tính năng trên iOS 17.1</strong>{" "}
                </span>
                <h5>17/11/2023</h5>
              </div>
            </div>

            <div className="flex py-1 gird">
              <div className="w-5/12 py-3">
                <img
                  src="public/tt8.webp"
                  alt="iphone 15"
                  className="object-cover w-25 h-15"
                />
              </div>
              <div className="w-7/12 py-3 text-sm">
                <span className="text-black">
                  {" "}
                  <strong>14 cập nhật tính năng trên iOS 17.1</strong>{" "}
                </span>
                <h5>17/11/2023</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsList;
