import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteShippingMethod(props) {
  const { record } = props;

  const [notiShippingMethod, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, name) => {
    notiShippingMethod[type]({
      message: "Thành công",
      description: `Phương thức "${name}" đã được xóa thành công.`,
    });
  };

  const handleDelete = () => {
    openNotificationWithIcon("success", record.shipping_method_name);
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
      <Popconfirm title="Bạn chắc chắn muốn xóa phương thức này?" onConfirm={handleDelete}>
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteShippingMethod;
