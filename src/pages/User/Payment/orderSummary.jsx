import { Card, Input, Button, Divider, Image } from "antd";

function OrderSummary({ cartItems, shippingFee, totalPrice, onSubmit, loading }) {

    const subtotal = cartItems.reduce((sum, item) => {
        return sum + (item.price || item.product_price) * item.quantity;
    }, 0);

    return (
        <div className="p-[20px] bg-white rounded-md border border-gray-200">
            <div className="font-semibold text-[20px] mb-5">
                Đơn hàng ({cartItems.length} sản phẩm)
            </div>

            <Divider />

            {cartItems.length === 0 ? (
                <div className="text-center py-8 text-gray-500">
                    Giỏ hàng trống
                </div>
            ) : (
                cartItems.map((item, index) => (
                    <div key={index} className="flex justify-between items-center mb-4">
                        <div className="flex items-center gap-3 w-[70%]">
                            <Image
                                src={item.image || item.product_image}
                                width={100}
                                height={100}
                                style={{ objectFit: "cover", borderRadius: 6 }}
                                preview={false}
                            />
                            <div>
                                <p className="font-medium">{item.name || item.product_name}</p>
                                {item.sku && <p className="text-sm text-gray-600">{item.sku}</p>}
                            </div>
                        </div>
                        <span className="font-medium">
                            {(item.quantity * (item.price || item.product_price)).toLocaleString("vi-VN")}₫
                        </span>
                    </div>
                ))
            )}

            <Divider />

            <div className="space-y-3">
                <div className="flex justify-between">
                    <span>Tạm tính</span>
                    <span>{subtotal.toLocaleString("vi-VN")}₫</span>
                </div>
                <div className="flex justify-between">
                    <span>Phí vận chuyển</span>
                    <span>{shippingFee.toLocaleString("vi-VN")}₫</span>
                </div>

                <Divider />

                <div className="flex justify-between items-center">
                    <span className="text-[18px]">Tổng cộng</span>
                    <span className="text-[24px] text-[#2a9dcc] font-bold">
                        {totalPrice.toLocaleString("vi-VN")}₫
                    </span>
                </div>
            </div>

            <div className="flex justify-between items-center mt-6">
                <a href="/cart" className="text-[#2a9dcc] text-[14px]">
                    ← Quay về giỏ hàng
                </a>
                <Button
                    type="primary"
                    size="large"
                    loading={loading}
                    onClick={onSubmit}
                    className="bg-[#2a9dcc]"
                >
                    ĐẶT HÀNG
                </Button>
            </div>
        </div>
    );
}

export default OrderSummary;
