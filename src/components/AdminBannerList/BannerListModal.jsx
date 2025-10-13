import {
  Button,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Select,
  Spin,
  Switch,
} from "antd";
import { EditOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const { Option } = Select;

function BannerListModal(props) {
  const { record, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);

  const rules = [
    {
      required: true,
      message: "Bắt buộc",
    },
  ];

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    // setSpinning(true);
    // const response = await updateRoom(record.id, values);
    // // const response = undefined;
    // setTimeout(() => {
    //   if (response) {
    //     apiNoti.success({
    //       message: `Notification`,
    //       description: `Cập nhật sản phẩm ${record.name} thành công!`,
    //     });
    //     setShowModal(false);
    //     onReload();
    //   } else {
    //     apiNoti.error({
    //       message: `Notification`,
    //       description: `Cập nhật sản phẩm ${record.name} không thành công!`,
    //     });
    //   }
    //   setSpinning(false);
    // }, 3000);
  };
  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
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
          Thêm banner vào
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật banner" : "Thêm banner"}
        footer={null}
      >
        <Spin spinning={spinning} tip="Đang cập nhật...">
          <Form
            layout="vertical"
            name="create-room"
            onFinish={handleSubmit}
            form={form}
            initialValues={record}
          >
            <Form.Item label="Tên tiêu đề" name="title" rules={rules}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Upload ảnh"
              name="title"
              rules={rules}
            ></Form.Item>

            <Form.Item label="Đường dẫn liên kết" name="link_url" rules={rules}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Chọn trang hiển thị "
              name="position"
              rules={rules}
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Chọn trang hiển thị"
                allowClear
              >
                <Option value="home">Trang chủ</Option>
                <Option value="product">Trang sản phẩm</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Chọn trạng thái"
              name="category_parent_id"
              rules={rules}
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Chọn trạng thái"
                allowClear
              >
                <Option value="0">ẩn đi</Option>
                <Option value="1">Hiển thị</Option>
              </Select>
            </Form.Item>

            <Form.Item label={null}>
              <Button type="primary" htmlType="submit">
                {mode === "edit" ? "Cập nhật" : "Thêm mới"}
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
}

export default BannerListModal;
