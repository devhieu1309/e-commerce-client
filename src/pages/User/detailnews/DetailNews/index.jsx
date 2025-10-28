import { useState, useEffect } from "react";
import { UserCircle, Clock } from "lucide-react";
import { useParams, Link } from "react-router-dom";
import { Pagination } from "antd";
import { getDetailNews } from "../../../../services/newsServices";
import CategoryNews from "./CategoryNews";
import Comment from "./Comment";

function DetailNews() {
  const { id } = useParams();
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchApi = async () => {
    const result = await getDetailNews(id);
    setNews(result.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchApi();
  }, [id]);

  if (loading) {
    return <p className="p-10 text-gray-500">Đang tải dữ liệu...</p>;
  }

  // if (!item || item.title.length === 0) {
  //   return <p className="p-10 text-gray-500">Chưa có bài viết...</p>;
  // }

  if (!news) {
    return <p className="p-10 text-red-500">Không tìm thấy bài viết!</p>;
  }

  return (
    <>
      <div className="container flex mt-8 mb-10 space-x-2 px-[120px]">
        {/* Cột bên trái: nội dung bài viết */}
        <div className="w-[1000px]">
          <div className="p-8 bg-white rounded-md">
            {/* ====== Tiêu đề bài viết ====== */}
            <h1 className="mb-6 text-4xl font-bold hover:text-yellow-400">
              {news.title}
            </h1>

            <h3 className="flex m-2 text-base text-gray-600 ">
              <span className="flex items-center pr-3 space-x-2">
                <UserCircle className="w-5 h-5 text-blue-600" />
                <span>
                  {news.author ? `Tác giả: ${news.author}` : "Đăng bởi: Admin"}
                </span>
              </span>

              {/* Icon và thời gian đăng */}
              {news.created_at && (
                <span className="flex items-center space-x-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <span>
                    {new Date(news.created_at).toLocaleDateString("vi-VN")}
                  </span>
                </span>
              )}
            </h3>

            {/* ====== Phần MỤC LỤC ====== */}
            {news.blocks && news.blocks.length > 0 && (
              <div className="p-5 mt-6 mb-10 bg-gray-200 rounded-lg ">
                <h2 className="mb-3 text-2xl font-bold text-blue-900">
                  Nội dung chính
                </h2>
                <ul className="ml-6 space-y-2 text-lg text-gray-900 ">
                  {news.blocks.map((block, index) => (
                    <li key={index}>
                      <a
                        href={`#position-${index}`}
                        className="hover:text-yellow-600 "
                      >
                        {block.title}
                      </a>
                      {block.sub_blocks && block.sub_blocks.length > 0 && (
                        <ul className="ml-6 list-disc">
                          {block.sub_blocks.map((sub, subIndex) => (
                            <li key={subIndex}>
                              <a
                                href={`#position-${index}-${subIndex}`}
                                className="hover:text-yellow-600 "
                              >
                                {sub.title}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* ====== Ảnh chính ====== */}
            {/* {news.cover_image && (
              <img
                src={`http://127.0.0.1:8000/storage/${news.cover_image}`}
                alt={news.title}
                className="object-cover w-full my-5 rounded-lg"
              />
            )} */}

            {/* ====== Nội dung bài viết ====== */}
            <div className="mt-6">
              {news.blocks && news.blocks.length > 0 ? (
                news.blocks.map((block, index) => (
                  <div key={index} className="mb-10">
                    <h1 className="mb-3 text-3xl font-bold">{block.title}</h1>
                    <p className="mt-5 mb-5">{block.content}</p>

                    {block.image && (
                      <img
                        src={`http://127.0.0.1:8000/storage/${block.image}`}
                        alt={block.title}
                        className="object-cover w-full mb-4 rounded-md"
                      />
                    )}
                  </div>
                ))
              ) : (
                // <p className="text-gray-600">{news.content}</p>
                <p className="p-5 text-2xl text-gray-500">
                  Chưa có bài viết.......{" "}
                  <Link to="/news" className="hover:text-yellow-400">
                    Quay lại trang tin tức
                  </Link>
                </p>
              )}
            </div>
          </div>

          {/* ====== Bình luận ====== */}
          <Comment />
        </div>

        {/* Cột bên phải: danh mục tin tức */}
        <CategoryNews />
      </div>
    </>
  );
}

export default DetailNews;
