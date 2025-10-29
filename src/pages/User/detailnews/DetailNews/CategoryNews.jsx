import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNews } from "../../../../services/newsServices";

function CategoryNews() {
  const [news, setNews] = useState([]);

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
  return (
    <>
      <div className="p-2 rounded-md w-[350px]">
        <div className="p-3 bg-white rounded-md">
          <h3 className="text-lg font-bold text-blue-900 ">Danh mục tin tức</h3>
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
            <Link to={`/newsdetail/${item.id}`}>
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
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default CategoryNews;
