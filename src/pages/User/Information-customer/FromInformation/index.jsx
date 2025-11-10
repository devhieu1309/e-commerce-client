import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { get } from "../../../../utils/request";
import { getAddressesByUser } from "../../../../services/addressServices";

function FromInformation() {
  const [user, setUser] = useState(null);
  const [defaultAddress, setDefaultAddress] = useState(null);
  const [loadingUser, setLoadingUser] = useState(true);
  const [loadingAddress, setLoadingAddress] = useState(true);

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
              <span className="text-red-600 font-semibold">{user.name}</span> !
            </p>
          ) : (
            <p className="text-gray-500 italic">Đang tải thông tin...</p>
          )}

          <div className="mt-5 space-y-2">
            <p className="text-yellow-500 font-medium">Thông tin tài khoản</p>
            <Link to="#" className="block text-black hover:text-yellow-600">
              Đơn hàng của bạn
            </Link>
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
          <h5 className="font-semibold uppercase mb-5 text-lg">THÔNG TIN TÀI KHOẢN</h5>

          {user ? (
            <>
              <p className="mb-2">
                <strong>Họ tên:</strong> {user.name}
              </p>
              <p className="mb-2">
                <strong>Email:</strong> {user.email}
              </p>

              <div className="mt-2">

                {loadingAddress ? (
                  <p className="text-gray-500 italic">Đang tải địa chỉ...</p>
                ) : defaultAddress ? (
                  <div>
                    <p>
                      <strong>Địa chỉ:</strong>{" "}
                      {[
                        defaultAddress.detailed_address,
                        defaultAddress.ward_name,
                        defaultAddress.district_name,
                        defaultAddress.province_name,
                        defaultAddress.country_name,
                      ]
                        .filter(Boolean)
                        .join(", ")}
                    </p>
                  </div>
                ) : (
                  <p className="text-gray-500 italic">Chưa có địa chỉ nào được lưu.</p>
                )}
              </div>
            </>
          ) : (
            <p className="text-gray-500 italic">Không có dữ liệu người dùng</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default FromInformation;
