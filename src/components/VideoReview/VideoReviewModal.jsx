import { Button, Form, Input, Modal, notification, Spin, Tooltip, Select } from "antd";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { storeVideoReview, editVideoReview } from '../../services/videoreviewServices';

const { Option } = Select;
const { TextArea } = Input;

function VideoReviewModal(props) {
  const { record, onReload, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const [products, setProducts] = useState([]);

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
  };

  const handleSubmit = async (values) => {
    setSpinning(true);
    try {
      const response =
        mode === "edit"
          ? await editVideoReview(record.video_id, values)
          : await storeVideoReview(values);
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
                  <Option key={p.id} value={p.id}>
                    {p.name}
                  </Option>
                ))}
              </Select>
            </Form.Item>

            <Form.Item label="Tiêu đề video" name="title"
              rules={[{ required: true, message: "Vui lòng nhập tiêu đề video" }]}
            >
              <TextArea row={4} />
            </Form.Item>

            <Form.Item label="URL" name="url"
              rules={[{ required: true, message: "Vui lòng nhập URL video" }]}
            >
              <TextArea row={4} />
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

export default VideoReviewModal;
