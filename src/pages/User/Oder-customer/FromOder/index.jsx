import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { get } from "../../../../utils/request";
import { getAddressesByUser } from "../../../../services/addressCustomerServices";
import { getOrdersByUser } from "../../../../services/shopingOrderServide";
import { storeUserReview } from "../../../../services/userReviewServices";
import { notification } from "antd";

function FromOder() {
  const [user, setUser] = useState(null);
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingAddress, setLoadingAddress] = useState(true);
  const [api, contextHolder] = notification.useNotification();

  const [orders, setOrders] = useState([]);
  const PER_PAGE = 2;
  const [page, setPage] = useState(1);
  const start = (page - 1) * PER_PAGE;
  const paginatedOrders = orders.slice(start, start + PER_PAGE);
  const totalPages = Math.ceil(orders.length / PER_PAGE);

  // STATE cho đánh giá
  const [reviewingItemId, setReviewingItemId] = useState(null); // id sản phẩm đang đánh giá
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  useEffect(() => {
    const loadCart = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;
      try {
        const result = await getOrdersByUser(user.user_id);
        setOrders(result);
      } catch (error) {
        console.error("Lỗi khi lấy đơn hàng của người dùng:", error);
      }
    };
    loadCart();
  }, []);

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const storedUser = localStorage.getItem("user");
        if (!storedUser) {
          setLoadingUser(false);
          return;
        }

        const parsedUser = JSON.parse(storedUser);
        setUser(parsedUser);

        try {
          const result = await get(`users/${parsedUser.user_id}`);
          if (result && typeof result === "object") {
            setUser((prev) => ({ ...prev, ...result }));
          }
        } catch (err) {
          console.error(
            "Lỗi khi gọi users/{id} — giữ dữ liệu localStorage:",
            err
          );
        } finally {
          setLoadingUser(false);
        }

        try {
          const addrs = await getAddressesByUser(parsedUser.user_id);
          if (Array.isArray(addrs) && addrs.length > 0) {
            const foundDefault = addrs.find(
              (a) => a.isDefault === true || a.isDefault === 1
            );
            setDefaultAddress(foundDefault || addrs[0]);
          } else {
            setDefaultAddress(null);
          }
        } catch (err) {
          console.error("Lỗi khi lấy địa chỉ người dùng:", err);
        } finally {
          setLoadingAddress(false);
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin người dùng:", error);
        setLoadingUser(false);
        setLoadingAddress(false);
      }
    };

    fetchUserInfo();
  }, []);

  const handleUserReview = async (shop_order_id) => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      api.error({
        message: "Không thành công!",
        description: "Vui lòng đăng nhập để đánh giá đơn hàng.",
      });
      return;
    }

    try {
      const response = await storeUserReview({
        user_id: user.user_id,
        shop_order_id, // dùng id vừa truyền
        rating,
        comment,
      });

      if (response?.success) {
        api.success({
          message: "Thành công!",
          description: "Đánh giá đơn hàng thành công.",
        });
      } else {
        api.error({
          message: "Không thành công!",
          description: "Đánh giá đơn hàng không thành công.",
        });
      }
    } catch (error) {
      console.error("Lỗi khi đánh giá:", error);

      const responseMessage = error.response;

      if (
        responseMessage &&
        responseMessage.data &&
        responseMessage.data.errors
      ) {
        const errors = responseMessage.data.errors;
        for (const key in errors) {
          api.error({
            message: "Vui lòng kiểm tra lại thông tin!",
            description: errors[key][0],
          });
        }
        return;
      }
      api.error({
        message: "Lỗi",
        description: "Đã xảy ra lỗi khi gửi đánh giá.",
      });
    } finally {
      setReviewingItemId(null);
      setRating(0);
      setComment("");
    }
  };

  return (
    <div className="flex items-start justify-center mt-10 mb-10">
      {contextHolder}
      <div className="bg-white shadow-md rounded-lg w-full max-w-[1300px] flex flex-col md:flex-row p-6 md:p-8">
        {/* Cột trái */}
        <div className="w-full mb-8 md:w-1/3 md:mb-0 md:pr-8">
          <h5 className="mb-5 text-lg font-semibold uppercase">
            TRANG TÀI KHOẢN
          </h5>

          {loadingUser ? (
            <p className="italic text-gray-500">Đang tải thông tin...</p>
          ) : user ? (
            <p className="mb-2">
              <span className="font-semibold">Xin chào, </span>
              <span className="font-semibold text-blue-600">{user.name}</span>!
            </p>
          ) : (
            <p className="italic text-gray-500">Đang tải thông tin...</p>
          )}

          <div className="mt-5 space-y-2">
            <Link
              to="/thong-tin-khach-hang"
              className="block text-black hover:text-yellow-600"
            >
              Thông tin tài khoản
            </Link>
            <p className="font-medium text-yellow-500">Đơn hàng của bạn</p>
            <Link
              to="/thay-doi-mat-khau"
              className="block text-black hover:text-yellow-600"
            >
              Đổi mật khẩu
            </Link>
            <Link
              to="/dia-chi-khach-hang"
              className="block text-black hover:text-yellow-600"
            >
              Sổ địa chỉ
            </Link>
          </div>
        </div>

        {/* Cột phải */}
        <div className="w-full md:w-2/3 md:pl-8">
          <h5 className="mb-5 text-lg font-semibold uppercase">
            ĐƠN HÀNG CỦA BẠN
          </h5>

          {orders.length === 0 ? (
            <div className="py-6 italic text-center text-gray-500 border rounded-md border-gray">
              Không có đơn hàng nào.
            </div>
          ) : (
            <div className="space-y-4">
              {paginatedOrders.map((order) => (
                <div
                  key={order.shop_order_id}
                  className="p-4 bg-white border border-gray-300 rounded-md shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="font-semibold text-[15px]">
                      Mã Đơn hàng: #{order.shop_order_id}
                    </div>
                    <div className="text-sm font-medium text-green-600">
                      {order.order_status}
                    </div>
                  </div>

                  <div className="w-full overflow-hidden border border-gray-300 rounded-md">
                    <div className="grid grid-cols-4 text-sm font-semibold text-gray-600 bg-gray-100 border-b border-gray-300">
                      <div className="p-2">Hình ảnh</div>
                      <div className="p-2">Tên sản phẩm</div>
                      <div className="p-2">Số lượng</div>
                      <div className="p-2">Thành tiền</div>
                    </div>

                    {order.items.map((item) => (
                      <div key={item.product_item_id}>
                        <div className="grid items-center grid-cols-4 text-sm text-gray-700 border-b border-gray-300">
                          <div className="p-2">
                            <img
                              src={item.image}
                              alt={item.product_name}
                              className="object-cover w-16 h-16 rounded"
                            />
                          </div>
                          <div className="p-2">{item.product_name}</div>
                          <div className="p-2">{item.quantity}</div>
                          <div className="p-2">{item.subtotal.toLocaleString('vi-VN')} ₫</div>
                        </div>

                        {/* Nút đánh giá */}
                        <div className="flex justify-end p-2 border-b border-gray-300">
                          <button
                            onClick={() =>
                              setReviewingItemId(
                                reviewingItemId === item.product_item_id
                                  ? null
                                  : item.product_item_id
                              )
                            }
                            className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                          >
                            Đánh giá
                          </button>
                        </div>

                        {/* Form đánh giá */}
                        {reviewingItemId === item.product_item_id && (
                          <div className="p-4 mb-2 border border-gray-300 rounded-md bg-gray-50">
                            <div className="mb-2">
                              <span className="font-semibold">Chọn sao: </span>
                              {[1, 2, 3, 4, 5].map((star) => (
                                <span
                                  key={star}
                                  className={`cursor-pointer text-2xl ${
                                    rating >= star
                                      ? "text-yellow-400"
                                      : "text-gray-300"
                                  }`}
                                  onClick={() => setRating(star)}
                                >
                                  ★
                                </span>
                              ))}
                            </div>
                            <div className="mb-2">
                              <textarea
                                rows={3}
                                placeholder="Viết đánh giá..."
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                className="w-full p-2 border rounded"
                              />
                            </div>
                            <div className="flex justify-end gap-2">
                              <button
                                onClick={() => setReviewingItemId(null)}
                                className="px-3 py-1 border rounded hover:bg-gray-100"
                              >
                                Hủy
                              </button>
                              <button
                                onClick={() =>
                                  handleUserReview(order.shop_order_id)
                                }
                                className="px-3 py-1 text-white bg-blue-500 rounded hover:bg-blue-600"
                              >
                                Gửi đánh giá
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-2 mt-4">
                    <Link
                      to={`${order.shop_order_id}`}
                      className="px-4 py-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-50"
                    >
                      Xem chi tiết
                    </Link>
                    <div className="text-lg font-semibold">
                      Tổng cộng: {order.total_amount.toLocaleString('vi-VN')}₫
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {orders.length > 0 && (
            <div className="flex justify-center gap-2 mt-5">
              <button
                disabled={page === 1}
                onClick={() => setPage(page - 1)}
                className="px-3 py-1 border rounded disabled:opacity-40"
              >
                Prev
              </button>
              {[...Array(totalPages)].map((_, i) => (
                <button
                  key={i}
                  onClick={() => setPage(i + 1)}
                  className={`px-3 py-1 border rounded ${page === i + 1 ? "bg-black text-white" : ""
                    }`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                disabled={page === totalPages}
                onClick={() => setPage(page + 1)}
                className="px-3 py-1 border rounded disabled:opacity-40"
              >
                Next
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default FromOder;
