import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Pagination } from "antd";
import { getNews } from "../../../../services/newsServices";
import FeaturedNews from "./FeaturedNews";
import CategoryNesList from "./CategoryNesList";

function NewsList() {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 6;

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
                  <Link to={`/newsdetail/${item.id}`}>
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
                          series gồm dòng thường và dòng Plus. Sắc hồng nhạt
                          quyến rũ, gam màu nhẹ nhàng, không quá nổi bật nhưng
                          tạo nên cá tính riêng cho các phái nữ khi sử dụng.
                        </p>
                      </div>
                    </div>
                  </Link>
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

        <CategoryNesList />
      </div>
    </>
  );
}
export default NewsList;
