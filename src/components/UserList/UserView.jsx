import { Modal, Descriptions } from "antd";

function UserView({ open, onCancel, user }) {
    if (!user) return null;

    return (
        <Modal
            title={"Xem Thông Tin Khách Hàng".toUpperCase()} 
            open={open}
            onCancel={onCancel}
            footer={null}
            centered
        >
            <Descriptions bordered column={1}>
                <Descriptions.Item label="ID">{user.user_id}</Descriptions.Item>
                <Descriptions.Item label="Họ và tên">{user.name}</Descriptions.Item>
                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
                <Descriptions.Item label="Số điện thoại">{user.phone}</Descriptions.Item>
                <Descriptions.Item label="Phân quyền">{user.role}</Descriptions.Item>
                <Descriptions.Item label="Ngày tạo tài khoản">{user.created_at}</Descriptions.Item>
                <Descriptions.Item label="Địa chỉ">{"123 Nguyễn Trãi, Hà Nội"}</Descriptions.Item>
                <Descriptions.Item label="Trạng thái tài khoản">{user.status || "Đang hoạt động"}</Descriptions.Item>
                <Descriptions.Item label="Số lượng đánh giá bài viết">{user.reviewCount || 12}</Descriptions.Item>
            </Descriptions>
        </Modal>
    );
}

export default UserView;