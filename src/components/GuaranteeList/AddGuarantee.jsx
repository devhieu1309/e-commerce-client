// import React, { useState, useEffect } from "react";
// import { Form, Input, Button, Select, notification, Card, message } from "antd";
// import { storeStoreBranch } from "../../services/storeBranchServices";
// import { getProvinces, getWardsByProvince } from "../../services/addressServices";
// import { useNavigate } from "react-router-dom";

// const { Option } = Select;

// function AddGuarantee() {
//     const navigate = useNavigate();
//     const [apiNoti, contextHolder] = notification.useNotification();
//     const [form] = Form.useForm();
//     const [productList, setProductList] = useState([]);

// }
// export default AddGuarantee;

import React, { useState, useEffect } from "react";
import { Form, Input, DatePicker, Select, Button, notification, message } from "antd";
import { useNavigate } from "react-router-dom";
import { storeGuarantee } from "../../services/warrantyServices";
import { getProductList } from '../../services/productServices';

const { Option } = Select;

function AddGuarantee() {
  const navigate = useNavigate();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [form] = Form.useForm();
  const [products, setProducts] = useState([]);

  //Lấy danh sách sản phẩm
      useEffect(() => {
          const fetchApi = async () => {
              const result = await getProductList();
              setProducts(result.data);
          };
          fetchApi();
      }, []);

  const handleFinish = async (values) => {
    try {
      const formData = new FormData();

      formData.append("product_id", values.product_id || "");
      formData.append("serial_number", values.serial_number || "");
      formData.append("warranty_status", values.warranty_status || "");
      formData.append("warranty_start", values.warranty_start || "");
      formData.append("warranty_expiry", values.warranty_expiry || "");
      formData.append("branch", values.branch || "");
      formData.append("description", values.description || "");

      const response = await storeGuarantee(formData);
      console.log("Thêm bảo hành thành công:", response);

      apiNoti.success({
        message: "Thông báo",
        description: "Thêm bảo hành thành công!",
      });

      setTimeout(() => navigate("/admin/shopping-order/guarantees"), 800);
    } catch (error) {
      console.error("Lỗi thêm bảo hành:", error);
      message.error("Không thể thêm bảo hành!");
    }
  };

  return (
    <>
      {contextHolder}
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-4">Thêm bảo hành</h2>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          requiredMark={false}
        >
          <Form.Item
            label="Sản phẩm"
            name="product_id"
            rules={[{ required: true, message: "Vui lòng chọn sản phẩm" }]}
          >
            <Select placeholder="Chọn sản phẩm">
              {products?.map((item) => (
                <Option key={item.product_id} value={item.product_id}>
                  {item.product_name}
                </Option>
              ))}
            </Select>
          </Form.Item>

          <Form.Item
            label="Serial Number"
            name="serial_number"
            rules={[{ required: true, message: "Vui lòng nhập serial number" }]}
          >
            <Input placeholder="Nhập serial number" />
          </Form.Item>

          <Form.Item
            label="Trạng thái bảo hành"
            name="warranty_status"
            rules={[{ required: true, message: "Chọn trạng thái" }]}
          >
            <Select placeholder="Chọn trạng thái">
              <Option value="Còn bảo hành">Còn bảo hành</Option>
              <Option value="Hết hạn bảo hành">Hết hạn bảo hành</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Ngày bắt đầu bảo hành"
            name="warranty_start"
            rules={[{ required: true, message: "Chọn ngày bắt đầu" }]}
          >
            <Input type="date" />
          </Form.Item>

          <Form.Item label="Ngày hết hạn bảo hành" name="warranty_expiry">
            <Input type="date" />
          </Form.Item>

          <Form.Item label="Chi nhánh" name="branch">
            <Input placeholder="Nhập chi nhánh" />
          </Form.Item>

          <Form.Item label="Ghi chú" name="description">
            <Input.TextArea rows={3} placeholder="Nhập ghi chú" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Thêm bảo hành
          </Button>
        </Form>
      </div>
    </>
  );
}

export default AddGuarantee;
