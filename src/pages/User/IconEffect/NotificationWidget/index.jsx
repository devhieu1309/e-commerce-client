import { BellIcon } from "@heroicons/react/24/solid";

function NotificationWidget() {
  return (
    <>
      <div className="fixed bottom-23 left-6">
        {/* Checkbox toggle */}
        <input
          type="checkbox"
          id="toggleNotification"
          className="hidden peer"
        />

        {/* Icon chuông */}
        <label
          htmlFor="toggleNotification"
          className="flex items-center justify-center w-12 h-12 bg-blue-800 border-white rounded-full shadow-lg cursor-pointer"
        >
          <BellIcon className="text-white w-7 h-7 animate-ring" />
        </label>

        {/* Form thông báo */}
        <div
          className="absolute bottom-16 left-0 w-80 p-4 rounded-xl shadow-lg bg-[#000f8f] text-white
               opacity-0 translate-y-3 scale-95 pointer-events-none
               transition-all duration-300 ease-out
               peer-checked:opacity-100 peer-checked:translate-y-0 peer-checked:scale-100 peer-checked:pointer-events-auto"
        >
          <div className="flex items-center justify-between pb-3 border-b">
            <h3 className="text-xl font-bold">
              Có thể tích hợp thêm các ứng dụng
            </h3>
            <label
              htmlFor="toggleNotification"
              className="cursor-pointer hover:text-yellow-500"
            >
              ✕
            </label>
          </div>

          <div className="mt-6 space-y-2 text-sm">
            <p className="hover:text-yellow-500">👉 Đánh giá sản phẩm</p>
            <p className="hover:text-yellow-500">👉 Mua X tặng Y</p>
            <p className="hover:text-yellow-500">👉 Ứng dụng Affiliate</p>
            <p className="hover:text-yellow-500">👉 Đa ngôn ngữ</p>
          </div>

          <p className="mt-6 mb-3 text-base">
            Lưu ý với các ứng dụng trả phí bạn cần cài đặt và mua ứng dụng này
            trên App store Sapo để sử dụng ngay
          </p>
        </div>
      </div>
    </>
  );
}

export default NotificationWidget;
