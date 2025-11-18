import { useState } from "react";
import {
  Button,
  Tooltip,
  Form,
  Input,
  InputNumber,
  Modal,
  notification,
  Spin,
  DatePicker,
} from "antd";
import TextArea from "antd/es/input/TextArea";
import { EditOutlined, PlusOutlined } from "@ant-design/icons";
import dayjs from 'dayjs';
import { storePromotion, editPromotion } from "../../services/promotionServices";

function PromotionModal(props) {
  const { record, onReload, mode } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [spinning, setSpinning] = useState(false);
  const [apiNoti, contextHolder] = notification.useNotification();

  const dateFormat = 'DD/MM/YYYY';



  // Formatter phần trăm
  const formatter = value => {
    const [start, end] = `${value}`.split('.') || [];
    const v = `${start}`.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    return `${end ? `${v}.${end}` : `${v}`} %`;
  };

  // Mở modal
  const handleShowModal = () => {
    if (mode === "edit" && record) {
      form.setFieldsValue({
        ...record,
        discount_rate: record.discount_rate,
        start_date: record.start_date ? dayjs(record.start_date, 'YYYY-MM-DD HH:mm:ss') : null,
        end_date: record.end_date ? dayjs(record.end_date, 'YYYY-MM-DD HH:mm:ss') : null,
      });
    } else {
      form.resetFields(); // create: form rỗng
    }
    setShowModal(true);
  };

  // Đóng modal
  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  // Submit form
  const handleSubmit = async (values) => {
    setSpinning(true);
    try {

      const payload = {
        ...values,
        start_date: values.start_date
          ? values.start_date.format('YYYY-MM-DD HH:mm:ss')
          : record?.start_date,
        end_date: values.end_date
          ? values.end_date.format('YYYY-MM-DD HH:mm:ss')
          : record?.end_date,
      };



      const response =
        mode === "edit"
          ? await editPromotion(record.promotion_id, payload)
          : await storePromotion(payload);

      if (response) {
        apiNoti.success({
          message: 'Thông báo',
          description: response.message,
        });
        setShowModal(false);
        form.resetFields();
        onReload();
      }
    } catch (error) {
      if (error.response) {
        if (error.response.status === 422) {
          const serverErrors = error.response.data.errors;
          Object.keys(serverErrors).forEach(field => {
            form.setFields([{ name: field, errors: serverErrors[field] }]);
          });
        } else {
          apiNoti.error({
            message: 'Lỗi server',
            description: error.response.data.message || 'Đã xảy ra lỗi, vui lòng thử lại',
          });
        }
      } else {
        apiNoti.error({
          message: 'Lỗi',
          description: error.message || 'Đã xảy ra lỗi không xác định',
        });
      }

    } finally {
      setSpinning(false);
    }
  };

  return (
    <>
      {contextHolder}

      {/* Nút mở modal */}
      {mode === "edit" ? (
        <Tooltip title="Chỉnh sửa chương trình khuyến mãi">
          <Button size="small" type="primary" icon={<EditOutlined />} onClick={handleShowModal} />
        </Tooltip>
      ) : (
        <Button type="primary" icon={<PlusOutlined />} onClick={handleShowModal}>
          Thêm chương trình khuyến mãi
        </Button>
      )}

      {/* Modal */}
      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật chương trình khuyến mãi" : "Thêm chương trình khuyến mãi"}
        footer={null}
      >
        <Spin spinning={spinning} tip={mode === "edit" ? "Đang cập nhật..." : "Đang tạo mới..."}>
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Form.Item
              label="Tên chương trình khuyến mãi"
              name="promotion_name"
              rules={[{ required: true, message: "Vui lòng nhập tên chương trình" }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              label="Mã giảm giá"
              name="discount_code"
              rules={[{ required: true, message: "Vui lòng nhập mã giảm giá" }]}
            >
              <Input placeholder="Nhập mã giảm giá" />
            </Form.Item>

            <Form.Item label="Mô tả" name="description">
              <TextArea
                placeholder="Nhập mô tả chi tiết về chương trình khuyến mãi"
                autoSize={{ minRows: 3, maxRows: 6 }}
              />
            </Form.Item>


            <Form.Item label="Tỷ lệ giảm giá" name="discount_rate" rules={[]}>
              <InputNumber
                style={{ width: "100%" }}
                formatter={formatter}
                parser={value => value?.replace(/[%\s.]*/g, '')}
              />
            </Form.Item>



            <Form.Item label="Ngày bắt đầu" name="start_date">
              <DatePicker format={dateFormat} />
            </Form.Item>

            <Form.Item label="Ngày kết thúc" name="end_date">
              <DatePicker format={dateFormat} />
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

export default PromotionModal;
