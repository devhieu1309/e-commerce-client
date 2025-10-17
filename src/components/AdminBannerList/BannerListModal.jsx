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
import { editBanner, storeBanner } from "../../services/bannerServices";

function BannerListModal(props) {
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
        link_url: record.link_url,
        position: record.position,
        is_active: String(record.is_active),
      });

      setFileList(
        record.image
          ? [
              {
                uid: "-1",
                name: record.image,
                status: "done",
                url: `http://127.0.0.1:8000/storage/${record.image}`,
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
    formData.append("link_url", values.link_url);
    formData.append("position", values.position);
    formData.append("is_active", Number(values.is_active));

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      if (file.originFileObj) {
        formData.append("image", file.originFileObj);
      }
    }

    let response;
    if (mode === "edit") {
      response = await editBanner(record.id, formData);
    } else {
      response = await storeBanner(formData);
    }

    if (response) {
      apiNoti.success({
        message: "Notification",
        description: `${
          mode === "edit" ? "Cập nhật" : "Thêm"
        } Banner thành công!`,
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
        } Banner thất bại!`,
      });
    }

    setSpinning(false);
  };

  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
        <Tooltip title="Cập nhật Banner">
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
          Thêm Banner vào
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
          >
            <Form.Item
              label="Tên tiêu đề Banner"
              name="title"
              rules={[...rules]}
            >
              <Input />
            </Form.Item>

            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item label="Ảnh Banner" name="image">
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

            <Form.Item label="Link URL" name="link_url" rules={[...rules]}>
              <Input placeholder="https://..." />
            </Form.Item>

            <Form.Item label="Vị trí" name="position" rules={[...rules]}>
              <Select>
                <Select.Option value="home">Trang chủ</Select.Option>
                <Select.Option value="product">Sản phẩm</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Trạng thái" name="is_active" rules={[...rules]}>
              <Select>
                <Select.Option value="1">Hiển thị</Select.Option>
                <Select.Option value="0">Ẩn đi</Select.Option>
              </Select>
            </Form.Item>

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
