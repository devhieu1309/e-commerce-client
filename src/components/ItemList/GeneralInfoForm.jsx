import { Form, Input, Row, Col, Select, Upload, Typography } from "antd";
import { UploadOutlined } from "@ant-design/icons";

const { Title } = Typography;
const { Option } = Select;

function GeneralInfoForm() {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 mx-10">
      <Title level={4} className="mb-6 text-gray-800">
        Thông tin chung sản phẩm
      </Title>

      <Form layout="vertical" requiredMark={false}>
        {/* Tên sản phẩm & Danh mục */}
        <Row gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Tên sản phẩm"
              name="name"
              rules={[
                { required: true, message: "Vui lòng nhập tên sản phẩm!" },
              ]}
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
              rules={[
                { required: true, message: "Vui lòng nhập mô tả sản phẩm!" },
              ]}
            >
              <Input.TextArea
                placeholder="Nhập mô tả ngắn gọn về sản phẩm"
                rows={4}
                size="large"
                showCount
                maxLength={500}
              />
            </Form.Item>
          </Col>
        </Row>

        {/* Ảnh sản phẩm */}
        {/* <Row gutter={24}>
          <Col xs={24} md={12}>
            <Form.Item
              label="Ảnh sản phẩm"
              name="image"
              rules={[
                { required: true, message: "Vui lòng tải ảnh sản phẩm!" },
              ]}
            >
              <Upload
                listType="picture-card"
                beforeUpload={() => false}
                maxCount={1}
              >
                <div className="flex flex-col items-center justify-center">
                  <UploadOutlined className="text-gray-600 text-xl" />
                  <span className="mt-2 text-gray-700">Tải ảnh lên</span>
                </div>
              </Upload>
            </Form.Item>
          </Col>
        </Row> */}
      </Form>
    </div>
  );
}

export default GeneralInfoForm;
