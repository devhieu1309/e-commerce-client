import { Button, Form, Input, Modal, notification, Spin, Tooltip } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { editOrderStatus, storeOrderStatus } from "../../services/orderStatus";

function OrderStatusModal(props) {
  const { record, onReload, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);

  // const rules = [
  //   {
  //     required: true,
  //     message: "Bắt buộc",
  //   },
  // ];

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
      const response = await editOrderStatus(record.id, values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Cập nhật phương thanh toán ${response.status} thành công!`,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Cập nhật phương thanh toán ${response.status} không thành công!`,
        });
      }
      setSpinning(false);
    } else {
      const response = await storeOrderStatus(values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Thêm phương thanh toán ${response.status} thành công!`,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Thêm phương thanh toán ${response.status} không thành công!`,
        });
      }
      setSpinning(false);
    }
  };
  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
        <Tooltip title="Chỉnh sửa Phương thanh toán">
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
        title={
          mode === "edit"
            ? "Cập nhật Phương thanh toán"
            : "Thêm Phương thức thanh toán"
        }
        footer={null}
      >
        <Spin
          spinning={spinning}
          tip={mode === "edit" ? "Đang cập nhật..." : "Đang tạo mới..."}
        >
          <Form
            layout="vertical"
            name="create-room"
            onFinish={handleSubmit}
            form={form}
            initialValues={record}
          >
            <Form.Item
              label="Tên Phương thanh toán"
              name="status"
              rules={[
                {
                  required: true,
                  message: "Bắt buộc",
                },
                {
                  pattern: /^[^\s].*[^\s]$|^[^\s]$/,
                  message: "Không được chứa khoảng trắng ở đầu hoặc cuối",
                },
                {
                  pattern: /^[a-zA-Z0-9\sÀ-ỹ]+$/,
                  message: "Không được chứa ký tự đặc biệt",
                },
              ]}
            >
              <Input />
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

export default OrderStatusModal;
