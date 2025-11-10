import { Link } from "react-router-dom";

function HomeChangePassword() {
  return (
    <>
      <div className="relative flex items-center px-4 text-sm text-gray-600 bg-gray-300 h-15 ">
        <div className="relative space-x-2 text-base left-30">
          <span className="gap-5 py-3 cursor-pointer gap 5 hover:underline">
            <Link to="/"> Trang chủ</Link>
          </span>
          <span>{">"}</span>
          <span className="cursor-pointer text-sky-900 hover:underline">
            Thay đổi mật khẩu
          </span>
        </div>
      </div>
    </>
  );
}

export default HomeChangePassword;



