import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeletePromotion(props) {
  const { record } = props;

  const [notiPromotion, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, name) => {
    notiPromotion[type]({
      message: "Thành công",
      description: `Chương trình "${name}" đã được xóa thành công.`,
    });
  };

  const handleDelete = () => {
    openNotificationWithIcon("success", record.promotion_name);
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
      <Popconfirm title="Bạn chắc chắn muốn xóa chương trình khuyến mãi này?" onConfirm={handleDelete}>
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeletePromotion;
