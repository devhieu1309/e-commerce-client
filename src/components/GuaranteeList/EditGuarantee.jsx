import React, { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  Form,
  Input,
  Button,
  Select,
  Space,
  Typography,
  message,
  notification,
} from "antd";
import {
  ArrowLeftOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { getGuaranteeById, editGuarantee } from "../../services/warrantyServices";
import { getProductList } from "../../services/productServices";

const { Title } = Typography;
const { Option } = Select;

const EditGuarantee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [apiNoti, contextHolder] = notification.useNotification();

  // Lấy danh sách sản phẩm
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getProductList();
      setProducts(result.data);
    };
    fetchApi();
  }, []);

  // Lấy thông tin guarantee theo ID
  useEffect(() => {
    const fetchGuarantee = async () => {
      try {
        setLoading(true);
        const response = await getGuaranteeById(id);
        
        if (response && response.warranty) {
          const guarantee = response.warranty;
          
          // Set form values
          form.setFieldsValue({
            product_id: guarantee.product_id,
            serial_number: guarantee.serial_number,
            warranty_status: guarantee.warranty_status,
            warranty_start: guarantee.warranty_start,
            warranty_expiry: guarantee.warranty_expiry || "",
            branch: guarantee.branch || "",
            description: guarantee.description || "",
          });
        } else {
          message.error("Không tìm thấy thông tin bảo hành!");
          navigate("/admin/shopping-order/guarantees");
        }
      } catch (error) {
        console.error("Lỗi khi lấy thông tin bảo hành:", error);
        message.error("Không thể tải thông tin bảo hành!");
        navigate("/admin/shopping-order/guarantees");
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchGuarantee();
    }
  }, [id, form, navigate]);

  const handleFinish = async (values) => {
    try {
      setLoading(true);
      const formData = new FormData();

      formData.append("product_id", values.product_id || "");
      formData.append("serial_number", values.serial_number || "");
      formData.append("warranty_status", values.warranty_status || "");
      formData.append("warranty_start", values.warranty_start || "");
      formData.append("warranty_expiry", values.warranty_expiry || "");
      formData.append("branch", values.branch || "");
      formData.append("description", values.description || "");

      const response = await editGuarantee(id, formData);
      console.log("Cập nhật bảo hành thành công:", response);

      if (response && response.success) {
        apiNoti.success({
          message: "Thông báo",
          description: "Cập nhật bảo hành thành công!",
        });

        setTimeout(() => navigate("/admin/shopping-order/guarantees"), 800);
      } else {
        message.error(response?.message || "Không thể cập nhật bảo hành!");
      }
    } catch (error) {
      console.error("Lỗi cập nhật bảo hành:", error);
      message.error("Không thể cập nhật bảo hành!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {contextHolder}
      <div className="p-4">
        <Space style={{ marginBottom: 16 }}>
          <Link to="/admin/shopping-order/guarantees">
            <Button icon={<ArrowLeftOutlined />}>Quay lại</Button>
          </Link>
          <Title level={2} style={{ margin: 0 }}>
            Chỉnh sửa bảo hành
          </Title>
        </Space>

        <Form
          form={form}
          layout="vertical"
          onFinish={handleFinish}
          requiredMark={false}
          disabled={loading}
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

          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit" icon={<SaveOutlined />} loading={loading}>
                Cập nhật bảo hành
              </Button>
              <Link to="/admin/shopping-order/guarantees">
                <Button>Hủy</Button>
              </Link>
            </Space>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default EditGuarantee;
