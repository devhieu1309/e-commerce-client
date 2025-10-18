import { Button, notification, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteVariation } from "../../services/variationServices";

function DeleteVariation(props) {
  const { record, onReload } = props;
  const [apiNoti, contextHolder] = notification.useNotification();
  // console.log("Record: ", record);

  // const [notiCategory, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, record) => {
    notiCategory[type]({
      message: "Thành công",
      description: `Biến thể "${record.variation_name}" của ${record.category_name} đã được xóa thành công.`,
    });
  };

  const handleDelete = async () => {
    const response = await deleteVariation(record.variation_id);
        if (response.success) {
          apiNoti.success({
            message: `Notification`,
            description: `Xóa danh mục ${record.variation_name} thành công!`,
          });
          setTimeout(() => {
            onReload();
          }, 500) 
        } else {
          apiNoti.error({
            message: `Notification`,
            description: `Xóa danh mục ${rrecord.variation_name} thất bại!`,
          });
        }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm title={`Bạn có chắc muốn xóa ${record.variation_name} của ${record.category_name} không?`} onConfirm={handleDelete}>
          <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteVariation;
