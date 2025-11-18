import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deletePayment } from "../../services/paymentTypeService";

function DeletePaymentType(props) {
  const { record, onReload } = props;

  const [apiNoti, contextHolder] = notification.useNotification();

  const handleDelete = async () => {
    const response = await deletePayment(record.payment_type_id);

    if (response.success) {
      apiNoti.success({
        message: "Notification",
        description: `Xóa phương thanh toán ${record.value} thành công!`,
      });

      setTimeout(() => {
        onReload();
      }, 1000);
    } else {
      apiNoti.error({
        message: "Notification",
        description: `Xóa phương thanh toán ${record.value} thất bại!`,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title={` Bạn có muốn xóa Phương thanh toán ${record.value} không?`}
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeletePaymentType;
