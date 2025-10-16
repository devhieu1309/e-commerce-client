import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteUser } from "../../services/userServices";

function UserDelete(props) {
  const { record, onReload } = props;
  const [apiNoti, contextHolder] = notification.useNotification();

  // Hàm xử lý xóa
  const handleDelete = async () => {
    const response = await deleteUser(record.user_id);
    // console.log("Minh Hieu: ", record);
     if (response.success) {
      apiNoti.success({
        message: `Notification`,
        description: `Xóa người ${record.name} dùng thành công!`,
      });
      setTimeout(() => {
        onReload();
      }, 500) 
    } else {
      apiNoti.error({
        message: `Notification`,
        description: `Xóa danh mục thất bại!`,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title="Sure to delete?"
        okText="OK"
        cancelText="Cancel"
        onConfirm={handleDelete}
      >
        <Button
          danger
          size="small"
          icon={<DeleteOutlined />}
        />
      </Popconfirm>
    </>
  );
}

export default UserDelete;
