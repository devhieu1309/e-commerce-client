import { Button, Popconfirm, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import UserToolbar from "./UserToolbar";
import UserDelete from "./UserDelete";
import UserModal from "./UserModal";
import UserView from "./UserView";
import { getUserList, searchUser } from "../../services/userServices";

function UserList() {
    const [userList, setUserList] = useState([]);

    const fetchApi = async () => {
        const result = await getUserList();
        setUserList(result.reverse());
    };

    // Lấy danh sách danh mục
    useEffect(() => {
        fetchApi();
    }, []);

    // Load lại trang
    const handleReload = () => {
        fetchApi();
    };

    // Tìm Kiếm User
    const handleSearch = async (keyword) => {
        // Nếu ô tìm kiếm rỗng load lại toàn bộ danh sách
        if (!keyword || keyword.trim() === "") {
            await fetchApi();
            return;
        }
        try {
            const res = await searchUser(keyword.trim());
            console.log("Toàn bộ dữ liệu API trả về:", res);

            // Dữ liệu API trả về là mảng ngay trong res.data
            const data = res?.data ?? [];

            console.log("Dữ liệu sau khi gán vào biến data:", data);

            if (Array.isArray(data) && data.length > 0) {
                console.log("Có dữ liệu, cập nhật danh sách!");
                setUserList(data);
            } else {
                console.log("Không có dữ liệu hoặc không đúng định dạng mảng!");
                setUserList([]);
            }
        } catch (err) {
            console.error("Lỗi khi gọi API:", err);
            setUserList([]);
        }
    };


    const [selectedUser, setSelectedUser] = useState(null);
    const [isViewOpen, setIsViewOpen] = useState(false);

    const handleView = (record) => {
        setSelectedUser(record);
        setIsViewOpen(true);
    };

    const handleCloseView = () => {
        setIsViewOpen(false);
        setSelectedUser(null);
    };

    const columns = [
        {
            title: "STT",
            key: "index",
            width: 80,
            render: (text, record, index) => index + 1,
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
            dataIndex: "created_at",
            key: "created_at",
            render: (text) => {
                const date = new Date(text);
                return date.toLocaleDateString("vi-VN");
            },
        },
        {
            title: "Ngày Cập Nhật",
            dataIndex: "updated_at",
            key: "updated_at",
            render: (text) => {
                const date = new Date(text);
                return date.toLocaleDateString("vi-VN");
            },
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
                    <UserModal mode="edit" record={record} onReload={handleReload} />

                    {/* Nút xóa */}
                    <UserDelete record={record} onReload={handleReload} />

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
            <UserToolbar onSearch={handleSearch} onReload={handleReload} />
            <Table
                columns={columns}
                dataSource={Array.isArray(userList) ? userList : []}
                pagination={{ pageSize: 10 }}
                rowKey={(record) => record.user_id ?? record.id ?? record.email}
                locale={{
                    emptyText: (
                        <div style={{ textAlign: "center", padding: "40px 0", color: "#999" }}>
                            Không tìm thấy kết quả...
                        </div>
                    ),
                }}
            />
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
