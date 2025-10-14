import { Button, Form, Input, Modal, notification, Spin, Tooltip } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { editBanner, storeBanner } from "../../services/bannerServices";

function BannerListModal(props) {
  const { record, onReload, mode } = props;
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
    setSpinning(true);
    if (mode === "edit") {
      const response = await editBanner(record.id, values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Cập nhật Banner ${response.title} thành công!`,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Cập nhật Banner ${response.title} không thành công!`,
        });
      }
      setSpinning(false);
    } else {
      const response = await storeBanner(values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Thêm Banner ${response.title} thành công!`,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Thêm Banner ${response.title} không thành công!`,
        });
      }
      setSpinning(false);
    }
  };
  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
        <Tooltip title="Chỉnh sửa Banner">
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
          Thêm Phương thanh toán
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật Banner" : "Thêm Banner"}
        footer={null}
      >
        <Spin
          spinning={spinning}
          tip={mode === "edit" ? "Đang cập nhật..." : "Đang tạo mới..."}
        >
          <Form
            layout="vertical"
            name="create-banner"
            onFinish={handleSubmit}
            form={form}
            initialValues={record}
          >
            {/* Tiêu đề banner */}
            {/* <Form.Item
              label="Tên Banner"
              name="title"
              rules={[{ required: true, message: "Vui lòng nhập tên banner" }]}
            >
              <Input />
            </Form.Item> */}

            {/* <Form.Item
              label="Ảnh"
              name="image"
              rules={[{ required: true, message: "Vui lòng chọn ảnh banner" }]}
            >
              <Input placeholder="Tên file ảnh (ví dụ: banner.jpg)" />
            
            </Form.Item> */}

            {/* Link URL */}
            {/* <Form.Item
              label="Link URL"
              name="link_url"
              rules={[{ required: true, message: "Vui lòng nhập link URL" }]}
            >
              <Input placeholder="https://..." />
            </Form.Item> */}

            {/* Vị trí banner */}
            {/* <Form.Item
              label="Vị trí"
              name="position"
              rules={[{ required: true, message: "Vui lòng chọn vị trí" }]}
            >
              <Select>
                <Select.Option value="home">Trang chủ</Select.Option>
                <Select.Option value="product">Sản phẩm</Select.Option>
              </Select>
            </Form.Item> */}

            {/* Trạng thái hiển thị */}
            {/* <Form.Item label="Trạng thái" name="is_active">
              <Select>
                <Select.Option value="1">Hiển thị</Select.Option>
                <Select.Option value="0">Ân đi</Select.Option>
              </Select>
            </Form.Item> */}

            {/* Nút submit */}
            <Form.Item>
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
