import { Modal, Descriptions, Tag } from "antd";

function UserView({ open, onCancel, user }) {
    if (!user) return null;

    // Hàm format ngày: 19/11/2025
    const formatDate = (dateString) => {
        if (!dateString) return "Không có dữ liệu";
        const date = new Date(dateString);
        return date.toLocaleDateString("vi-VN");
    };

    // Trạng thái tài khoản màu sắc
    const renderStatus = () => {
        const isActive = user.is_active;

        return isActive ? (
            <Tag color="#52c41a">Đang hoạt động</Tag>
        ) : (
            <Tag color="#ff4d4f">Tài khoản đã bị khóa</Tag>
        );
    };


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

                <Descriptions.Item label="Họ và tên">
                    {user.name}
                </Descriptions.Item>

                <Descriptions.Item label="Email">{user.email}</Descriptions.Item>

                <Descriptions.Item label="Số điện thoại">
                    {user.phone}
                </Descriptions.Item>

                <Descriptions.Item label="Phân quyền">{user.role}</Descriptions.Item>

                {/* Ngày tạo tài khoản */}
                <Descriptions.Item label="Ngày tạo tài khoản">
                    {formatDate(user.created_at)}
                </Descriptions.Item>

                {/* Ngày cập nhật tài khoản (mới thêm) */}
                <Descriptions.Item label="Ngày cập nhật tài khoản">
                    {formatDate(user.updated_at)}
                </Descriptions.Item>

                {/* Hiện tại bạn chưa lấy địa chỉ từ API nên giữ tạm */}
                <Descriptions.Item label="Địa chỉ">
                    {user?.defaultAddress ? (
                        [
                            user.defaultAddress.detailed_address,
                            user.defaultAddress.ward_name,
                            user.defaultAddress.district_name,
                            user.defaultAddress.province_name,
                            user.defaultAddress.country_name,
                        ]
                            .filter(Boolean)
                            .join(", ")
                    ) : (
                        "Chưa có địa chỉ"
                    )}
                </Descriptions.Item>



                {/* Trạng thái tài khoản (có màu) */}
                <Descriptions.Item label="Trạng thái tài khoản">
                    {renderStatus()}
                </Descriptions.Item>

            </Descriptions>
        </Modal>
    );
}

export default UserView;
