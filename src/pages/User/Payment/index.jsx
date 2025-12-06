import { Row, Col, message } from "antd";
import ShippingInfoForm from "./shippingInfoForm";
import OrderSummary from "./orderSummary";
import { useState, useEffect } from "react";
import logo from "../../../../public/logo-ft.webp";
import { createShoppingOrder } from "../../../services/shopingOrderServide";
import { getShoppingCartByUserId } from "../../../services/shoppingCartServices";

function PaymentPage() {
    const [shippingInfo, setShippingInfo] = useState({
        customer_address_id: null,
        name: "",
        phone: "",
        address: {},
        note: "",
        shippingMethod: "",
        paymentMethod: "",
        isNewAddress: false,
    });

    const [cartItems, setCartItems] = useState([]);
    const [shippingFee, setShippingFee] = useState(0);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [shippingMethodId, setShippingMethodId] = useState(null);
    const [paymentMethodId, setPaymentMethodId] = useState(null);

    const loadCart = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            if (!user) return;

            const result = await getShoppingCartByUserId(user.user_id);
            if (result.success) {
                setCartItems(result.data || []);
            }
        } catch (err) {
            console.error("Lỗi tải giỏ hàng:", err);
        }
    };

    useEffect(() => {
        loadCart();
    }, []);

    const calculateTotal = () => {
        const fee = Number(shippingFee) || 0;

        const subtotal = cartItems.reduce((sum, item) => {
            const price = item.price || item.product_price || 0;
            return sum + price * item.quantity;
        }, 0);

        return subtotal + fee;
    };

    const handleShippingInfoChange = (updatedInfo) => {
        setShippingInfo(updatedInfo);
    };

    const handleSubmit = async () => {
        if (!shippingInfo.name || !shippingInfo.phone) {
            message.error("Vui lòng nhập họ tên và số điện thoại");
            return;
        }

        if (!shippingInfo.address?.province || !shippingInfo.address?.ward || !shippingInfo.address?.detailed) {
            message.error("Vui lòng nhập đủ địa chỉ");
            return;
        }

        if (!shippingMethodId) {
            message.error("Vui lòng chọn phương thức vận chuyển");
            return;
        }

        if (!paymentMethodId) {
            message.error("Vui lòng chọn phương thức thanh toán");
            return;
        }

        try {
            setLoadingSubmit(true);

            const user = JSON.parse(localStorage.getItem("user"));
            if (!user?.user_id) {
                message.error("Vui lòng đăng nhập lại");
                return;
            }

            const payload = {
                user_id: user.user_id,
                shipping_method_id: shippingMethodId,
                payment_type_id: paymentMethodId,

                address: shippingInfo.isNewAddress
                    ? {
                        name: shippingInfo.name,
                        phone: shippingInfo.phone,
                        provinces_id: shippingInfo.address.province,
                        wards_id: shippingInfo.address.ward,
                        detailed_address: shippingInfo.address.detailed,
                    }
                    : {
                        customer_address_id: shippingInfo.customer_address_id,
                    },

                order_total: calculateTotal(),
                order_note: shippingInfo.note || "",

                items: cartItems.map((item) => ({
                    product_item_id: item.product_item_id ?? item.product_id,
                    quantity: item.quantity,
                    price: Number(item.price || item.product_price),
                })),
            };

            const result = await createShoppingOrder(payload);

            if (result?.success || result?.shop_order_id) {
                message.success("Đặt hàng thành công! Cảm ơn bạn đã mua hàng.", 2);

                localStorage.removeItem("cartItems");
                setCartItems([]);
                window.location.href = "/";
            } else {
                message.error(result?.message || "Đặt hàng thất bại");
            }
        } catch (error) {
            console.error("Lỗi đặt hàng:", error);
            message.error("Lỗi hệ thống khi đặt hàng");
        } finally {
            setLoadingSubmit(false);
        }
    };

    return (
        <div className="flex flex-col lg:flex-row w-full min-h-screen bg-white">
            <div className="w-full lg:w-[70%]">
                <ShippingInfoForm
                    onInfoChange={handleShippingInfoChange}
                    onShippingMethodChange={setShippingMethodId}
                    onPaymentMethodChange={setPaymentMethodId}
                    onShippingFeeChange={setShippingFee}
                />
            </div>

            <div className="w-full lg:flex-1 bg-[#fafafa] border-t lg:border-t-0 lg:border-l border-gray-300">
                <OrderSummary
                    cartItems={cartItems}
                    shippingFee={shippingFee}
                    totalPrice={calculateTotal()}
                    onSubmit={handleSubmit}
                    loading={loadingSubmit}
                />
            </div>
        </div>
    );
}

export default PaymentPage;
