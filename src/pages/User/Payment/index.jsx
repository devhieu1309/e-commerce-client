import { Row, Col } from "antd";
import ShippingInfoForm from "./shippingInfoForm";
import OrderSummary from "./orderSummary";
import { useState } from "react";
import logo from "../../../../public/logo-ft.webp";

function PaymentPage() {
    const [shippingInfo, setShippingInfo] = useState({});
    const [cartItems] = useState([
        { name: "Iphone 15", quantity: 2, price: 25000 },
        { name: "Iphone 17", quantity: 1, price: 40000 },
    ]);

    const handleSubmit = () => {
        console.log("Thông tin đặt hàng:", shippingInfo);
        alert("Đặt hàng thành công!");
    };

    return (
        <div class="flex w-full h-screen bg-white">
            <div class="w-[70%]">
                <ShippingInfoForm />
            </div>
            <div class="flex-1 bg-[#fafafa] border border-l-gray-300">
                <OrderSummary
                    cartItems={[
                        {
                            name: "iPad Gen 10 2022 256GB Wifi",
                            price: 14590000,
                            quantity: 1,
                            image: "../../../../public/230707101901-apple-watch-se-2022.webp",
                        },
                        {
                            name: "iPad Gen 10 2022 256GB Wifi",
                            price: 14590000,
                            quantity: 1,
                            image: "../../../../public/230707101901-apple-watch-se-2022.webp",
                        },
                    ]}
                    shippingFee={40000}
                    onApplyDiscount={(data) => console.log("Giảm giá:", data)}
                    onSubmit={() => console.log("Đặt hàng!")}
                />
            </div>
        </div>
    );
}

export default PaymentPage;
