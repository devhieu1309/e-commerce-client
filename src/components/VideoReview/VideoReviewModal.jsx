import { Button, Form, Input, Modal, notification, Spin, Tooltip, Select, Upload } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { storeVideoReview, editVideoReview } from '../../services/videoreviewServices';
import { InboxOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;
const { Dragger } = Upload;

function VideoReviewModal(props) {
  const { record, onReload, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const [products, setProducts] = useState([]);
  const [sourceType, setSourceType] = useState("");
  const [previewUrl, setPreviewUrl] = useState(null);
  const [uploadKey, setUploadKey] = useState(Date.now());

  // lấy danh sách sản phẩm
  useEffect(() => {
    fetch("http://localhost:8000/api/products")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network no ok");
        }
        return response.json();
      })
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy danh sách sản phẩm:", error);
      });
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
    setPreviewUrl(null);
    setSourceType("");
    setUploadKey(Date.now())
  };

  const handleSubmit = async (values) => {
    setSpinning(true);
    try {
      const formData = new FormData();
      formData.append("product_id", values.product_id);
      formData.append("title", values.title);
      formData.append("source_type", values.source_type);

      if (values.source_type === "youtube") {
        formData.append("url", values.url);
      } else if (values.source_type === "upload") {
        const file = values.video?.[0]?.originFileObj;

        if (file) {
          formData.append("video", file);
        } else {
          formData.append("old_video", record.url);
        }
      }

      const response =
        mode === "edit"
          ? await editVideoReview(record.video_id, formData)
          : await storeVideoReview(formData);
      if (response) {
        apiNoti.success({
          message: `Thông báo`,
          description: response.message,
        });
        setShowModal(false);
        form.resetFields();
        setPreviewUrl(null);
        onReload();
      }
    } catch (error) {
      console.error("Lỗi khi gửi form:", error);
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
      } else {
        apiNoti.error({
          message: "Lỗi hệ thống",
          description: "Không thể gửi dữ liệu lên server.",
        });
      }
    } finally {
      setSpinning(false);
    }

  };

  useEffect(() => {
    if (mode === "edit" && record && record.source_type) {
      form.setFieldsValue({
        product_id: record.product_id,
        title: record.title,
        source_type: record.source_type,
        url: record.url || "",
      });


      if (record.source_type === "upload" && record.url) {
        form.setFieldsValue({
          video: [
            {
              uid: "-1",
              name: record.url.split("/").pop(),
              status: "done",
              url: record.url,
            },
          ],
        });
        setPreviewUrl(`http://localhost:8000${record.url}`);
      }

      if (record.source_type === "youtube" && record.url) {
        setPreviewUrl(record.url);
      }

      setSourceType(record.source_type);
    }
  }, [mode, record, form]);

  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
        <Tooltip title="Chỉnh sửa video review">
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
          Thêm video review
        </Button>
      )}


      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Chỉnh sửa video review sản phẩm" : "Thêm video review sản phẩm"}
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
            <Form.Item label="Sản phẩm" name="product_id"
              rules={[{ required: true, message: "Vui lòng chọn sản phẩm" }]} >
              <Select
                showSearch
                placeholder="Chọn sản phẩm"
                allowClear
                style={{ width: "100%" }}

                filterOption={(input, option) =>
                  (option?.children ?? "")
                    .toLowerCase()
                    .includes(input.toLowerCase())
                }

                filterSort={(optionA, optionB) =>
                  (optionA?.children ?? "")
                    .toLowerCase()
                    .localeCompare((optionB?.children ?? "").toLowerCase())
                }
              >
                {/* <Option value="Điện thoại">Điện thoại</Option>
                <Option value="Laptop">Laptop</Option>
                <Option value="Ipad">Ipad</Option> */}
                {products.map((p) => (
                  <Option key={p.product_id} value={p.product_id}>
                    {p.product_name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label="Tiêu đề video" name="title"
              rules={[{ required: true, message: "Vui lòng nhập tiêu đề video" }]}
            >
              <TextArea row={4} />
            </Form.Item>

            <Form.Item
              label="Nguồn video"
              name="source_type"
              rules={[{ required: true, message: "Vui lòng chọn nguồn video" }]}
            >
              <Select
                placeholder="Chọn nguồn video"
                onChange={(value) => {
                  setSourceType(value);
                  form.setFieldsValue({ url: "", video: null });
                  setPreviewUrl(null);
                  setUploadKey(Date.now());
                }}>
                <Option value="youtube">Youtube</Option>
                <Option value="upload">Tải video từ máy</Option>
              </Select>
            </Form.Item>


            {sourceType === "youtube" && (
              <Form.Item
                label="URL YouTube"
                name="url"
                rules={[{ required: true, message: "Vui lòng nhập URL video YouTube" }]}
              >
                <Input.TextArea
                  rows={2}
                  placeholder="Ví dụ: https://www.youtube.com/watch?v=xxxxx"
                  onChange={(e) => setPreviewUrl(e.target.value)}
                />
              </Form.Item>
            )}

            {sourceType === "upload" && (
              <Form.Item
                label="Tải video lên"
                name="video"
                valuePropName="fileList"
                getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
                rules={[{ required: true, message: "Vui lòng chọn file video" }]}
              >
                <Dragger
                  key={uploadKey}
                  name="video"
                  multiple={false}
                  beforeUpload={() => false}
                  accept=".mp4,.mov,.avi"
                  onChange={(info) => {
                    const file = info.fileList[0]?.originFileObj;
                    if (file) {
                      const preview = URL.createObjectURL(file);
                      setPreviewUrl(preview);
                    } else {
                      setPreviewUrl(null);
                    }
                  }}
                  onRemove={() => {
                    setPreviewUrl(null);
                  }}
                >
                  <p className="ant-upload-drag-icon">
                    <InboxOutlined />
                  </p>
                  <p className="ant-upload-text">
                    Kéo hoặc chọn file video (MP4, MOV, AVI)
                  </p>
                </Dragger>
              </Form.Item>
            )}

            {previewUrl && (
              <div style={{ marginTop: 20, textAlign: "center" }}>
                {sourceType === "youtube" ? (
                  <iframe
                    width="100%"
                    height="250"
                    src={previewUrl.replace("watch?v=", "embed/")}
                    title="Preview"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <video width="100%" height="250" controls>
                    <source src={previewUrl} type="video/mp4" />
                    Trình duyệt không hỗ trợ phát video.
                  </video>
                )}
              </div>
            )}

            {/* Button */}
            <Form.Item>
              <Button type="primary" htmlType="submit" block>
                {mode === "edit" ? "Cập nhật" : "Thêm mới"}
              </Button>
            </Form.Item>
          </Form>
        </Spin>
      </Modal>
    </>
  );
}

export default VideoReviewModal;
