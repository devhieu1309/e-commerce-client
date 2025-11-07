import React, { useState, useEffect } from "react";
import { Form, Input, Button, Select, notification, Card, message } from "antd";
import { storeStoreBranch } from "../../services/storeBranchServices";
import { getProvinces, getWardsByProvince } from "../../services/addressServices";
import { useNavigate } from "react-router-dom";
// import { notification } from "antd";

const { Option } = Select;

function AddStoreBranch() {
  const navigate = useNavigate();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  // const [variantList, setVariantList] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [wards, setWards] = useState([]);
  const [loading, setLoading] = useState(false);


  // Lấy danh sách tỉnh khi load trang
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await getProvinces();
  //       setProvinces(res.data || res); // tuỳ backend trả về {data:[]} hay []
  //     } catch (err) {
  //       notification.error({ message: "Lỗi khi tải danh sách tỉnh" });
  //     }
  //   })();
  // }, []);

  const fetchApi = async () => {
    try {
      const result = await getProvinces();
      setProvinces(result.provinces.reverse());
    } catch (error) {
      notification.error({ message: "Lỗi khi tải danh sách tỉnh", error });
    }
  };

  // Lấy danh sách tỉnh
  useEffect(() => {
    fetchApi();
  }, []);

  // Khi người dùng chọn tỉnh => load phường tương ứng
  const handleProvinceChange = async (provinceId) => {
    form.setFieldsValue({ wards_id: null });
    setWards([]);
    if (!provinceId) return;
    try {
      const res = await getWardsByProvince(provinceId);
      setWards(res.wards);
      // setWards(res.data || res);
    } catch (err) {
      notification.error({ message: "Lỗi khi tải danh sách phường/xã", err });
    }
  };

  // // Gửi dữ liệu lên backend
  // const handleSubmit = async (values) => {
  //   setLoading(true);
  //   try {
  //     const payload = {
  //       name: values.name,
  //       phone_number: values.phone_number,
  //       email: values.email,
  //       opening_hours: values.opening_hours,
  //       map_link: values.map_link,
  //       address: {
  //         detailed_address: values.detailed_address,
  //         wards_id: values.wards_id,
  //         provinces_id: values.provinces_id,
  //       },
  //     };

  //     const res = await storeStoreBranch(payload);

  //     notification.success({
  //       message: "Thêm chi nhánh thành công!",
  //     });
  //     setTimeout(() => {
  //       navigate("/admin/store-branches");
  //     }, 1000)
  //     // form.resetFields();
  //     // navigate("/admin/store-branches"); // quay lại danh sách
  //   } catch (err) {
  //     notification.error({
  //       message: "Lỗi khi thêm chi nhánh",
  //       description: err.message,
  //     });
  //   } finally {
  //     setLoading(false);
  //   }
  // };

  const handleSubmit = async (values) => {
    console.log("Submitting form:", values); // Debug: xem form có submit không
    setLoading(true);

    const payload = {
      name: values.name,
      phone_number: values.phone_number,
      email: values.email,
      opening_hours: values.opening_hours,
      map_link: values.map_link,
      address: {
        detailed_address: values.detailed_address,
        wards_id: values.wards_id,
        provinces_id: values.provinces_id,
      },
    };

    try {
      const res = await storeStoreBranch(payload);
      console.log("Response from API:", res); // Debug: xem backend trả về gì

      // Hiển thị notification thành công trước khi navigate
      apiNoti.success({
        message: `Thông báo`,
        description: "Thêm chi nhánh mới thành công!",
      });

      setTimeout(() => {
        navigate("/admin/store-branches");
      }, 500)
    } catch (error) {
      console.error("Lỗi khi thêm chi nhánh:", error);
      message.error("Không thể thêm chi nhánh!");
    } finally {
      setLoading(false);
    }
  };


  return (
    <>
      {contextHolder}
      <div className="p-6 bg-gray-50 min-h-screen">
        <Card title="Thêm chi nhánh mới" bordered={false} className="max-w-3xl mx-auto shadow-md">
          <Form
            form={form}
            layout="vertical"
            onFinish={handleSubmit}
            initialValues={{
              name: "",
              phone_number: "",
              email: "",
              opening_hours: "",
              detailed_address: "",
              provinces_id: null,
              wards_id: null,
            }}
          >
            <Form.Item
              label="Tên chi nhánh"
              name="name"
              rules={[{ required: true, message: "Vui lòng nhập tên chi nhánh" }]}
            >
              <Input placeholder="VD: Vy Food - Quận 1" />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone_number"
              rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
            >
              <Input placeholder="VD: 0901234567" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
              rules={[
                { required: true, message: "Vui lòng nhập email" },
                { type: "email", message: "Email không hợp lệ" },
              ]}
            >
              <Input placeholder="VD: contact@vyfood.vn" />
            </Form.Item>

            <Form.Item
              label="Giờ mở cửa"
              name="opening_hours"
              rules={[{ required: true, message: "Vui lòng nhập giờ mở cửa" }]}
            >
              <Input placeholder="VD: 08:00 - 22:00" />
            </Form.Item>

            <Form.Item
              label="Tỉnh / Thành phố"
              name="provinces_id"
              rules={[{ required: true, message: "Vui lòng chọn tỉnh/thành phố" }]}
            >
              <Select
                showSearch
                placeholder="Chọn tỉnh/thành phố"
                onChange={handleProvinceChange}
                filterOption={(input, option) =>
                  option.children.toLowerCase().includes(input.toLowerCase())
                }
              >
                {provinces.map((p) => (
                  <Option key={p.provinces_id} value={p.provinces_id}>
                    {p.full_name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Phường / Xã"
              name="wards_id"
              rules={[{ required: true, message: "Vui lòng chọn phường/xã" }]}
            >
              <Select placeholder="Chọn phường/xã">
                {wards.map((w) => (
                  <Option key={w.wards_id} value={w.wards_id}>
                    {w.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Địa chỉ chi tiết"
              name="detailed_address"
              rules={[{ required: true, message: "Vui lòng nhập địa chỉ chi tiết" }]}
            >
              <Input placeholder="VD: 25 Nguyễn Huệ, P. Bến Nghé, Q.1" />
            </Form.Item>

            <Form.Item label="Link bản đồ" name="map_link">
              <Input placeholder="VD: https://goo.gl/maps/xyz" />
            </Form.Item>

            <Form.Item>
              <div className="flex justify-end gap-3">
                <Button onClick={() => navigate("/admin/store-branches")}>Hủy</Button>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Thêm chi nhánh
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Card>
      </div>
    </>
  );
}

export default AddStoreBranch;
