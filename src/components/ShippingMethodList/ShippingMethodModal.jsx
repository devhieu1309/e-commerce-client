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
  // const rules = [
  //   {
  //     required: true,
  //     message: "Bắt buộc",
  //   },
  // ];

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
      const response = mode === "edit" ? await editShippingMethod(record.shipping_method_id, values) : await storeShippingMethod(values);
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
        <Tooltip title="Chỉnh sửa phương thức">
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
            <Form.Item label="Tên phương thức" name="shipping_method_name" rules={[]}>
              <Input />
            </Form.Item>

            <Form.Item label="Giá phương thức" name="shipping_method_price" rules={[
              {
                required: false,
                message: "Vui lòng nhập giá phương thức vận chuyển",
              },
            ]}>

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
