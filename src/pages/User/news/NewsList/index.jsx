import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pagination } from "antd";
import { getNews } from "../../../../services/newsServices";
import FeaturedNews from "./FeaturedNews";
// import { getNewsBlocks } from "../../../../services/newsBlocksServices";

function NewsList() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;
  // const [newsBlocks, setNewsBlocks] = useState([]);

  const fetchApi = async () => {
    try {
      const result = await getNews();
      setNews(result);
    } catch (error) {
      console.log("Lỗi khi fetch dữ liệu: ", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  //tinh toan phan chuyen trang
  const startIndex = (currentPage - 1) * pageSize;
  const currentNews = news.slice(startIndex, startIndex + pageSize);
  return (
    <>
      <div className="container flex space-x-2 px-[150px] mt-10 pb-[30px]">
        <div className="w-full flex-col-1 ">
          {/* Trang tin tuc noi bac */}
          <FeaturedNews />
          {/* // */}

          <div className="p-2 mt-4 bg-white rounded-md">
            {/* danh sách tin tức */}

            <div className="mt-6 bg-white rounded-md gridp-6 left-30">
              <h1 className="pl-2 mb-4 text-2xl font-bold text-blue-900 border-l-4 border-blue-700">
                TIN TỨC
              </h1>

              <div className="grid grid-cols-3 gap-3">
                {/* Card 1 */}
                {currentNews.map((item, index) => (
                  <div className="bg-white rounded-lg shadow-md ">
                    <div
                      key={index}
                      className="relative overflow-hidden bg-white shadow-md rounded-xl group"
                    >
                      <img
                        src={`http://127.0.0.1:8000/storage/${item.cover_image}`}
                        alt={item.title}
                        className="object-cover w-full transition-transform duration-700 ease-in-out transform h-50 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="text-lg font-semibold hover:text-yellow-500">
                        {item.title.length > 40
                          ? item.title.slice(0, 40) + "[...]"
                          : item.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        Apple ra mắt hai phiên bản màu hồng dành iPhone 15
                        series gồm dòng thường và dòng Plus. Sắc hồng nhạt quyến
                        rũ, gam màu nhẹ nhàng, không quá nổi bật nhưng tạo nên
                        cá tính riêng cho các phái nữ khi sử dụng.
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* phan trang */}

              <div className="flex justify-center gap-1 p-1 mt-1 space-x-2 ">
                <Pagination
                  current={currentPage}
                  total={news.length}
                  pageSize={pageSize}
                  onChange={(page) => setCurrentPage(page)}
                  showSizeChanger={false}
                  showLessItems
                />
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 rounded-md w-[350px]">
          <div className="p-3 bg-white rounded-md">
            <h3 className="text-lg font-bold text-blue-900 ">
              Danh mục tin tức
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li className="cursor-pointer hover:text-blue-600">
                <Link to="/">Trang chủ </Link>
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                <Link to="/introduction">Giới thiệu</Link>
              </li>

              <li className="relative flex flex-col cursor-pointer group">
                {/* Hàng chính */}
                <div className="flex items-center justify-between">
                  <span>Sản phẩm</span>
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
              <li className="cursor-pointer hover:text-blue-600">
                <Link to="/news">Tin tức</Link>
              </li>

              <li className="cursor-pointer hover:text-blue-600">
                <Link to="/review">Review</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                <Link to="/relatedquestions">Câu hỏi thường gặp</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                <Link to="/Tra-cuu-bao-hanh"> Tra cứu bảo hành</Link>
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                <Link to="dat-truoc-san-pham">Đặt trước</Link>{" "}
              </li>
              <li className="cursor-pointer hover:text-blue-600">
                <Link to="contact">Liên hệ</Link>
              </li>
            </ul>

            <h3 className="mt-10 text-lg font-bold text-blue-900">
              Tin Tức Nổi Bật
            </h3>
            {news.slice(0, 5).map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 px-4 py-3 transition-shadow duration-300 cursor-pointer rounded-xl hover:shadow-lg"
              >
                {/* Ảnh */}
                <div className="relative w-6/12">
                  {/* Số thứ tự */}
                  <span className="absolute z-10 flex items-center justify-center w-6 h-6 text-white -translate-y-1/2 bg-yellow-400 border border-white rounded-full shadow-md -left-3 top-1/2">
                    {index + 1}
                  </span>

                  {/* Ảnh */}
                  <img
                    src={`http://127.0.0.1:8000/storage/${item.cover_image}`}
                    alt={item.title}
                    className="object-cover w-full h-20 transition-transform duration-300 rounded-lg hover:scale-105"
                  />
                </div>

                {/* Nội dung */}
                <div className="w-6/12 text-xs">
                  <span className="leading-snug text-gray-800">
                    <strong className="transition-colors duration-100 hover:text-yellow-500">
                      {item.title.length > 30
                        ? item.title.slice(0, 30) + "[...]"
                        : item.title}
                    </strong>
                  </span>
                  <h5 className="mt-2 text-xs text-gray-500">
                    {new Date(item.created_at).toLocaleDateString("vi-VN")}
                  </h5>
                </div>
              </div>
            ))}

            {/* <div className="flex py-1 gird">
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
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export default NewsList;
