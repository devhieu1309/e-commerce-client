import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { notification } from "antd";
import {
  getFavorite,
  deleteFavorite,
} from "../../../../services/favoriteServices";

function ListFavoriteProducts() {
  const [favorites, setFavorites] = useState([]);
  const [apiNoti, contextHolder] = notification.useNotification();

  const fetchFavorites = async () => {
    try {
      const result = await getFavorite(); // trả về mảng product favorites
      setFavorites(result.data);
    } catch (error) {
      console.error("Lỗi khi fetch favorites: ", error);
      apiNoti.error({
        message: "Lỗi hệ thống",
        description: "Không thể tải danh sách sản phẩm yêu thích.",
      });
    }
  };

  const handleDeleteFavorite = async (favoriteId) => {
    try {
      const response = await deleteFavorite(favoriteId);

      if (
        response?.success ||
        response?.message === "Xóa sản phẩm yêu thích thành công."
      ) {
        apiNoti.success({
          message: "Thành công",
          description: "Xóa sản phẩm yêu thích thành công!",
        });

        // Reload danh sách từ server
        handleLoad();
      } else {
        apiNoti.error({
          message: "Thất bại",
          description: response?.message || "Xóa sản phẩm yêu thích thất bại!",
        });
      }
    } catch (error) {
      console.error("Lỗi khi xóa sản phẩm yêu thích: ", error);
      apiNoti.error({
        message: "Lỗi hệ thống",
        description: "Không thể xóa sản phẩm yêu thích. Vui lòng thử lại!",
      });
    }
  };

  const handleLoad = () => {
    fetchFavorites();
  };

  useEffect(() => {
    fetchFavorites();
  }, []);

  return (
    <div>
      {contextHolder}
      {favorites.length === 0 ? (
        <div className="container w-full border border-gray-200 bg-white pl-[110px] pr-[110px] py-5">
          <div className="container p-10 mx-auto text-center text-gray-500">
            Chưa có sản phẩm yêu thích nào.
          </div>
        </div>
      ) : (
        <div className="container w-full border border-gray-200 bg-white pl-[110px] pr-[110px] py-5">
          <div className="grid grid-cols-5 gap-4 px-2 py-5">
            {favorites.map((fav, index) => {
              const item = fav.product_item;
              const product = item?.product;

              return (
                <div
                  key={index}
                  className="p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)]"
                >
                  <div className="relative">
                    <div className="h-[220px] w-[220px]">
                      <img
                        className="object-contain transition-transform duration-300 ease-out hover:-translate-y-1"
                        src={item?.image ?? "/placeholder-image.png"}
                        alt={product?.product_name}
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
                        alt="Mới"
                      />
                      <span className="text-white text-[13px]">Mới</span>
                    </div>
                  </div>
                  <div className="pt-5">
                    <Link to={`/product/${product?.product_id}`}>
                      <h3 className="text-[#231F20] text-[16px] font-medium hover:text-amber-400">
                        {product?.product_name}
                      </h3>
                    </Link>
                    <p className="py-2 font-extrabold text-red-500">Liên hệ</p>
                    <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2">
                      {product?.description}
                    </p>
                    <p className="py-1 font-bold text-red-500">
                      Giá: {item?.price?.toLocaleString()} VNĐ
                    </p>
                    <div className="flex items-center justify-between py-2">
                      <div className="flex items-center justify-center space-x-1 cursor-pointer">
                        <img
                          className="h-[15px] w-[15px] object-contain"
                          src="/icons8-heart-50.png"
                          alt="Thích"
                        />
                        <span className="text-[15px] text-[#231F20] hover:text-amber-400">
                          Thích
                        </span>
                      </div>
                      <div className="flex items-center justify-center space-x-1 cursor-pointer">
                        <span
                          // onClick={() => handleDeleteFavorite(fav.favorite_id)}
                          onClick={() =>
                            handleDeleteFavorite(fav.product_favorite_id)
                          }
                          className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400"
                        >
                          Xóa yêu thích
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default ListFavoriteProducts;
