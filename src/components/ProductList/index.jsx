import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getProductList } from "../../services/productServices";
import { postFavorite } from "../../services/favoriteServices";
import { postCompare } from "../../services/compareProductServices";
import { notification } from "antd";

function ProductList() {
  const [products, setProducts] = useState([]);
  const [isFavorite, setIsFavorite] = useState({});
  const [compareChecked, setCompareChecked] = useState([]);
  const [apiNoti, contextHolder] = notification.useNotification();

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await getProductList();
      const latest = response.data
        .sort((a, b) => new Date(b.created_at) - new Date(a.created_at))
        .slice(0, 10);
      setProducts(latest);
      // setProducts(latest);
    };

    fetchProducts();
  }, []);

  //Hàm thêm sản phẩm vào mục yêu thích.
  const handleAddFavorite = async (productItemId) => {
    try {
      const response = await postFavorite({
        product_item_id: productItemId,
        user_id: 2,
      });

      console.log("API FAVORITE RESPONSE:", response);

      if (response?.message) {
        apiNoti.success({
          message: "Thành công",
          description: "Thêm sản phẩm yêu thích thành công!",
        });

        setIsFavorite((prev) => ({
          ...prev,
          [productItemId]: true, // đánh dấu sản phẩm vừa thích
        }));
      } else {
        apiNoti.error({
          message: "Thất bại",
          description: response?.message || "Thêm sản phẩm yêu thích thất bại!",
        });
      }
    } catch (error) {
      console.log("Lỗi khi thêm sản phẩm yêu thích: ", error);
      apiNoti.error({
        message: "Thất Bại",
        description: "Không thể thêm sản phẩm yếu thích!",
      });
    }
  };

  //Hàm thêm sản phẩm vào mục so sánh.
  const handlePostCompare = async (productItemId) => {
    try {
      const response = await postCompare({
        product_item_id: productItemId,
        user_id: 2,
      });
      if (response?.success) {
        setCompareChecked((prev) => ({
          ...prev,
          [productItemId]: true,
        }));
        apiNoti.success({
          message: "Thành công",
          description: "Thêm sản phẩm vào danh sách so sánh thành công",
        });
      } else {
        apiNoti.error({
          message: "Thất bại",
          description: "Thêm sản phẩm vào danh sách so sánh thất bại",
        });
      }
    } catch (error) {
      console.log("Lỗi khi thêm sản phẩm so sánh: ", error);
      apiNoti.error({
        message: "Thất bại",
        description: "Không thể thêm sản phẩm vào danh sách so sánh",
      });
    }
  };

  return (
    <>
      {contextHolder}
      <div className="container px-4 py-4 mx-auto sm:px-6 md:px-8 lg:px-16 xl:px-32 sm:py-6 md:py-8">
        <div className="p-2 bg-white rounded-md sm:p-3">
          <div className="flex space-x-4 sm:space-x-6 md:space-x-8">
            <div className="flex items-center space-x-2 bg-[#000F8F] rounded-sm p-2">
              <img
                className="h-[25px] w-[25px] sm:h-[28px] sm:w-[28px] md:h-[30px] md:w-[30px] object-contain"
                src="/title_image_1_allpro1.webp"
                alt=""
              />
              <p className="text-white font-bold text-[14px] sm:text-[15px] md:text-[16px]">
                Sản phẩm mới
              </p>
            </div>
            {/* <div className="flex items-center space-x-2 border border-gray-500 rounded-sm p-2 hover:bg-[#000F8F] hover:text-white">
              <img
                className="h-[30px] w-[30px] object-contain"
                src="/title_image_2_allpro1.webp"
                alt=""
              />
              <p className="font-bold">Sản phẩm nổi bật</p>
            </div>
            <div className="flex items-center space-x-2 border border-gray-500 rounded-sm p-2 hover:bg-[#000F8F] hover:text-white">
              <img
                className="h-[30px] w-[30px] object-contain"
                src="/title_image_3_allpro1.png"
                alt=""
              />
              <p className="font-bold">Sản phẩm bán chạy</p>
            </div> */}
          </div>
          {/* <div className="grid grid-cols-2 gap-3 px-2 py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4 sm:py-8 md:py-10">
            {products.map((product, index) => {
              const item = product.items[0];           */}

          {/* <div className="grid grid-cols-5 gap-4 px-2 py-10">
            {products.map((product, index) => {
              const item = product.items?.[0];
              console.log("MINH HIEU TEST ITEM: ", item);
              // console.log("Image: ", item?.image); */}

          <div className="grid grid-cols-2 gap-3 px-2 py-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 sm:gap-4 sm:py-8 md:py-10">
            {products.map((product, index) => {
              const item = product.items[0];
              return (
                <div
                  key={index}
                  className="p-2 sm:p-3 rounded-sm ring-1 ring-black/10 shadow-[0_0_18px_0_rgba(0,0,0,0.06)] group hover:ring-2 hover:ring-[#000F8F] hover:shadow-[0_0_24px_0_rgba(0,15,143,0.2)] transition-all duration-300 ease-out hover:-translate-y-2 cursor-pointer"
                >
                  <div className="relative">
                    <div className="h-[120px] sm:h-[150px] md:h-[180px] lg:h-[220px] w-full overflow-hidden">
                      <img
                        className="object-contain w-full h-full transition-transform duration-500 ease-out group-hover:scale-110"
                        // src="/221019094952-minhtuanmobile-ipad-08f8a086-4310-441b-a594-f2766853f14e.webp"
                        src={item?.image ?? "/placeholder-image.png"}
                        alt=""
                      />
                    </div>
                    <div className="absolute top-2">
                      <span className="relative inline-block bg-red-600 text-white text-[10px] font-bold px-2 py-1 rounded-tr-lg rounded-br-lg">
                        Giảm 21%
                        <span className="absolute bottom-0 left-0 w-0 h-0 border-r-[6px] border-b-[6px] border-r-red-800 border-b-transparent"></span>
                      </span>
                    </div>
                    <div className="flex space-x-1 sm:space-x-2 py-[2px] bg-[#000F8F] w-[55px] sm:w-[60px] md:w-[70px] rounded-2xl absolute bottom-1">
                      <img
                        className="h-[16px] w-[16px] sm:h-[18px] sm:w-[18px] md:h-[20px] md:w-[20px]"
                        src="/title_image_1_tag.webp"
                        alt=""
                      />
                      <span className="text-white text-[11px] sm:text-[12px] md:text-[13px]">
                        Mới
                      </span>
                    </div>
                  </div>
                  <div className="pt-3 sm:pt-4 md:pt-5">
                    <Link to={`/product/${product.product_id}`}>
                      <h3 className="text-[#231F20] text-[13px] sm:text-[14px] md:text-[15px] lg:text-[16px] font-medium hover:text-amber-400 line-clamp-2">
                        {product.product_name}
                      </h3>
                    </Link>

                    {/* <p className="py-2 font-extrabold text-red-500">Liên hệ</p>
                    <p className="text-[12px] bg-[#F3F4F6] rounded-sm py-3 px-2"> */}
                    <p className="text-red-500 font-extrabold py-1 sm:py-2 text-[13px] sm:text-[14px] md:text-[15px]">
                      Liên hệ
                    </p>
                    <p className="text-[10px] sm:text-[11px] md:text-[12px] bg-[#F3F4F6] rounded-sm py-2 sm:py-3 px-2">
                      Bảo hành chính hãng Apple 12 tháng
                    </p>
                    <div className="flex items-center justify-between py-2">
                      <div
                        className="flex items-center justify-center space-x-1"
                        onClick={() =>
                          item && handleAddFavorite(item.product_item_id)
                        }
                      >
                        <span
                          className={` w-[15px]
                            ${
                              isFavorite[item?.product_item_id]
                                ? "text-red-500"
                                : "text-gray-400"
                            }`}
                        >
                          ♥
                        </span>
                        <span className="text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                          {isFavorite[item?.product_item_id]
                            ? "Đã thích"
                            : "Thích"}
                        </span>
                      </div>

                      <div className="flex items-center justify-center space-x-1">
                        <button
                          className="flex items-center justify-center w-3 h-3 border rounded"
                          onClick={() =>
                            item && handlePostCompare(item.product_item_id)
                          }
                        >
                          {compareChecked[item.product_item_id] ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="w-4 h-5 text-green-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={3}
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          ) : null}
                        </button>
                        <span className="text-[12px] sm:text-[13px] md:text-[14px] lg:text-[15px] text-[#231F20] font-semibold hover:text-amber-400">
                          So Sánh
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-center pb-4 sm:pb-5">
            <button className="flex items-center justify-center border border-[#000F8F] px-3 py-1 sm:py-2 space-x-2 rounded-md text-[13px] sm:text-[14px] md:text-[15px]">
              <span className="text-[#000F8F]">Xem toàn bộ sản phẩm</span>
              <span className="text-[#000F8F] text-[16px] sm:text-[18px] md:text-[20px] font-bold">
                {" "}
                &rarr;{" "}
              </span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductList;
