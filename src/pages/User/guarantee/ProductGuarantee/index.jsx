function ProductGuarantee() {
  return (
    <>
      <div className="flex justify-center min-h-screen py-8 bg-gray-200">
        <div className="bg-white shadow-md rounded-md p-6 w-[1000px] text-center">
          {/* Tiêu đề */}
          <h2 className="mb-6 text-2xl font-semibold text-gray-800">
            Thông tin dịch vụ bảo hành
          </h2>

          {/* Ảnh sản phẩm */}
          <div className="flex justify-center mb-6">
            <img
              src="https://cdn.hstatic.net/files/200001043757/file/d29d8-76a1-4f4a-9bc2-93eee6a2d7ea-61e61768-f143-48bd-a884-d552977c5f1c.png"
              alt="iPhone 14 Pro Max"
              className="h-auto w-80"
            />
          </div>

          {/* Tên sản phẩm */}
          <h1 className="text-2xl font-bold text-gray-900">
            iPhone 14 Pro Max 1TB - Chính hãng VN/A
          </h1>

          {/* Serial */}
          <p className="mt-2 text-gray-700">Số serial: demo123</p>

          {/* Link kiểm tra */}
          <a
            href="#"
            className="inline-block mt-1 text-sm text-blue-600 hover:underline"
          >
            Kiểm tra số serial của sản phẩm khác
          </a>

          {/* Thông tin chi tiết */}
          <div className="mt-6 space-y-4 text-xl text-left px-70">
            {/* Chính hãng */}
            <div className="flex items-start space-x-2">
              <span className="text-2xl text-blue-600">✔</span>
              <p className="text-gray-700">
                <span className="font-semibold">Sản phẩm chính hãng</span>{" "}
                <br />
                Đây là sản phẩm được phân phối và bảo hành chính hãng bởi Dola
                Phone
              </p>
            </div>

            {/* Bảo hành */}
            <div className="flex items-start space-x-2">
              <span className="text-lg text-blue-600">ℹ</span>
              <div className="text-gray-700">
                <p>
                  <span className="font-semibold">Tình trạng bảo hành:</span>{" "}
                  <span className="font-semibold text-green-600">
                    Còn bảo hành
                  </span>
                </p>
                <p>
                  <span className="font-semibold">Thời gian bảo hành đến:</span>{" "}
                  20-6-2027
                </p>
                <p>
                  <span className="font-semibold">Chi nhánh:</span> Tất cả chi
                  nhánh
                </p>
                <p>
                  <span className="font-semibold">Mô tả:</span>{" "}
                  <span className="font-medium text-blue-700">Máy mới</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 mb-5 items-center justify-center w-[350px] h-[140px] shadow-2xl text-center p-3 font-semibold rounded-md ">
        <h2 className="mt-2 text-blue-800">
          Không tìm thấy dữ liệu vui lòng kiểm tra lại thông tin
        </h2>
        <button className="p-2 mt-3 mb-3 bg-blue-800 text-white hover:bg-amber-400 w-[120px] rounded-md">
          OK
        </button>
      </div>
    </>
  );
}

export default ProductGuarantee;
