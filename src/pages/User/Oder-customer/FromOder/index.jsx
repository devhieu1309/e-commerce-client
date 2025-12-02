import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { get } from "../../../../utils/request";
import { getAddressesByUser } from "../../../../services/addressCustomerServices";
import { getOrdersByUser } from "../../../../services/shopingOrderServide";

function FromOder() {
    const [user, setUser] = useState(null);
    const [defaultAddress, setDefaultAddress] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true);
    const [loadingAddress, setLoadingAddress] = useState(true);

    const [orders, setOrders] = useState([]);
    const PER_PAGE = 2;
    const [page, setPage] = useState(1);
    const start = (page - 1) * PER_PAGE;
    const paginatedOrders = orders.slice(start, start + PER_PAGE);
    const totalPages = Math.ceil(orders.length / PER_PAGE);

    useEffect(() => {
        const loadCart = async () => {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) return;
            try {
                const result = await getOrdersByUser(user.user_id);
                console.log("Orders result:", result);
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
                // show at least localStorage info immediately
                setUser(parsedUser);

                // Try to fetch full user data from API (if available)
                try {
                    const result = await get(`users/${parsedUser.user_id}`);
                    // If API returns an object with user fields, merge/replace
                    if (result && typeof result === "object") {
                        setUser((prev) => ({ ...prev, ...result }));
                    }
                } catch (err) {
                    // nếu server trả HTML hoặc lỗi, ta giữ dữ liệu từ localStorage
                    console.error("Lỗi khi gọi users/{id} — giữ dữ liệu localStorage:", err);
                } finally {
                    setLoadingUser(false);
                }

                // load addresses and pick default
                try {
                    const addrs = await getAddressesByUser(parsedUser.user_id);
                    if (Array.isArray(addrs) && addrs.length > 0) {
                        const foundDefault = addrs.find((a) => a.isDefault === true || a.isDefault === 1);
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

    console.log("data:", orders);

    return (
        <div className="flex justify-center items-start mt-10 mb-10">
            <div className="bg-white shadow-md rounded-lg w-full max-w-[1300px] flex flex-col md:flex-row p-6 md:p-8">
                {/* Cột trái */}
                <div className="md:w-1/3 w-full mb-8 md:mb-0 md:pr-8">
                    <h5 className="font-semibold uppercase mb-5 text-lg">TRANG TÀI KHOẢN</h5>

                    {loadingUser ? (
                        <p className="text-gray-500 italic">Đang tải thông tin...</p>
                    ) : user ? (
                        <p className="mb-2">
                            <span className="font-semibold">Xin chào, </span>
                            <span className="text-blue-600 font-semibold">{user.name}</span> !
                        </p>
                    ) : (
                        <p className="text-gray-500 italic">Đang tải thông tin...</p>
                    )}

                    <div className="mt-5 space-y-2">
                        <Link to="/thong-tin-khach-hang" className="block text-black hover:text-yellow-600">
                            Thông tin tài khoản
                        </Link>
                        <p className="text-yellow-500 font-medium">Đơn hàng của bạn</p>
                        <Link to="/thay-doi-mat-khau" className="block text-black hover:text-yellow-600">
                            Đổi mật khẩu
                        </Link>
                        <Link to="/dia-chi-khach-hang" className="block text-black hover:text-yellow-600">
                            Sổ địa chỉ
                        </Link>
                    </div>
                </div>

                {/* Cột phải */}
                <div className="md:w-2/3 w-full md:pl-8">
                    <h5 className="font-semibold uppercase mb-5 text-lg">
                        ĐƠN HÀNG CỦA BẠN
                    </h5>

                    {orders.length === 0 ? (
                        <div className="border border-gray rounded-md py-6 text-center text-gray-500 italic">
                            Không có đơn hàng nào.
                        </div>
                    ) : (
                        <div className="space-y-4">
                            {paginatedOrders.map((order) => (
                                <div
                                    key={order.shop_order_id}
                                    className="rounded-md p-4 bg-white shadow-lg border border-gray-300"
                                >
                                    <div className="flex justify-between items-center mb-4">
                                        <div>
                                            <div className="font-semibold text-[15px]">
                                                Mã Đơn hàng: #{order.shop_order_id}
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="text-sm text-green-600 font-medium">
                                                {order.order_status}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Bảng sản phẩm */}
                                    <div className="w-full border border-gray-300 rounded-md overflow-hidden">
                                        <div className="grid grid-cols-4 bg-gray-100 text-gray-600 text-sm font-semibold border-b border-gray-300">
                                            <div className="p-2">Hình ảnh</div>
                                            <div className="p-2">Tên sản phẩm</div>
                                            <div className="p-2">Số lượng</div>
                                            <div className="p-2">Thành tiền</div>
                                        </div>

                                        {order.items.map((item) => (
                                            <div
                                                key={item.product_item_id}
                                                className="grid grid-cols-4 items-center text-sm text-gray-700 border-b border-gray-300"
                                            >
                                                <div className="p-2">
                                                    <img
                                                        src={item.image}
                                                        alt={item.product_name}
                                                        className="w-16 h-16 object-cover rounded"
                                                    />
                                                </div>
                                                <div className="p-2">{item.product_name}</div>
                                                <div className="p-2">{item.quantity}</div>
                                                <div className="p-2">{item.subtotal}₫</div>
                                            </div>
                                        ))}
                                    </div>

                                    
                                    <div className="flex justify-between items-center mt-4 pt-2">
                                        <Link
                                            to={`${order.shop_order_id}`}
                                            className="px-4 py-2 border border-orange-500 text-orange-500 rounded hover:bg-orange-50"
                                        >
                                            Xem chi tiết
                                        </Link>

                                        <div className="font-semibold text-lg">
                                            Tổng cộng: {order.total_amount}₫
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
