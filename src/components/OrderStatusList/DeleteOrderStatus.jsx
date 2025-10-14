import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteOrderStatus } from "../../services/orderStatus";

function DeleteOrderStatus(props) {
  const { record, onReload } = props;
  const [apiNoti, contextHolder] = notification.useNotification();

  const handleDelete = async () => {
    const response = await deleteOrderStatus(record.id);
    if (response.success) {
      apiNoti.success({
        message: `Notification`,
        description: `Xóa phương thanh toán ${record.status} thành công!`,
      });
      setTimeout(() => {
        onReload();
      }, 1500);
    } else {
      apiNoti.error({
        message: `Notification`,
        description: `Xóa phương thanh toán ${record.status} thất bại!`,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title={`Bạn có chắc muốn xóa ${record.status}?`}
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteOrderStatus;
