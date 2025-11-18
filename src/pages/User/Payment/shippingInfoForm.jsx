import { useState, useEffect } from "react";
import { Input } from "antd";
import { DollarOutlined } from "@ant-design/icons";
import InputField from "../../../components/FieldCustom/InputField";
import AddressSelect from "../../../components/FieldCustom/AddressSelect";
import OptionGroup from "../../../components/FieldCustom/OptionGroup";
import { getShippingMethodList } from "../../../services/shippingMethodServices";

const { TextArea } = Input;

function ShippingInfoForm({ onInfoChange }) {
  const [info, setInfo] = useState({
    email: "",
    name: "",
    phone: "",
    address: {},
    note: "",
    shippingMethod: "",
    paymentMethod: "",
  });

  const [shippingOptions, setShippingOptions] = useState([]);
  const [paymentOptions, setPaymentOptions] = useState([]);

  // console.log("Shipping options:", shippingOptions);


  // const fetchApi = async () => {
  //   const result = await getShippingMethodList();

  //   //setShippingMethods(result.shippingMethods.reverse());
  //   setShippingOptions(result);
  // };

  const fetchApi = async () => {
    try {
      const result = await getShippingMethodList();
      const shippingList = result.shipping_methods.reverse();
      // setShippingOptions(result.shipping_methods.reverse());
      console.log(result);

      const formattedOptions = shippingList.map((item) => ({
        id: item.shipping_method_id,
        label: item.shipping_method_name,
        value: item.shipping_method_name.toLowerCase().replace(/\s+/g, "_"),
        price: `${Number(item.shipping_method_price).toLocaleString("vi-VN")}₫`,
      }));

      setShippingOptions(formattedOptions);
    } catch (err) {
      console.error("Lỗi tải danh sách phương thức vận chuyển:", err);
    }
  };


  // Lấy danh sách phương thức vận chuyển
  useEffect(() => {
    fetchApi();
  }, []);

  // Load lại trang
  const handleReload = () => {
    fetchApi();
  };



  // Lấy danh sách phương thức thanh toán
  useEffect(() => {
    async function fetchPaymentTypes() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/payment-type");
        const data = await response.json();

        // Format dữ liệu từ API
        const formattedOptions = data.paymentType.map((item) => ({
          id: item.payment_type_id,
          label: item.value,
          value: item.value.toLowerCase().replace(/\s+/g, "_"),
          icon: <DollarOutlined className="text-blue-500 text-lg" />,
        })) || [];

        setPaymentOptions(formattedOptions);
      } catch (err) {
        console.error("Lỗi tải dữ liệu phương thức thanh toán:", err);
      }
    }

    fetchPaymentTypes();
  }, []);

  // console.log('Payment options', paymentOptions);

  // Lấy thông tin giao hàng từ API
  useEffect(() => {
    async function fetchDeliveryInfo() {
      try {
        const response = await fetch("http://127.0.0.1:8000/api/delivery-info");
        const data = await response.json();
        
        console.log('Delivery info', data);
        
        // Đổ dữ liệu vào form
        if (data) {
          setInfo({
            email: data.data.email || "",
            name: data.data.name || "",
            phone: data.data.phone || "",
            address: {
              province: data.data.province_id || "",
              ward: data.data.ward_id || "",
            },
            note: data.data.detailed_address || "",
            shippingMethod: data.data.shipping_method || "",
            paymentMethod: data.data.payment_method || "",
          });
        }
      } catch (err) {
        console.error("Lỗi tải thông tin giao hàng:", err);
      }
    }

    fetchDeliveryInfo();
  }, []);

  const updateField = (field, value) => {
    const updated = { ...info, [field]: value };
    setInfo(updated);
    onInfoChange?.(updated);
  };

  return (
    <div className="main p-4 sm:p-6 md:p-8 lg:p-[50px]">
      <div className="main-header flex justify-center mb-5">
        <img
          className="w-[80%] sm:w-[60%] md:w-[50%]"
          src="../../../../public/logo-ft.webp"
          alt="Logo"
        />
      </div>

      <div className="main-content flex flex-col lg:flex-row lg:space-x-5 lg:mx-[25px] space-y-6 lg:space-y-0">
        {/* Left side: Shipping form */}
        <div className="w-full lg:w-[50%]">
          <section>
            <div className="section_header mb-4 flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-0">
              <p className="text-[20px] sm:text-[22px] md:text-[25px] font-medium">Thông tin nhận hàng</p>
              <a className="sm:ml-auto text-[15px] sm:text-[17px] self-center text-[#2a9dcc] hover:text-blue-700"
                href="#">
                Đăng xuất
              </a>
            </div>

            <div className="section_content flex flex-col gap-3">
              {/* Thông tin */}
              <InputField
                placeholder="Email"
                value={info.email}
                onChange={(val) => updateField("email", val)}
              />
              <InputField
                placeholder="Họ và tên"
                value={info.name}
                onChange={(val) => updateField("name", val)}
              />
              <InputField
                placeholder="Số điện thoại"
                required
                value={info.phone}
                onChange={(val) => updateField("phone", val)}
              />

              {/* Địa chỉ */}
              <AddressSelect
                value={info.address}
                onChange={(addr) => updateField("address", addr)}
              />

              {/* Ghi chú */}
              <TextArea
                placeholder="Ghi chú (tùy chọn)"
                value={info.note}
                onChange={(e) => updateField("note", e.target.value)}
                rows={3}
                style={{ resize: "none" }}
              />
            </div>
          </section>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          <OptionGroup
            title="Vận chuyển"
            options={shippingOptions}
            value={info.shippingMethod}
            onChange={(val) => updateField("shippingMethod", val)}
          />

          <OptionGroup
            title="Thanh toán"
            options={paymentOptions}
            value={info.paymentMethod}
            onChange={(val) => updateField("paymentMethod", val)}
          />
        </div>
      </div>
    </div>
  );
}

export default ShippingInfoForm;
