import {
  Button,
  Form,
  Input,
  Modal,
  notification,
  Select,
  Upload,
  Row,
  Col,
  Spin,
  Switch,
  Tooltip,
} from "antd";
import { EditOutlined, UploadOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { storePayment, editPayment } from "../../services/paymentTypeService";

const { Option } = Select;

function PaymentTypeModal(props) {
  const { record, mode, onReload } = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const [fileList, setFileList] = useState([]);

  const rules = [
    {
      required: true,
      message: "Bắt buộc",
    },
  ];

  const handleShowModal = () => {
    if (mode == "edit" && record) {
      form.setFieldValue({
        title: record.title,
      });

      setFileList(
        record.image
          ? [
              {
                uid: "-1",
                name: record.image,
                status: "done",
                url: `http://127.0.0.1:8000/storage/${record.image}`,
              },
            ]
          : []
      );
    } else {
      form.resetFields();
      setFileList([]);
    }

    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
    setFileList([]);
  };

  const handleSubmit = async (values) => {
    setSpinning(true);

    const formData = new FormData();
    formData.append("value", values.value);

    if (fileList && fileList.length > 0) {
      const file = fileList[0];
      if (file.originFileObj) {
        formData.append("image", file.originFileObj);
      }
    }

    let response;
    if (mode === "edit") {
      response = await editPayment(record.payment_type_id, formData);
    } else {
      response = await storePayment(formData);
    }

    if (response) {
      apiNoti.success({
        message: "Notification",
        description: `${
          mode === "edit" ? "Cập nhật" : "Thêm mới"
        } Phương thanh toán!`,
      });

      setShowModal(false);
      form.resetFields();
      setFileList([]);
      onReload();
    } else {
      apiNoti.error({
        message: "Notification",
        description: `${
          mode === "edit" ? "Cập nhật" : "Thêm mới"
        } Phương thanh toán thất bại!`,
      });
    }

    setSpinning(false);
  };
  return (
    <>
      {contextHolder}
      {mode === "edit" ? (
        <Tooltip title={"Cập nhật phương thanh toán"}>
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
          Thêm mới
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={
          mode === "edit"
            ? "Cập nhật phương thanh toán"
            : "Thêm phương thanh toán"
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
            <Form.Item
              label="Thêm tên phương thanh toán"
              name="value"
              rules={[rules]}
            >
              <Input />
            </Form.Item>

            <Row gutter={24}>
              <Col xs={24} md={12}>
                <Form.Item label="Ảnh phương thanh toán" name="image">
                  <Upload
                    listType="picture-card"
                    beforeUpload={() => false}
                    maxCount={1}
                    fileList={fileList}
                    onChange={({ fileList: newFileList }) =>
                      setFileList(newFileList)
                    }
                  >
                    <div className="flex flex-col items-center justify-center">
                      <UploadOutlined className="text-xl text-gray-600" />
                      <span className="mt-2 text-gray-700">Tải ảnh lên</span>
                    </div>
                  </Upload>
                </Form.Item>
              </Col>
            </Row>

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

export default PaymentTypeModal;
