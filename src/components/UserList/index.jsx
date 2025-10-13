import { Button, Popconfirm, Space, Table, Tag } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import UserToolbar from "./UserToolbar";
import UserModal from "./UserModal";
import UserDelete from "./UserDelete";
import UserView from "./UserView";

function UserList() {
    const [userList, setUserList] = useState([
        {
            id: "1",
            name: "Nguyen Van An",
            email: "an.nguyen@gmail.com",
            phone: "0987123456",
            createdAt: "12-05-2025",
            updatedAt: "15-05-2025",
            role: "Người Dùng",
        },
        {
            id: "2",
            name: "Tran Thi Bao",
            email: "bao.tran@yahoo.com",
            phone: "0976123456",
            createdAt: "13-05-2025",
            updatedAt: "16-05-2025",
            role: "Người Dùng",
        },
        {
            id: "3",
            name: "Le Minh Tuan",
            email: "tuan.le@hotmail.com",
            phone: "0908123123",
            createdAt: "14-05-2025",
            updatedAt: "17-05-2025",
            role: "Người Dùng",
        },
        {
            id: "4",
            name: "Pham Hoang Nam",
            email: "nam.pham@gmail.com",
            phone: "0934567890",
            createdAt: "15-05-2025",
            updatedAt: "18-05-2025",
            role: "Người Dùng",
        },
        {
            id: "5",
            name: "Do Thi Lan",
            email: "lan.do@outlook.com",
            phone: "0912345678",
            createdAt: "16-05-2025",
            updatedAt: "19-05-2025",
            role: "Người Dùng",
        },
        {
            id: "6",
            name: "Bui Duc Huy",
            email: "huy.bui@gmail.com",
            phone: "0963123123",
            createdAt: "17-05-2025",
            updatedAt: "20-05-2025",
            role: "Người Dùng",
        },
        {
            id: "7",
            name: "Hoang Gia Bao",
            email: "giabao.hoang@yahoo.com",
            phone: "0987456321",
            createdAt: "18-05-2025",
            updatedAt: "21-05-2025",
            role: "Người Dùng",
        },
        {
            id: "8",
            name: "Nguyen Kim Anh",
            email: "kimanh.nguyen@gmail.com",
            phone: "0945678123",
            createdAt: "19-05-2025",
            updatedAt: "22-05-2025",
            role: "Người Dùng",
        },
        {
            id: "9",
            name: "Tran Quoc Viet",
            email: "viet.tran@outlook.com",
            phone: "0923456789",
            createdAt: "20-05-2025",
            updatedAt: "23-05-2025",
            role: "Người Dùng",
        },
        {
            id: "10",
            name: "Phan Thi Huong",
            email: "huong.phan@gmail.com",
            phone: "0978456123",
            createdAt: "21-05-2025",
            updatedAt: "24-05-2025",
            role: "Người Dùng",
        },
        {
            id: "11",
            name: "Le Hoai Nam",
            email: "hoainam.le@yahoo.com",
            phone: "0932123456",
            createdAt: "22-05-2025",
            updatedAt: "25-05-2025",
            role: "Người Dùng",
        },
        {
            id: "12",
            name: "Nguyen Thanh Dat",
            email: "dat.nguyen@gmail.com",
            phone: "0912678345",
            createdAt: "23-05-2025",
            updatedAt: "26-05-2025",
            role: "Người Dùng",
        },
    ]);


    // ✅ State để điều khiển hiển thị UserView
    const [selectedUser, setSelectedUser] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);

    // ✅ Khi click vào nút con mắt
    const handleView = (record) => {
        setSelectedUser(record);
        setIsViewOpen(true);
    };

    // ✅ Khi đóng form xem chi tiết
    const handleCloseView = () => {
        setIsViewOpen(false);
        setSelectedUser(null);
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 100,
        },
        {
            title: "Họ và Tên",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Số Điện Thoại",
            dataIndex: "phone",
            key: "phone",
        },
        {
            title: "Ngày Được Tạo",
            dataIndex: "createdAt",
            key: "createdAt",
        },
        {
            title: "Ngày Cập Nhật",
            dataIndex: "updatedAt",
            key: "updatedAt",
        },
        {
            title: "Phân Quyền",
            dataIndex: "role",
            key: "role",
        },
        {
            title: "Hành động",
            key: "actions",
            align: "center",
            width: 120,
            render: (_, record) => (
                <Space>
                    {/* Nút sửa -> mở modal edit */}
                    <UserModal mode="edit" record={record} onReload={() => console.log("reload")} />

                    {/* Nút xóa */}
                    <UserDelete record={record} />

                    {/* Nút xem chi tiết */}
                    <Button
                        size="small"
                        type="default"
                        icon={<EyeOutlined />}
                        onClick={() => handleView(record)}
                    />

                </Space>
            ),
        }

    ];


    return (
        <>
            <UserToolbar />
            <Table
                columns={columns}
                dataSource={userList}
                pagination={{ pageSize: 10 }}
            />
            {/* ✅ Modal xem chi tiết người dùng */}
            {selectedUser && (
                <UserView
                    open={isViewOpen}
                    onCancel={handleCloseView}
                    user={selectedUser}
                />
            )}
        </>
    );
}

export default UserList;
