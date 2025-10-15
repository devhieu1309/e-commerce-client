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

  // const handleSubmit = async (values) => {
  //   setSpinning(true);
  //   if (mode === "edit") {
  //     const response = await editBanner(record.id, values);
  //     if (response) {
  //       apiNoti.success({
  //         message: `Notification`,
  //         description: `Cập nhật Banner ${response.title} thành công!`,
  //       });
  //       setShowModal(false);
  //       form.resetFields();
  //       onReload();
  //     } else {
  //       apiNoti.error({
  //         message: `Notification`,
  //         description: `Cập nhật Banner ${response.title} không thành công!`,
  //       });
  //     }
  //     setSpinning(false);
  //   } else {
  //     const response = await storeBanner(values);
  //     if (response) {
  //       apiNoti.success({
  //         message: `Notification`,
  //         description: `Thêm Banner ${response.title} thành công!`,
  //       });
  //       setShowModal(false);
  //       form.resetFields();
  //       onReload();
  //     } else {
  //       apiNoti.error({
  //         message: `Notification`,
  //         description: `Thêm Banner ${response.title} không thành công!`,
  //       });
  //     }
  //     setSpinning(false);
  //   }
  // };

  const handleSubmit = async (values) => {
    setSpinning(true);

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("link_url", values.link_url);
    formData.append("position", values.position);
    formData.append("is_active", values.is_active);

    // 🖼️ Lấy file ảnh
    if (values.image && values.image[0]) {
      formData.append("image", values.image[0].originFileObj);
    }

    let response;
    if (mode === "edit") {
      response = await editBanner(record.id, formData);
    } else {
      response = await storeBanner(formData);
    }

    if (response) {
      apiNoti.success({
        message: `Notification`,
        description: `${
          mode === "edit" ? "Cập nhật" : "Thêm"
        } Banner thành công!`,
      });
      setShowModal(false);
      form.resetFields();
      onReload();
    } else {
      apiNoti.error({
        message: `Notification`,
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
            initialValues={record}
          >
            <Form.Item
              label="Tên tiêu đề Banner"
              name="title"
              rules={[
                { required: true, message: "Vui lòng nhập tên tiêu đề banner" },
              ]}
            >
              <Input />
            </Form.Item>

            {/* <Form.Item
              label="Ảnh"
              name="image"
              rules={[{ required: true, message: "Vui lòng chọn ảnh banner" }]}
            >
              <Input placeholder="Tên file ảnh (ví dụ: banner.jpg)" />
            </Form.Item> */}

            {/* Ảnh  */}
            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item
                  label="Ảnh Banner"
                  name="image"
                  rules={[
                    { required: true, message: "Vui lòng tải ảnh Banner!" },
                  ]}
                >
                  <Upload
                    listType="picture-card"
                    beforeUpload={() => false}
                    maxCount={1}
                  >
                    <div className="flex flex-col items-center justify-center">
                      <UploadOutlined className="text-xl text-gray-600" />
                      <span className="mt-2 text-gray-700">Tải ảnh lên</span>
                    </div>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>

            <Form.Item
              label="Link URL"
              name="link_url"
              rules={[{ required: true, message: "Vui lòng nhập link URL" }]}
            >
              <Input placeholder="https://..." />
            </Form.Item>

            <Form.Item
              label="Vị trí"
              name="position"
              rules={[{ required: true, message: "Vui lòng chọn vị trí" }]}
            >
              <Select>
                <Select.Option value="home">Trang chủ</Select.Option>
                <Select.Option value="product">Sản phẩm</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item label="Trạng thái" name="is_active">
              <Select>
                <Select.Option value="1">Hiển thị</Select.Option>
                <Select.Option value="0">Ẩn đi</Select.Option>
              </Select>
            </Form.Item>

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
