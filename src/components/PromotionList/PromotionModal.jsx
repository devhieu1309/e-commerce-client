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
  DatePicker,
  Space,
} from "antd";
import { EditOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';

function PromotionModal(props) {
  const { record, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);

  const onChange = value => { console.log('changed', value); };
  const formatter = value => {
    const [start, end] = `${value}`.split('.') || [];
    const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${end ? `${v}.${end}` : `${v}`} %`;
  };

  // format ngay thang nam  
  dayjs.extend(customParseFormat);
  const { RangePicker } = DatePicker;
  const dateFormatList = ['DD/MM/YYYY'];
  const customFormat = value => `custom format: ${value.format(dateFormat)}`;

  const rules = [
    {
      required: true,
      message: "Bắt buộc",
    },
  ];

  const handleShowModal = () => {
    // Nếu là chế độ edit thì convert ngày sang dayjs trước khi set vào form
    if (mode === "edit" && record) {
      form.setFieldsValue({
        ...record,
        start_date: record.start_date ? dayjs(record.start_date) : null,
        end_date: record.end_date ? dayjs(record.end_date) : null,
      });
    } else {
      form.resetFields();
    }
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    // form.resetFields();
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
          Thêm chương trình khuyến mãi
        </Button>
      )}


      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật chương trình khuyến mãi" : "Thêm chương trình khuyến mãi"}
        footer={null}
        // destroyOnClose
        // afterClose={() => form.resetFields()}
      >
        <Spin spinning={spinning} tip="Đang cập nhật...">
          <Form
            layout="vertical"
            name="create-room"
            onFinish={handleSubmit}
            form={form}
            initialValues={record}
          >
            <Form.Item label="Mã khuyến mãi" name="id" rules={rules}>
              <Input />
            </Form.Item>
            <Form.Item label="Tên chương trình khuyến mãi" name="promotion_name" rules={rules}>
              <Input />
            </Form.Item>
            
            <Form.Item label="Tỷ lệ giảm giá" name="discount_rate" rules={rules}>
              <InputNumber style={{ width: "100%" }} formatter={formatter} parser={value => value?.replace(/[%\s.]*/g, '')} onChange={onChange} />
            </Form.Item>
            <Form.Item label="Ngày bắt đầu" name="start_date" rules={rules}>
              <DatePicker format={dateFormatList} />
            </Form.Item>
            <Form.Item label="Ngày kết thúc" name="end_date" rules={rules}>
              <DatePicker defaultValue={dayjs('01/01/2015', dateFormatList[0])} format={dateFormatList} />
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
export default PromotionModal;
