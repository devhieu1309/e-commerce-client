import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { deleteStoreBranch } from "../../services/storeBranchServices";

function DeleteStoreBranch(props) {
    const navigate = useNavigate();
    const { record, onReload } = props;
    const [apiNoti, contextHolder] = notification.useNotification();

    const handleDelete = async () => {
    const response = await deleteStoreBranch(record.store_branch_id);

    if (response.success) {
      apiNoti.success({
        message: `Notification`,
        description: `Xóa chi nhánh ${record.name} thành công!`,
      });
      setTimeout(() => {
        onReload();
      }, 500);
    } else {
      apiNoti.error({
        message: `Notification`,
        description: `Xóa chi nhánh ${record.name} thất bại!`,
      });
    }
  };
  return (
    <>
      {contextHolder}
      <Popconfirm
        title={`Bạn có chắc muốn xóa ${record.name}?`}
        onConfirm={handleDelete}
      >
        <Button danger size="small" icon={<DeleteOutlined />}></Button>
      </Popconfirm>
    </>
  );
}
export default DeleteStoreBranch;