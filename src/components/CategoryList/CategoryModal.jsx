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

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    setSpinning(true);
    try {
      const response =
        mode === "edit"
          ? await editCategory(record.category_id, values)
          : await storeCategory(values);
      if (response) {
        apiNoti.success({
          message: `Thông báo`,
          description: response.message,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      }
    } catch (error) {
      if (error.response && error.response.status === 422) {
        const serverErrors = error.response.data.errors;
        Object.keys(serverErrors).forEach((field) => {
          form.setFields([
            {
              name: field,
              errors: serverErrors[field],
            },
          ]);
        });
      }
    } finally {
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
            <Form.Item label="Tên danh mục" name="category_name" rules={[]}>
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
