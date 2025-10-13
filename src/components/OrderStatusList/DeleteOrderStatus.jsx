import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteOrderStatus(props) {
  const { record } = props;

  const [notiCategory, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, name) => {
    notiCategory[type]({
      message: "Thành công",
      description: `Đã xóa phương thanh toán "${name}" thành công.`,
    });
  };

  const handleDelete = () => {
    openNotificationWithIcon("success", record.name_status);
    // const response = await deleteRoom(record.id);
    // if(response){
    //   onReload();
    //   alert("Xóa bảng ghi thành công!");
    // }else{
    //   alert("Xóa bảng ghi thất bại. Vui lòng thử lại!");
    // }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title="Bạn có chắc xóa phương thanh toán không?"
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteOrderStatus;
