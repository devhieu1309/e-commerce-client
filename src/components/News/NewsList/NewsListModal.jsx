import {
  Button,
  Form,
  Input,
  Modal,
  notification,
  Spin,
  Tooltip,
  Select,
  Upload,
  Row,
  Col,
} from "antd";
import { EditOutlined, PlusOutlined, UploadOutlined } from "@ant-design/icons";
import { useState } from "react";
import { editNews, storeNews } from "../../../services/newsServices";

function NewsListModal(props) {
  const { record, onReload, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const [fileList, setFileList] = useState([]);

  const rules = [
    {
      required: true,
      message: "Bắt buộc",
    },
  ];

  const handleShowModal = () => {
    if (mode === "edit" && record) {
      form.setFieldsValue({
        title: record.title,
      });

      setFileList(
        record.cover_image
          ? [
              {
                uid: "-1",
                name: record.cover_image,
                status: "done",
                url: `http://127.0.0.1:8000/storage/${record.cover_image}`,
              },
            ]
          : []
      );
    } else {
      form.resetFields();
      setFileList([]);
    }

    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
    setFileList([]);
  };

  const handleSubmit = async (values) => {
    setSpinning(true);

    const formData = new FormData();
    formData.append("title", values.title);

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      if (file.originFileObj) {
        formData.append("cover_image", file.originFileObj);
      }
    }

    let response;
    if (mode === "edit") {
      response = await editNews(record.id, formData);
    } else {
      response = await storeNews(formData);
    }

    if (response) {
      apiNoti.success({
        message: "Notification",
        description: `${
          mode === "edit" ? "Cập nhật" : "Thêm"
        } Tin Tức thành công!`,
      });
      setShowModal(false);
      form.resetFields();
      setFileList([]);
      onReload();
    } else {
      apiNoti.error({
        message: "Notification",
        description: `${
          mode === "edit" ? "Cập nhật" : "Thêm"
        } Tin Tức thất bại!`,
      });
    }

    setSpinning(false);
  };

  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
        <Tooltip title="Cập nhật Tin Tức">
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
          Thêm Tin Tức Vào
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật Tin Tức" : "Thêm Tin Tức"}
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
          >
            <Form.Item
              label="Tên tiêu đề Tin Tức"
              name="title"
              rules={[...rules]}
            >
              <Input />
            </Form.Item>

            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item label="Ảnh Tin Tức" name="cover_image">
                  <Upload
                    listType="picture-card"
                    beforeUpload={() => false}
                    maxCount={1}
                    fileList={fileList}
                    onChange={({ fileList: newFileList }) =>
                      setFileList(newFileList)
                    }
                  >
                    <div className="flex flex-col items-center justify-center">
                      <UploadOutlined className="text-xl text-gray-600" />
                      <span className="mt-2 text-gray-700">Tải ảnh lên</span>
                    </div>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>

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

export default NewsListModal;
