import { Button, notification, Popconfirm } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { deleteGuarantee } from "../../services/warrantyServices";
// import { useNavigate } from "react-router-dom";

function DeleteGuarantee(props) {
    // const navigate = useNavigate();
    const { record, onReload } = props;
    const [apiNoti, contextHolder] = notification.useNotification();

    const handleDelete = async () => {
        const response = await deleteGuarantee(record.id);
        if (response.success) {
            apiNoti.success({
                message: `Notification`,
                description: `Xóa bảo hành ${record.serial_number} thành công!`
            });
            setTimeout(() => {
                onReload();
            }, 500);
        } else {
            apiNoti.error({
                message: `Notification`,
                description: `Xóa bảo hành ${record.serial_number} thất bại!`
            });
        }
    }

    return (
        <>
            {contextHolder}
            <Popconfirm
                title={`Bạn chắc chắn muốn xóa ${record.serial_number}?`}
                onConfirm={handleDelete}
            >
                <Button danger size="small" icon={<DeleteOutlined />}></Button>
            </Popconfirm>
        </>
    )
}
export default DeleteGuarantee;