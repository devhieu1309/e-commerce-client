import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { getNewsFeatured } from "../../../../services/newsServices";

function RelatedNews() {
  const [featuredNews, setFeaturedNews] = useState([]);

  const fetchApi = async () => {
    try {
      const result = await getNewsFeatured(4);
      setFeaturedNews(result);
    } catch (error) {
      console.log("Lỗi khi fetch: ", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);
  return (
    <>
      <div className="container pl-[100px] pr-[100px] mb-8 mt-2 w-full shadow-md">
        <div className="grid p-6 bg-white rounded-md">
          <h1 className="pl-2 mb-4 text-3xl font-bold text-blue-900 border-l-4 border-blue-700">
            TIN TỨC
          </h1>
          <div className="grid grid-cols-4 gap-3">
            {featuredNews.map((item) => (
              <div key={item.id}>
                {/* Card 1 */}

                <div className="bg-white rounded-lg shadow-md ">
                  <div className="relative overflow-hidden bg-white shadow-md rounded-xl group">
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
                      Apple ra mắt hai phiên bản màu hồng dành iPhone 15 series
                      gồm dòng thường và dòng Plus. Sắc hồng nhạt quyến rũ, gam
                      màu nhẹ nhàng, không quá nổi bật nhưng tạo nên cá tính
                      riêng cho các phái nữ khi sử dụng.
                    </p>
                  </div>
                </div>
              </div>
            ))}
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
