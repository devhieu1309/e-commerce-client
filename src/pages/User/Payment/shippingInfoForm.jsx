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



  useEffect(() => {
    async function fetchData() {
      try {
        // setShippingOptions([
        //   { id: 1, label: "Giao hàng tận nơi", value: "delivery", price: "40.000₫" },
        //   { id: 2, label: "Nhận tại cửa hàng", value: "pickup", price: "0₫" },
        // ]);

        setPaymentOptions([
          {
            id: 1,
            label: "Chuyển khoản",
            value: "transfer",
            icon: <DollarOutlined className="text-blue-500 text-lg" />,
          },
          {
            id: 2,
            label: "Thu hộ (COD)",
            value: "cod",
            icon: <DollarOutlined className="text-blue-500 text-lg" />,
          },
        ]);
      } catch (err) {
        console.error("Lỗi tải dữ liệu phương thức:", err);
      }
    }

    fetchData();
  }, []);

  const updateField = (field, value) => {
    const updated = { ...info, [field]: value };
    setInfo(updated);
    onInfoChange?.(updated);
  };

  return (
    <div className="main p-[50px]">
      <div className="main-header flex justify-center mb-5">
        <img
          className="w-[50%]"
          src="../../../../public/logo-ft.webp"
          alt="Logo"
        />
      </div>

      <div className="main-content flex space-x-5 mx-[25px]">
        {/* Left side: Shipping form */}
        <div className="w-[50%]">
          <section>
            <div className="section_header mb-4 flex items-center ">
              <p className="text-[25px] font-medium">Thông tin nhận hàng</p>
              <a className="ml-auto text-[17px] self-center text-[#2a9dcc] hover:text-blue-700"
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
        <div className="w-[50%] flex flex-col gap-6">
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
