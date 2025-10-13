import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteBanner() {
  const [notiBanner, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type) => {
    notiBanner[type]({
      message: "Thành công",
      description: `Banner đã được xóa thành công.`,
    });
  };

  const handleDelete = () => {
    openNotificationWithIcon("success");
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
        title="Bạn có muốn xóa Banner này không?"
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteBanner;
