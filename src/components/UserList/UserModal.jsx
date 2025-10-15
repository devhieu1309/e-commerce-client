import { Button, Form, Input, Modal, notification, Select, Spin, Tooltip } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { storeUser, editUser } from "../../services/userServices";

const { Option } = Select;

function UserModal(props) {
  const { record, onReload, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);

  const isEdit = mode === "edit";

  const handleShowModal = () => {
    if (isEdit && record) {
      form.setFieldsValue(record);
    } else {
      form.resetFields();
    }
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    console.log("Values: ", values);
    console.log("REcoed: ", record);
    setSpinning(true);
    if (mode === "edit") {
      const response = await editUser(record.user_id, values);
      console.log("response: ", response);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Cập nhật người dùng thành công!`,
        });
        setShowModal(false);
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Cập nhật người dùng không thành công!`,
        });
      }
      setSpinning(false);
    } else {
      console.log("Thêm dữ lieu thành cong!!");
      const response = await storeUser(values);
      if (response) {
        apiNoti.success({
          message: "Thông báo",
          description: `Thêm người dùng thành công!`,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      } else {
        apiNoti.error({
          message: "Thông báo",
          description: "Không thể thêm người dùng!",
        });
      }
    }
    setSpinning(false);
  }

  return (
    <>
      {contextHolder}

      {mode === "edit" ? (
        <Tooltip title="Chỉnh sửa tài khoản">
          <Button
            size="small"
            type="primary"
            icon={<EditOutlined />}
            onClick={handleShowModal}
          />
        </Tooltip>
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
        open={showModal}
        onCancel={handleCancel}
        title={isEdit ? "Cập nhật tài khoản" : "Thêm tài khoản"}
        footer={null}
      >
        <Spin
          spinning={spinning}
          tip={isEdit ? "Đang cập nhật..." : "Đang tạo mới..."}
        >
          <Form
            layout="vertical"
            name="create-user"
            onFinish={handleSubmit}
            form={form}
            initialValues={record}
          >
            <Form.Item
              label="Họ và tên"
              name="name"
            rules={[{ required: true, message: "Vui lòng nhập họ tên người dùng" }]}
            >
              <Input placeholder="Nhập họ tên người dùng" />
            </Form.Item>

            <Form.Item
              label="Email"
              name="email"
            rules={[
              { required: true, message: "Vui lòng nhập email" }
            //   { type: "email", message: "Email không hợp lệ" },
            ]}
            >
              <Input placeholder="Nhập email" />
            </Form.Item>

            <Form.Item
              label="Số điện thoại"
              name="phone"
              rules={[{ required: true, message: "Vui lòng nhập số điện thoại" }]}
            >
              <Input placeholder="Nhập số điện thoại" />
            </Form.Item>

            <Form.Item
              label="Quyền hạn"
              name="role"
              initialValue="Người Dùng" 
            >
              <Select placeholder="Chọn quyền">
                <Option value="Quản trị Viên">Quản trị viên</Option>
                <Option value="Người Dùng">Người dùng</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Mật khẩu"
              name="password"
            >
              <Input.Password placeholder="Nhập mật khẩu" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                {isEdit ? "Cập nhật" : "Thêm mới"}
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
};


export default UserModal;
