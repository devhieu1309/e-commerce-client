import { useState, useEffect } from "react";
import { Input, Radio, Button, message, Spin } from "antd";
import { DollarOutlined, PlusOutlined } from "@ant-design/icons";
import InputField from "../../../components/FieldCustom/InputField";
import AddressSelect from "../../../components/FieldCustom/AddressSelect";
import OptionGroup from "../../../components/FieldCustom/OptionGroup";
import { getShippingMethodList } from "../../../services/shippingMethodServices";
import { getAddressCustomerList } from "../../../services/shopingOrderServide";

const { TextArea } = Input;

function ShippingInfoForm({ onInfoChange, onShippingMethodChange, onPaymentMethodChange, onShippingFeeChange }) {
  const [info, setInfo] = useState({
    customer_address_id: null,
    name: "",
    phone: "",
    address: {},
    note: "",
    shippingMethod: "",
    paymentMethod: "",
    isNewAddress: false,
  });

  const [customerAddresses, setCustomerAddresses] = useState([]);
  const [selectedAddressId, setSelectedAddressId] = useState(null);
  const [shippingOptions, setShippingOptions] = useState([]);
  const [paymentOptions, setPaymentOptions] = useState([]);
  const [loadingAddresses, setLoadingAddresses] = useState(false);

  // console.log("Shipping options:", shippingOptions);

  // Lấy danh sách địa chỉ của khách hàng
  const fetchCustomerAddresses = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      return;
    }
    try {
      setLoadingAddresses(true);
      const result = await getAddressCustomerList(user.user_id);
      setCustomerAddresses(Array.isArray(result) ? result : result?.data || []);
    } catch (err) {
      message.error("Không thể tải danh sách địa chỉ");
    } finally {
      setLoadingAddresses(false);
    }
  };


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
        price: Number(item.shipping_method_price),
        displayPrice: `${Number(item.shipping_method_price).toLocaleString("vi-VN")}₫`,
      }));

      setShippingOptions(formattedOptions);
    } catch (err) {
      console.error("Lỗi tải danh sách phương thức vận chuyển:", err);
    }
  };


  // Lấy danh sách phương thức vận chuyển
  useEffect(() => {
    fetchApi();
    fetchCustomerAddresses();
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
  // useEffect(() => {
  //   async function fetchDeliveryInfo() {
  //     try {
  //       const response = await fetch("http://127.0.0.1:8000/api/delivery-info");
  //       const data = await response.json();

  //       console.log('Delivery info', data);

  //       // Đổ dữ liệu vào form
  //       if (data) {
  //         setInfo({
  //           customer_address_id: data.data.customer_address_id || null,
  //           email: data.data.email || "",
  //           receiver_name: data.data.receiver_name || "",
  //           receiver_phone: data.data.receiver_phone || "",
  //           address: data.data.address || "",
  //           note: data.data.note || "",
  //           shippingMethod: data.data.shipping_method || "",
  //           paymentMethod: data.data.payment_method || "",
  //           isNewAddress: false,
  //         });
  //         if (data.data.customer_address_id) {
  //           setSelectedAddressId(data.data.customer_address_id);
  //         }
  //       }
  //     } catch (err) {
  //       console.error("Lỗi tải thông tin giao hàng:", err);
  //     }
  //   }

  //   fetchDeliveryInfo();
  // }, []);

  const updateField = (field, value) => {
    const updated = { ...info, [field]: value };
    setInfo(updated);
    onInfoChange?.(updated);

    if (field === "shippingMethod") {
      const selected = shippingOptions.find((opt) => opt.value === value);
      onShippingMethodChange?.(selected?.id);
      onShippingFeeChange?.(selected?.price || 0);
    }

    if (field === "paymentMethod") {
      const selected = paymentOptions.find((opt) => opt.value === value);
      onPaymentMethodChange?.(selected?.id);
    }
  };

  const handleSelectAddress = (addressId) => {
    if (addressId === "new") {
      setSelectedAddressId("new");
      const updated = {
        ...info,
        customer_address_id: null,
        name: "",
        phone: "",
        address: {
          provinces_id: null,
          wards_id: null,
          detailed: ""
        },
        isNewAddress: true,
      };
      setInfo(updated);
      onInfoChange?.(updated);
      return;
    } else {
      // Chọn địa chỉ có sẵn
      const selectedAddr = customerAddresses.find(
        (addr) => addr.customer_address_id === parseInt(addressId)
      );
      if (selectedAddr) {
        setSelectedAddressId(addressId);
        const updated = {
          ...info,
          customer_address_id: selectedAddr.customer_address_id,
          name: selectedAddr.name,
          phone: selectedAddr.phone,
          address: {
            province: selectedAddr.provinces_id,
            ward: selectedAddr.wards_id,
            detailed: selectedAddr.detailed_address
          },
          note: selectedAddr.note || "",
          isNewAddress: false,
        };
        setInfo(updated);
        onInfoChange?.(updated);
      }
    }
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

            {/* Danh sách địa chỉ */}
            {loadingAddresses ? (
              <Spin />
            ) : (
              <div className="mb-6 p-4 border border-gray-200 rounded-lg bg-gray-50">
                <p className="font-medium mb-3">Chọn địa chỉ giao hàng</p>
                <Radio.Group
                  value={selectedAddressId}
                  onChange={(e) => handleSelectAddress(e.target.value)}
                  className="w-full"
                >
                  <div className="space-y-3">
                    {customerAddresses.map((addr) => (
                      <div key={addr.customer_address_id} className="p-3 border border-gray-200 rounded hover:bg-blue-50 cursor-pointer">
                        <Radio value={addr.customer_address_id}>
                          <div>
                            <p className="font-medium">{addr.name}</p>
                            <p className="text-sm text-gray-600">{addr.phone}</p>
                            <p className="text-sm text-gray-600">{addr.detailed_address}</p>
                          </div>
                        </Radio>
                      </div>
                    ))}
                    {/* Option thêm địa chỉ mới */}
                    <div className="p-3 border border-dashed border-gray-300 rounded hover:bg-blue-50 cursor-pointer">
                      <Radio value="new">
                        Thêm địa chỉ giao hàng mới
                      </Radio>
                    </div>
                  </div>
                </Radio.Group>
              </div>
            )}

            <div className="section_content flex flex-col gap-3">
              {/* Thông tin */}
              <InputField
                placeholder="Họ và tên"
                value={info.name}
                onChange={(val) => updateField("name", val)}
                disabled={!info.isNewAddress && selectedAddressId && selectedAddressId !== "new"}
              />
              <InputField
                placeholder="Số điện thoại"
                required
                value={info.phone}
                onChange={(val) => updateField("phone", val)}
                disabled={!info.isNewAddress && selectedAddressId && selectedAddressId !== "new"}
              />

              {/* Địa chỉ */}
              <AddressSelect
                value={info.address}
                onChange={(addr) => updateField("address", addr)}
              />

              <InputField
                placeholder="Địa chỉ chi tiết"
                required
                value={info.address?.detailed || ""}
                onChange={(val) =>
                  updateField("address", {
                    ...info.address,
                    detailed: val,
                  })
                }
                disabled={!info.isNewAddress && selectedAddressId && selectedAddressId !== "new"}
              />
            </div>
          </section>
        </div>

        {/* Right side */}
        <div className="w-full lg:w-[50%] flex flex-col gap-6">
          <OptionGroup
            title="Vận chuyển"
            options={shippingOptions.map(opt => ({
              label: `${opt.label} – ${opt.displayPrice}`,
              value: opt.value,
            }))}
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
