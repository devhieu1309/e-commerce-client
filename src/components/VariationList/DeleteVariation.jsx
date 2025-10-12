import { Button, notification, Popconfirm, Tooltip } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

function DeleteVariation(props) {
  const { record } = props;

  const [notiCategory, contextHolder] = notification.useNotification();

  const openNotificationWithIcon = (type, record) => {
    notiCategory[type]({
      message: "Thành công",
      description: `Biến thể "${record.name}" của ${record.category_name} đã được xóa thành công.`,
    });
  };

  const handleDelete = () => {
    openNotificationWithIcon("success", record);
  };

  return (
    <>
      {contextHolder}
      <Popconfirm title={`Bạn có chắc muốn xóa ${record.name}?`} onConfirm={handleDelete}>
          <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteVariation;
