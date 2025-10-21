import { useState } from "react";
import {
  Button,
  Tooltip,
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
import TextArea from "antd/es/input/TextArea";
import { EditOutlined, LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { storePromotion, editPromotion } from "../../services/promotionServices";

function PromotionModal(props) {
  // const { record, mode } = props;
  // const [showModal, setShowModal] = useState(false);
  // const [form] = Form.useForm();
  // const [apiNoti, contextHolder] = notification.useNotification();
  // const [spinning, setSpinning] = useState(false);

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

  // const rules = [
  //   {
  //     required: true,
  //     message: "Bắt buộc",
  //   },
  // ];

  // const handleShowModal = () => {
  //   // Nếu là chế độ edit thì convert ngày sang dayjs trước khi set vào form
  //   if (mode === "edit" && record) {
  //     form.setFieldsValue({
  //       ...record,
  //       start_date: record.start_date ? dayjs(record.start_date) : null,
  //       end_date: record.end_date ? dayjs(record.end_date) : null,
  //     });
  //   } else {
  //     form.resetFields();
  //   }
  //   setShowModal(true);
  // };

  // const handleCancel = () => {
  //   setShowModal(false);
  //   // form.resetFields();
  // };

  // const handleSubmit = async (values) => {
  //   // setSpinning(true);
  //   // const response = await updateRoom(record.id, values);
  //   // // const response = undefined;
  //   // setTimeout(() => {
  //   //   if (response) {
  //   //     apiNoti.success({
  //   //       message: `Notification`,
  //   //       description: `Cập nhật sản phẩm ${record.name} thành công!`,
  //   //     });
  //   //     setShowModal(false);
  //   //     onReload();
  //   //   } else {
  //   //     apiNoti.error({
  //   //       message: `Notification`,
  //   //       description: `Cập nhật sản phẩm ${record.name} không thành công!`,
  //   //     });
  //   //   }
  //   //   setSpinning(false);
  //   // }, 3000);
  // };
  const { record, onReload, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);

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
      // Convert ngày sang chuỗi
      const payload = {
        ...values,
        start_date: values.start_date?.format('YYYY-MM-DD'),
        end_date: values.end_date?.format('YYYY-MM-DD'),
      };

      const response =
        mode === "edit"
          ? await editPromotion(record.promotion_id, values)
          : await storePromotion(values);
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
        <Tooltip title="Chỉnh sửa chương trình khuyến mãi">
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
            {/* <Form.Item label="Mã khuyến mãi" name="id" rules={rules}>
              <Input />
            </Form.Item> */}
            <Form.Item label="Tên chương trình khuyến mãi" name="promotion_name" rules={[]}>
              <Input />
            </Form.Item>


            <Form.Item
              label="Mô tả"
              name="description"
              rules={[
                {
                  required: false,
                  message: "Vui lòng nhập mô tả chương trình khuyến mãi",
                },
              ]}
            >
              <TextArea
                placeholder="Nhập mô tả chi tiết về chương trình khuyến mãi"
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </Form.Item>


            <Form.Item label="Tỷ lệ giảm giá" name="discount_rate" rules={[]}>
              <InputNumber style={{ width: "100%" }} formatter={formatter} parser={value => value?.replace(/[%\s.]*/g, '')} onChange={onChange} />
            </Form.Item>
            <Form.Item label="Ngày bắt đầu" name="start_date" rules={[]}>
              <DatePicker format={dateFormatList} />
            </Form.Item>
            <Form.Item label="Ngày kết thúc" name="end_date" rules={[]}>
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
