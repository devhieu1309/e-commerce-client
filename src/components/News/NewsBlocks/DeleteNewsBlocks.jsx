import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteNewsBlocks } from "../../../services/newsBlocksServices";

function DeleteNewsBlocks(props) {
  const { record, onReload } = props;
  const [apiNoti, contextHolder] = notification.useNotification();

  const handleDelete = async () => {
    const response = await deleteNewsBlocks(record.id);
    if (response.success) {
      apiNoti.success({
        message: `Notification`,
        description: `Xóa bài viết ${record.title} thành công!`,
      });
      setTimeout(() => {
        onReload();
      }, 1500);
    } else {
      apiNoti.error({
        message: `Notification`,
        description: `Xóa bài viết ${record.title} thất bại!`,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title={`Bạn có chắc muốn xóa ${record.title}?`}
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteNewsBlocks;
