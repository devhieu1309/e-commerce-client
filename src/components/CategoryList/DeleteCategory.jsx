import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteCategory } from "../../services/categoryServices";

function DeleteCategory(props) {
  const { record, onReload } = props;
  const [apiNoti, contextHolder] = notification.useNotification();

  const handleDelete = async () => {
    const response = await deleteCategory(record.category_id);
    if (response.success) {
      apiNoti.success({
        message: `Notification`,
        description: `Xóa danh mục ${record.category_name} thành công!`,
      });
      setTimeout(() => {
        onReload();
      }, 500) 
    } else {
      apiNoti.error({
        message: `Notification`,
        description: `Xóa danh mục ${record.category_name} thất bại!`,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title={`Bạn có chắc muốn xóa ${record.category_name}?`}
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteCategory;
