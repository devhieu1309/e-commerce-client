import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteShippingMethod } from "../../services/shippingMethodServices";

function DeleteShippingMethod(props) {
  const { record, onReload } = props;

  const [apiNoti, contextHolder] = notification.useNotification();

  const handleDelete = async () => {
      const response = await deleteShippingMethod(record.shipping_method_id);
      
      console.log(response);
      
      if (response.success) {
        apiNoti.success({
          message: `Notification`,
          description: `Xóa phương thức ${record.shipping_method_name} thành công!`,
        });
        setTimeout(() => {
          onReload();
        }, 1500) 
      } else {
        apiNoti.error({
          message: `Notification`,
          description: `Xóa phương thức ${record.shipping_method_name} thất bại!`,
        });
      }
    };
  

  return (
    <>
      {contextHolder}
      <Popconfirm title={`Bạn có chắc muốn xóa ${record.shipping_method_name}?`} onConfirm={handleDelete}>
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteShippingMethod;
