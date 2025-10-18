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
import {
  editNewsBlocks,
  storeNewsBlocks,
} from "../../../services/newsBlocksServices";
import { getNews } from "../../../services/newsServices";

function NewsBlocksModal(props) {
  const { record, onReload, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const [fileList, setFileList] = useState([]);
  const [news, setNews] = useState([]);
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
        content: record.content,
        position: record.position,
        news_id: record.news_id,
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
    formData.append("content", values.content);
    formData.append("position", values.position);
    formData.append("news_id", values.news_id);

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      if (file.originFileObj) {
        formData.append("image", file.originFileObj);
      }
    }

    let response;
    if (mode === "edit") {
      response = await editNewsBlocks(record.id, formData);
    } else {
      response = await storeNewsBlocks(formData);
    }

    if (response) {
      apiNoti.success({
        message: "Notification",
        description: `${
          mode === "edit" ? "Cập nhật" : "Thêm"
        } Bài viết thành công!`,
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
        } Bài viết thất bại!`,
      });
    }

    setSpinning(false);
  };

  const fetchApiNews = async () => {
    const result = await getNews();
    setNews(result);
  };

  useState(() => {
    fetchApiNews();
  }, []);

  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
        <Tooltip title="Cập nhật bài viết">
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
          Thêm bài viết Vào
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật bài viết" : "Thêm bài viết"}
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
              label="Tên tiêu đề bài viết"
              name="title"
              rules={[...rules]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Nội dung bài viết"
              name="content"
              rules={[...rules]}
            >
              <Input.TextArea
                rows={6}
                placeholder="Nhập nội dung bài viết..."
              />
            </Form.Item>

            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item label="Ảnh bài viết" name="image">
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

            <Form.Item
              label="Thứ tự hiển thị"
              name="position"
              rules={[...rules]}
            >
              <Select placeholder="Chọn thứ tự hiển thị">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((pos) => (
                  <Select.Option key={pos} value={pos}>
                    {pos}
                  </Select.Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item
              label="Chọn bài viết thuộc tin tức nào"
              name="news_id"
              rules={[...rules]}
            >
              <Select
                placeholder="Chọn bài viết thuộc tin tức "
                showSearch
                optionFilterProp="children"
              >
                {news.map((item) => (
                  <Select.Option key={item.id} value={item.id}>
                    {item.title}
                  </Select.Option>
                ))}
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

export default NewsBlocksModal;
