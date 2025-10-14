import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteVideoReview } from "../../services/videoreviewServices";

function DeleteVideoReview(props) {
  const { record, onReload } = props;
  const [apiNoti, contextHolder] = notification.useNotification();

  const handleDelete = async () => {
    const response = await deleteVideoReview(record.video_id);
    //console.log(response);
    
    if (response.success) {
      apiNoti.success({        
        message: `Notification`,
        description: `Xóa video review ${record.title} thành công!`,
      });
      setTimeout(() => {
      onReload();
      }, 1500) 
    } else {
      apiNoti.error({
        message: `Notification`,
        description: `Xóa video review ${record.title} thất bại!`,
      });
    }
  };

  return (
    <>
      {contextHolder}
      <Popconfirm
        title={`Bạn có chắc muốn xóa video có tiêu đề ${record.title}?`}
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}

export default DeleteVideoReview;
