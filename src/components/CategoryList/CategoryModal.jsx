import { Button, Form, Input, Modal, notification, Spin, Tooltip } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import TextArea from "antd/es/input/TextArea";
import { editCategory, storeCategory } from "../../services/categoryServices";

function CategoryModal(props) {
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
      const response = await editCategory(record.category_id, values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Cập nhật danh mục ${response.category_name} thành công!`,
        });
        setShowModal(false);
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Cập nhật danh mục ${response.category_name} không thành công!`,
        });
      }
      setSpinning(false);
    } else {
      const response = await storeCategory(values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Thêm danh mục ${response.category_name} thành công!`,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Thêm danh mục ${response.category_name} không thành công!`,
        });
      }
      setSpinning(false);
    }
  };
  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
        <Tooltip title="Chỉnh sửa danh mục">
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
          Thêm danh mục
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật danh mục" : "Thêm danh mục"}
        footer={null}
      >
        <Spin spinning={spinning} tip={mode === "edit" ? "Đang cập nhật..." : "Đang tạo mới..."}>
          <Form
            layout="vertical"
            name="create-room"
            onFinish={handleSubmit}
            form={form}
            initialValues={record}
          >
            <Form.Item label="Tên danh mục" name="category_name" rules={rules}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Mô tả"
              name="description"
              rules={[
                {
                  required: false,
                  message: "Vui lòng nhập mô tả danh mục",
                },
              ]}
            >
              <TextArea
                placeholder="Nhập mô tả danh mục"
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
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

export default CategoryModal;
