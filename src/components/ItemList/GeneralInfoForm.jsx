import { Form, Input, Row, Col, Select, Typography } from "antd";
const { Title } = Typography;
const { Option } = Select;

function GeneralInfoForm() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mx-10">
      <Title level={4} className="mb-6 text-gray-800">
        Thông tin chung sản phẩm
      </Title>

      {/* Tên sản phẩm & Danh mục */}
      <Row gutter={24}>
        <Col xs={24} md={12}>
          <Form.Item
            label="Tên sản phẩm"
            name="product_name"
            rules={[{ required: true, message: "Vui lòng nhập tên sản phẩm!" }]}
          >
            <Input placeholder="Nhập tên sản phẩm" size="large" />
          </Form.Item>
        </Col>

        <Col xs={24} md={12}>
          <Form.Item
            label="Danh mục"
            name="category_id"
            rules={[{ required: true, message: "Vui lòng chọn danh mục!" }]}
          >
            <Select placeholder="Chọn danh mục" size="large">
              <Option value="1">Điện thoại</Option>
              <Option value="2">Laptop</Option>
              <Option value="3">Máy tính bảng</Option>
            </Select>
          </Form.Item>
        </Col>
      </Row>

      {/* Mô tả sản phẩm */}
      <Row gutter={24}>
        <Col span={24}>
          <Form.Item
            label="Mô tả sản phẩm"
            name="description"
            rules={[{ required: true, message: "Vui lòng nhập mô tả!" }]}
          >
            <Input.TextArea
              placeholder="Nhập mô tả ngắn gọn"
              rows={4}
              showCount
              maxLength={500}
            />
          </Form.Item>
        </Col>
      </Row>
    </div>
  );
}

export default GeneralInfoForm;
