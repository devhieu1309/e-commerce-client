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
import { getCategoryList } from "../../services/categoryServices";
import {
  editVariation,
  storeVariation,
} from "../../services/variationServices";

const { Option } = Select;

function VariationModal(props) {
  const { record, mode, onReload} = props;
  const [showModal, setShowModal] = useState(false);
  const [form] = Form.useForm();
  const [apiNoti, contextHolder] = notification.useNotification();
  const [spinning, setSpinning] = useState(false);
  const [dataCtagories, setDataCategories] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      const resultCategories = await getCategoryList();
      setDataCategories(resultCategories.categories);
    };
    fetchApi();
  }, []);

  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCancel = () => {
    setShowModal(false);
    form.resetFields();
  };

  const handleSubmit = async (values) => {
    console.log("Minh Hieu: ", values);
    setSpinning(true);
    try {
      const response =
        mode === "edit"
          ? await editVariation(record.variation_id, values)
          : await storeVariation(values);
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
        <Tooltip title="Chỉnh sửa biến thể">
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
          Thêm biến thể
        </Button>
      )}

      <Modal
        open={showModal}
        onCancel={handleCancel}
        title={mode === "edit" ? "Cập nhật biến thể" : "Thêm biến thể"}
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
            <Form.Item label="Tên biển thể" name="variation_name">
              <Input />
            </Form.Item>

            <Form.Item label="Chọn danh mục" name="category_id">
              <Select
                style={{
                  width: "100%",
                }}
                placeholder="Chọn danh mục"
                allowClear
              >
                {dataCtagories &&
                  dataCtagories.map((item) => (
                    <Option value={item.category_id}>
                      {item.category_name}
                    </Option>
                  ))}
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

export default VariationModal;
