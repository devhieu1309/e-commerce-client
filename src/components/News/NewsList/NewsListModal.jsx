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

function NewsListModal(props) {
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
          Thêm tin tức mới
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật tin tức" : "Thêm tin tức"}
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
            <Form.Item label="Tiêu đề" name="title" rules={rules}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Upload ảnh đại diện"
              name="cover_image"
              valuePropName="fileList"
              getValueFromEvent={(e) => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e?.fileList;
              }}
              rules={[{ required: true, message: "Vui lòng chọn ảnh!" }]}
            >
              {/* <Upload
                name="cover_image"
                listType="picture-card"
                beforeUpload={() => false} // Ngăn upload tự động
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload> */}
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

export default NewsListModal;
