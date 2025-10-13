import React, { useState } from "react";
import { Modal, Form, Input, Select, Button } from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons";

const { Option } = Select;

function UserModal({ mode = "create", record = {} }) {
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();

  const isEdit = mode === "edit";

  const handleShowModal = () => {
    setVisible(true);
    if (isEdit) {
      form.setFieldsValue(record);
    } else {
      form.resetFields();
    }
  };

  return (
    <>
      {/* Nút mở modal */}
      {isEdit ? (
        <Button
          size="small"
          type="primary"
          icon={<EditOutlined />}
          onClick={handleShowModal}
        />
      ) : (
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleShowModal}
        >
          Thêm tài khoản
        </Button>
      )}

      <Modal
        title={isEdit ? "Cập nhật người dùng" : "Thêm tài khoản"}
        open={visible}
        onCancel={() => setVisible(false)}
        footer={null} // ❌ Bỏ toàn bộ footer mặc định
      >
        <Form
          form={form}
          layout="vertical"
          initialValues={record}
          validateTrigger="onBlur"
        >
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên!" }]}
          >
            <Input placeholder="Nhập họ tên người dùng" />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email!" },
              { type: "email", message: "Email không hợp lệ!" },
            ]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Số điện thoại"
            name="phone"
            rules={[{ required: true, message: "Vui lòng nhập số điện thoại!" }]}
          >
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item
            label="Quyền hạn"
            name="role"
            rules={[{ required: true, message: "Vui lòng chọn quyền!" }]}
          >
            <Select placeholder="Chọn quyền">
              <Option value="admin">Quản trị viên</Option>
              <Option value="user">Người dùng</Option>
            </Select>
          </Form.Item>

          {!isEdit && (
            <Form.Item
              label="Mật khẩu"
              name="password"
              rules={[{ required: true, message: "Vui lòng nhập mật khẩu!" }]}
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>
          )}

          {/* Nút hành động - căn trái */}
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{ float: "left" }}
            >
              {isEdit ? "Cập nhật" : "Thêm mới"}
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default UserModal;
