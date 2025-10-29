import { useState } from "react";
import { searchWarrantyBySerial } from "../../../../services/warrantyServices";

function LookupGuarantee() {
  const [serial, setSerial] = useState("");
  const [warranty, setWarranty] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false); // thêm loading

  const handleSearch = async () => {
    if (!serial.trim()) {
      alert("Vui lòng nhập số Serial!");
      return;
    }

    setLoading(true);
    try {
      const result = await searchWarrantyBySerial(serial.trim());

      console.log("API result:", result); // log xem dữ liệu trả về

      if (result && result.success && result.warranty) {
        setWarranty(result.warranty);
        setNotFound(false);
      } else {
        setWarranty(null);
        setNotFound(true);
      }
    } catch (error) {
      console.error("Lỗi khi tìm kiếm:", error);
      setWarranty(null);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setWarranty(null);
    setNotFound(false);
    setSerial("");
  };

  return (
    <div className="relative pt-[30px] pb-[30px]  flex items-center justify-center bg-gray-200 ">
      <div
        className={`bg-white p-12 rounded-md shadow-lg w-full max-w-3xl text-center transition-opacity duration-300 ${
          warranty || notFound
            ? "opacity-30 pointer-events-none"
            : "opacity-100"
        }`}
      >
        <h2 className="mb-4 text-2xl font-bold">Kiểm tra bảo hành</h2>
        <p className="mb-6 text-gray-700">
          Nhập số serial sản phẩm để tra cứu thông tin bảo hành.
        </p>
        <input
          type="text"
          value={serial}
          onChange={(e) => setSerial(e.target.value)}
          placeholder="VD: SN941CQ, SN154PL"
          className="w-full p-3 mb-4 text-center border border-gray-300 rounded-md"
        />
        <button
          onClick={handleSearch}
          className="w-full p-3 text-white bg-blue-800 rounded-md hover:bg-blue-600"
        >
          {loading ? "Đang tra cứu..." : "Tra cứu"}
        </button>
      </div>

      {(warranty?.serial_number || notFound) && (
        <div className="absolute z-10 w-full max-w-6xl p-12 text-center transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-md shadow-2xl top-1/2 left-1/2">
          {warranty && (
            <>
              <h2 className="mb-4 text-2xl font-semibold">
                Thông tin bảo hành
              </h2>
              {/* Chú ý: tên property phải đúng như API trả về */}
              <p>Số serial: {warranty.serial_number}</p>
              <p>Tình trạng bảo hành: {warranty.warranty_status}</p>
              <p>Thời gian bảo hành đến: {warranty.warranty_expiry}</p>
              <p>Chi nhánh: {warranty.branch}</p>
              <p>Mô tả: {warranty.description}</p>
            </>
          )}

          {notFound && (
            <>
              <h2 className="mb-4 text-red-600">Không tìm thấy dữ liệu</h2>
              <p>Vui lòng kiểm tra lại số serial sản phẩm.</p>
            </>
          )}

          <button
            onClick={handleReset}
            className="p-3 mt-4 text-white bg-blue-800 rounded-md hover:bg-blue-600"
          >
            OK / Tra cứu serial khác
          </button>
        </div>
      )}
    </div>
  );
}

export default LookupGuarantee;
