import { Button, notification, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteCategory(props) {
  const { record } = props;

  const [notiCategory, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, name) => {
    notiCategory[type]({
      message: "Thành công",
      description: `Danh mục "${name}" đã được xóa thành công.`,
    });
  };

  const handleDelete = () => {
    openNotificationWithIcon("success", record.category_name);
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
      <Popconfirm title={`Bạn có chắc muốn xóa ${record.category_name}?`} onConfirm={handleDelete}>
          <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteCategory;
