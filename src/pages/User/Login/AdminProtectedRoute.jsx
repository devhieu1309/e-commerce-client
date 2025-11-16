import { Navigate } from "react-router-dom";

function AdminProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // Nếu chưa đăng nhập → đá ra đăng nhập
  if (!user) {
    return <Navigate to="/dang-nhap" replace />;
  }

  // Nếu không phải quản trị viên → đá ra trang chủ
  if (user.role !== "Quản trị viên") {
    return <Navigate to="/" replace />;
  }

  // Nếu đúng là Admin → cho vào trang Admin
  return children;
}

export default AdminProtectedRoute;
