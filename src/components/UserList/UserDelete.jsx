import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function UserDelete(props) {
  const { record, onReload } = props; // nhận record và callback reload

  const [notiUser, contextHolder] = notification.useNotification();

  // Hàm mở thông báo
  const openNotificationWithIcon = (type, name) => {
    notiUser[type]({
      message: "Thành công",
      description: `Người dùng "${name}" đã được xóa thành công.`,
    });
  };

  // Hàm xử lý xóa
  const handleDelete = async () => {
    try {
      // ⚠️ Chỗ này bạn thay bằng API thật khi có
      // const response = await deleteUser(record.id);
      // if (response) {
      //   onReload();
      //   openNotificationWithIcon("success", record.full_name);
      // } else {
      //   notiUser.error({
      //     message: "Thất bại",
      //     description: "Xóa người dùng thất bại. Vui lòng thử lại!",
      //   });
      // }

      // Tạm thời mô phỏng:
      openNotificationWithIcon("success", record.name);
      if (onReload) onReload();

    } catch (error) {
      notiUser.error({
        message: "Lỗi",
        description: "Đã xảy ra lỗi khi xóa người dùng.",
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
