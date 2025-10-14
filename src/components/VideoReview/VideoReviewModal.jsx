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
  Tooltip,
} from "antd";
import { EditOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { storeVideoReview, editVideoReview  } from '../../services/videoreviewServices';

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

  const rules = [
    {
      required: true,
      message: "Vui lòng chọn sản phẩm",
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

    // try {
    //   setSpinning(true);
    //   const response = await fetch("http://localhost:8000/api/video-reviews", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify(values),
    //   });

    //   if (!response.ok) {
    //     throw new Error("Lỗi khi thêm video review");
    //   }

    //   const data = await response.json();

    //   apiNoti.success({
    //     message: "Thành công",
    //     description: `Thêm video review "${values.title}" thành công!`,
    //   });

    //   setShowModal(false);
    //   onReload();

    // } catch (error) {
    //   console.error("Error:", error);
    //   apiNoti.error({
    //     message: "Thất bại",
    //     description: `Thêm video review không thành công!`,
    //   });
    // } finally {
    //   setSpinning(false);
    // }

    setSpinning(true);
    if (mode === "edit") {
      const response = await editVideoReview(record.video_id, values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Cập nhật video review với title ${response.title} thành công!`,
        });
        setShowModal(false);
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Cập nhật video review với title ${response.title} không thành công!`,
        });
      }
      setSpinning(false);
    } else {
      const response = await storeVideoReview(values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Thêm video review với title ${response.title} thành công!`,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Thêm video review với title ${response.title} không thành công!`,
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
          Thêm video review
        </Button>
      )}


      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật video review sản phẩm" : "Thêm video review sản phẩm"}
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

            <Form.Item label="Sản phẩm" name="product_id" rules={rules}>
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

            <Form.Item label="Tiêu đề video" name="title" rules={rules}>
              <TextArea row={4} />
            </Form.Item>

            <Form.Item label="URL" name="url" rules={rules}>
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
