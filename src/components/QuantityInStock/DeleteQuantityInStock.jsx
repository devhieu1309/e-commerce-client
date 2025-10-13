import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteQuantityInStock() {
  // const { record } = props;

  const [notiCategory, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, name) => {
    notiCategory[type]({
      message: "Thành công",
      description: `Sản phẩm "${name}" đã được xóa thành công.`,
    });
  };

  const handleDelete = () => {
    // openNotificationWithIcon("success", record.category_name);
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
        title="Bạn có muốn xóa sản phẩm không?"
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteQuantityInStock;
