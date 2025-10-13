import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteNewsList() {
  const [notiNews, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, name) => {
    notiNews[type]({
      message: "Thành công",
      description: `Tin tức "${name}" đã được xóa thành công.`,
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
        title="Bạn có muốn xóa tin tức này không?"
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteNewsList;
