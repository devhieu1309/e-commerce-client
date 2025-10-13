import { useState } from "react";
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
function ShippingMethodModal(props) {
  const { record, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const onChange = value => { console.log('changed', value); };
  const formatter = value => {
    const [start, end] = `${value}`.split('.') || [];
    const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${end ? `${v}.${end}` : `${v}`} ₫`;
  };
// const formatter = value => {
//   const [start, end] = `${value}`.split('.') || [];
//   const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
//   return `$ ${end ? `${v}.${end}` : `${v}`}`;
// };
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
          Thêm phương thức
        </Button>
      )}


      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật phương thức" : "Thêm phương thức"}
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
            <Form.Item label="Tên phương thức" name="shipping_method_name" rules={rules}>
              <Input />
            </Form.Item>

            <Form.Item label="Giá phương thức" name="shipping_method_price" rules={rules}>
              {/* <Select
                style={{
                  width: "100%",
                }}
                placeholder="Danh mục cha"
                allowClear
              >
                <Option value="Điện thoại">Điện thoại</Option>
                <Option value="Laptop">Laptop</Option>
                <Option value="Ipad">Ipad</Option>
              </Select> */}
              <InputNumber style={{ width: "100%" }} formatter={formatter} parser={value => value?.replace(/[₫\s.]*/g, '')} onChange={onChange} />
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
export default ShippingMethodModal;
