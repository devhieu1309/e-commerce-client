import { Link } from "react-router-dom";
import React, { useEffect, useState, useRef } from "react";
import { Carousel } from "antd";
import { getNewsFeatured } from "../../../../services/newsServices";
import { LeftOutlined, RightOutlined } from "@ant-design/icons";

function FeaturedNews() {
  const [featuredNews, setFeaturedNews] = useState([]);
  const carouselRef = useRef(null);

  const fetchApi = async () => {
    try {
      const result = await getNewsFeatured(3);
      setFeaturedNews(result);
    } catch (error) {
      console.log("Lỗi khi fetch: ", error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  return (
    <div className="w-[950px] p-3 mx-auto bg-white rounded-lg shadow-md">
      <div className="p-1">
        <h2 className="relative text-blue-900 text-[24px] font-bold uppercase pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-[6px] before:h-8 before:bg-[#000F8F]">
          Tin tức nổi bật
        </h2>
      </div>

      <div className="relative px-2 py-5">
        {/* Carousel chính */}
        <Carousel
          ref={carouselRef}
          autoplay
          autoplaySpeed={3000}
          dots={true}
          effect="scrollx"
        >
          {featuredNews.map((item) => (
            <Link key={item.id} to={`/newsdetail/${item.id}`} className="block">
              <div key={item.id}>
                <div className="flex p-3 space-x-4 transition-all duration-300 bg-white rounded-lg shadow hover:shadow-lg">
                  {/* Ảnh */}
                  <div className="w-1/3">
                    <img
                      src={`http://127.0.0.1:8000/storage/${item.cover_image}`}
                      alt={item.title}
                      className="object-cover w-full rounded-lg h-52"
                    />
                  </div>

                  {/* Thông tin */}
                  <div className="w-2/3">
                    <h2 className="text-xl font-semibold hover:text-yellow-400">
                      {/* <Link to={`/news/${item.id}`} className="text-yellow-500">
                      {item.title}
                    </Link> */}
                      {item.title}
                    </h2>
                    <p className="mt-1 text-sm text-gray-500">
                      Ngày đăng:{" "}
                      {new Date(item.created_at).toLocaleDateString("vi-VN")}
                    </p>
                    <p className="mt-2 text-gray-700 line-clamp-3">
                      {/* {item.description ||
                      "Nội dung tin tức đang được cập nhật..."} */}
                      Ngày 13/09, Apple đã trình làng 4 phiên bản iPhone 15
                      Series. Mỗi phiên bản đều có những nâng cấp ấn tượng. Hai
                      phiên bản mới năm nay sở hữu thiết kế ấn tượng với màn
                      hình đục lỗ, tính năng độc đáo Dynamics Island. Khung thép
                      không gỉ mang đến sự chắc chắn và bền bỉ. Màn hình cong
                      nhẹ dễ dàng việc cầm nắm. Lưng iPhone 15 thay thế với chất
                      liệu kính pha màu với thiết kế mới giúp việc thay thế và
                      sửa chữa được dễ dàng hơn.
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </Carousel>

        {/* Nút qua trái */}
        <button
          onClick={() => carouselRef.current.prev()}
          className="absolute left-0 flex items-center justify-center w-10 h-10 text-blue-600 -translate-y-1/2 bg-gray-200 rounded-full shadow top-1/2 hover:bg-blue-600 hover:text-white"
        >
          <LeftOutlined />
        </button>

        {/* Nút qua phải */}
        <button
          onClick={() => carouselRef.current.next()}
          className="absolute right-0 flex items-center justify-center w-10 h-10 text-blue-600 -translate-y-1/2 bg-gray-200 rounded-full shadow top-1/2 hover:bg-blue-600 hover:text-white"
        >
          <RightOutlined />
        </button>
      </div>
    </div>
  );
}

export default FeaturedNews;
