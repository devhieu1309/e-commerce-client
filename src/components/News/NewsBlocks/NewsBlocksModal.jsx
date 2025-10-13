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

function NewsBlocksModal(props) {
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
          Thêm bài viết cho tin tức
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật bài viết" : "Thêm bài viết"}
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

            <Form.Item label="Nội dung" name="content" rules={rules}>
              <Input.TextArea rows={4} placeholder="Nhập nội dung..." />
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

            <Form.Item
              label="Chọn vị trí hiển thị "
              name="position"
              rules={rules}
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Vị trí hiển thị"
                allowClear
              >
                <Option value="1">Tiêu đề 1 </Option>
                <Option value="2">Tiêu đề 2 </Option>
                <Option value="3">Tiêu đề 3 </Option>
                <Option value="4">Tiêu đề 4 </Option>
                <Option value="5">Tiêu đề 5 </Option>
                <Option value="6">Tiêu đề 6 </Option>
                <Option value="7">Tiêu đề 7 </Option>
                <Option value="8">Tiêu đề 8 </Option>
                <Option value="9">Tiêu đề 9 </Option>
                <Option value="10">Tiêu đề 10 </Option>
              </Select>
            </Form.Item>

            <Form.Item label="Chọn mã tin tức" name="news_id" rules={rules}>
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Mã tin tức"
                allowClear
              >
                <Option value="001">Tin tức 1 </Option>
                <Option value="002">Tin tức 2 </Option>
                <Option value="003">Tin tức 3 </Option>
                <Option value="004">Tin tức 4 </Option>
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

export default NewsBlocksModal;
