import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteProduct } from "../../services/productServices";
import { useNavigate } from "react-router-dom";

function DeleteItem(props) {
  const navigate = useNavigate();
  const { record, onReload } = props;
  const [apiNoti, contextHolder] = notification.useNotification();

  const handleDelete = async () => {
    const response = await deleteProduct(record.product_id);
    console.log("Response delete:", response);
    if (response.success) {
      apiNoti.success({
        message: `Notification`,
        description: `Xóa sản phẩm ${record.product_name} thành công!`,
      });
      setTimeout(() => {
        onReload();
      }, 500);
    } else {
      apiNoti.error({
        message: `Notification`,
        description: `Xóa sản phẩm ${record.product_name} thất bại!`,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title={`Bạn có chắc muốn xóa ${record.product_name}?`}
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteItem;
