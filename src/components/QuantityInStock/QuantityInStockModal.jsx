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

function QuantityInStockModal(props) {
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
          Thêm danh mục
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={
          mode === "edit"
            ? "Cập nhật sản phẩm trong kho"
            : "Thêm sản phẩm trong kho"
        }
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
            <Form.Item label="Số lượng tồn kho" name="quantity" rules={rules}>
              <Input />
            </Form.Item>

            <Form.Item label="Giá " name="price" rules={rules}>
              <Input />
            </Form.Item>

            <Form.Item
              label="Upload ảnh "
              name="price"
              rules={rules}
            ></Form.Item>
            {/* <Form.Item
              label="Upload ảnh sản phẩm"
              name="product_image"
              valuePropName="fileList"
              getValueFromEvent={(e) => {
                if (Array.isArray(e)) {
                  return e;
                }
                return e?.fileList;
              }}
              rules={[
                {
                  required: true,
                  message: "Vui lòng upload ít nhất 1 ảnh sản phẩm!",
                },
              ]}
            >
              <Upload
                name="product_image"
                listType="picture-card"
                beforeUpload={() => false} // Ngăn upload tự động, bạn sẽ xử lý khi submit
              >
                <div>
                  <PlusOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              </Upload>
            </Form.Item> */}

            <Form.Item
              label="Chọn mã SKU của sản phẩm"
              name="category_parent_id"
              rules={rules}
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Mã SKU của sản phẩm"
                allowClear
              >
                <Option value="001">SKU01</Option>
                <Option value="002">SKU02</Option>
                <Option value="003">SKU03</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Chọn Mã sản phẩm"
              name="category_parent_id"
              rules={rules}
            >
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Mã sản phẩm"
                allowClear
              >
                <Option value="001">Iphone 15</Option>
                <Option value="002">Iphone 15 promax</Option>
                <Option value="003">Iphon 16 </Option>
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

export default QuantityInStockModal;
