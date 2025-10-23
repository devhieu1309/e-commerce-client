import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deletePromotion } from "../../services/promotionServices";

function DeletePromotion(props) {

  const { record, onReload } = props;

  const [apiNoti, contextHolder] = notification.useNotification();

  const handleDelete = async () => {
    const response = await deletePromotion(record.promotion_id);
    if(response.success) {
      apiNoti.success({
          message: `Notification`,
          description: `Xóa chương trình khuyến mãi ${record.promotion_name} thành công!`,
        });setTimeout(() => {
          onReload();
        }, 500) 
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Xóa chương trình khuyến mãi ${record.promotion_name} thất bại!`,
        });
      }
    // openNotificationWithIcon("success", record.promotion_name);
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
      <Popconfirm title={`Bạn chắc chắn muốn xóa ${record.promotion_name}?`} onConfirm={handleDelete}>
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeletePromotion;
