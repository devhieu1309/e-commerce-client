import { Link } from "react-router-dom";

function Error404() {
  return (
    <>
      <div className="relative flex items-center px-4 text-sm text-gray-600 bg-gray-300 h-15 ">
        <div className="relative space-x-2 text-base left-30">
          <span className="gap-5 py-3 cursor-pointer gap 5 hover:underline">
            <Link to="/">Trang chủ</Link>
          </span>
          <span>{">"}</span>
          <span className="cursor-pointer text-sky-900 hover:underline">
            404 Không tìm thấy trang
          </span>
        </div>
      </div>

      <div className="container bg-white">
        <div className="pt-10 pb-10 text-center">
          <h1 className="mt-3 text-5xl">404</h1>
          <p>Trang này đang bị lỗi bạn vui lòng quay trở lại trang chủ</p>
          <Link to="/">
            <button className="p-4 mt-3 mb-5 text-white bg-blue-800 hover:bg-yellow-500">
              Về trang chủ
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Error404;
