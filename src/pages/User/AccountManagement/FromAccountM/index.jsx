import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUserById } from "../../../../services/userServices";

function FromAccountM() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("user");

    if (savedUser) {
      try {
        const parsed = JSON.parse(savedUser);
        fetchUserData(parsed.id);
      } catch (error) {
        console.error("Không thể đọc dữ liệu user từ localStorage:", error);
        setLoading(false);
      }
    } else {
      console.warn("Không có user trong localStorage");
      setLoading(false);
    }
  }, []);

  const fetchUserData = async (id) => {
    try {
      const res = await getUserById(id);
      // Nếu BE trả về { data: {...} } thì dùng res.data
      setUser(res.data ?? res);
    } catch (error) {
      console.error("Lỗi khi lấy thông tin người dùng:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading)
    return (
      <p className="text-center text-gray-600 mt-6">Đang tải thông tin tài khoản...</p>
    );

  if (!user)
    return (
      <p className="text-center text-gray-600 mt-6">
        Không tìm thấy thông tin người dùng. Vui lòng đăng nhập lại.
      </p>
    );

  return (

    <div className="max-w-[69%] mx-auto bg-white rounded-md shadow border border-gray-200 p-6 flex flex-col md:flex-row justify-between mt-7 mb-7">
      {/* Cột trái */}
      <div className="md:w-1/3 pr-6 mb-6 md:mb-0">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          TRANG TÀI KHOẢN
        </h2>
        <p className="text-gray-800 mb-2">
          Xin chào,{" "}
          <span className="font-semibold text-red-600">{user.name}</span> !
        </p>

        <ul className="text-sm space-y-2 mt-4">
          <li>
            <Link
              to="#"
              className="text-yellow-600 hover:text-yellow-700 font-medium"
            >
              Thông tin tài khoản
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-700 hover:text-blue-600">
              Đơn hàng của bạn
            </Link>
          </li>
          <li>
            <Link to="#" className="text-gray-700 hover:text-blue-600">
              Đổi mật khẩu
            </Link>
          </li>
          <li>
            <Link to="/dia-chi" className="text-gray-700 hover:text-blue-600">
              Sổ địa chỉ
            </Link>
          </li>
        </ul>
      </div>

      {/* Cột phải */}
      <div className="md:w-2/3 pl-0 md:pl-6">
        <h2 className="text-lg font-semibold mb-4 text-gray-900">
          THÔNG TIN TÀI KHOẢN
        </h2>
        <div className="text-sm space-y-2">
          <p>
            <span className="font-semibold text-gray-800">Họ tên:</span>{" "}
            {user.name}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Email:</span>{" "}
            {user.email}
          </p>
          <p>
            <span className="font-semibold text-gray-800">Địa Chỉ:</span>{" "}
            {user.address}
          </p>
        </div>
      </div>
    </div>
  );
}

export default FromAccountM;
