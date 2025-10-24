import { Card, Input, Button, Divider } from "antd";

function OrderSummary() {
  return (
    <div className="p-[20px] bg-white rounded-md border border-gray-200">
      <div className="font-semibold text-[20px] mb-5">
        Đơn hàng (1 sản phẩm)
      </div>
      <Divider className="my-2" />

      {/* --- Sản phẩm --- */}
      <div className="flex justify-between items-center mb-3">
        <div className="flex items-center gap-3 w-[70%]">
          <div className="relative">
            <img
              src="../../../../public/220309063455-ipad-air-select-wif.webp"
              alt="Sản phẩm"
              className="w-[55px] h-[55px] rounded-md object-cover"
            />
            <span className="absolute -top-2 -right-2 bg-[#2a9dcc] text-white text-xs px-[6px] rounded-full">
              1
            </span>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-[14px] leading-tight">
              iPad Gen 10 2022 256GB Wifi - Chính hãng VN - No.1
            </p>
            <p className="text-gray-500 text-sm">Vàng</p>
          </div>
        </div>
        <span className="font-medium">14.590.000₫</span>
      </div>

      <Divider className="my-2" />

      {/* --- Mã giảm giá --- */}
      <div className="flex gap-2 mb-4">
        <Input className="h-[45px]" placeholder="Nhập mã giảm giá" />
        <Button type="primary" className="!h-[45px] bg-[#2a9dcc]">
          Áp dụng
        </Button>
      </div>

      <Divider className="my-2" />

      <div className="space-y-2 text-[15px]">
        <div className="flex justify-between">
          <span>Tạm tính</span>
          <span>14.590.000₫</span>
        </div>

        <div className="flex justify-between">
          <span>Phí vận chuyển</span>
          <span>40.000₫</span>
        </div>

        <Divider className="my-2" />

        <div className="flex justify-between items-center">
          <span className="text-base text-[20px]">Tổng cộng</span>
          <span className="text-[25px] font-semibold text-[#2a9dcc]">
            14.630.000₫
          </span>
        </div>
      </div>

      {/* --- Nút hành động --- */}
      <div className="flex justify-between items-center mt-5">
        <a
          href="#"
          className="text-[#2a9dcc] hover:text-blue-600 text-sm transition-colors"
        >
          ← Quay về giỏ hàng
        </a>
        <Button
          type="primary"
          size="large"
          className="bg-[#2a9dcc] font-medium px-6"
        >
          ĐẶT HÀNG
        </Button>
      </div>
    </div>
  );
}

export default OrderSummary;
