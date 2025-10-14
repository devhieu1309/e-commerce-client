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
  Tooltip,
} from "antd";
import { EditOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { editShippingMethod, storeShippingMethod } from "../../services/shippingMethodServices";
function ShippingMethodModal(props) {

  const { record, onReload, mode } = props;
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

    setSpinning(true);
    if (mode === "edit") {
      const response = await editShippingMethod(record.shipping_method_id, values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Cập nhật phương thức ${response.shipping_method_name} thành công!`,
        });
        setShowModal(false);
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Cập nhật phương thức ${response.shipping_method_name} không thành công!`,
        });
      }
      setSpinning(false);
    } else {
      const response = await storeShippingMethod(values);
      if (response) {
        apiNoti.success({
          message: `Notification`,
          description: `Thêm phương thức ${response.shipping_method_name} thành công!`,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Thêm phương thức ${response.shipping_method_name} không thành công!`,
        });
      }
      setSpinning(false);
    }

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
          Thêm phương thức
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật phương thức" : "Thêm phương thức"}
        footer={null}
      >
        <Spin spinning={spinning} tip={mode === "edit" ? "Đang cập nhật..." : "Đang tạo mới..."}>
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
