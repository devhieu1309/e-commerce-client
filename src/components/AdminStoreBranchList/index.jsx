import { Button, Popconfirm, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { getStoreBranchList } from "../../services/storeBranchServices"; // import service API
import Search from "antd/es/input/Search";

function AdminStoreBranchList() {
    const [storeBranches, setBranches] = useState([]);
    const [filterBranches, setFilterBranches] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);

    // Lấy danh sách chi nhánh từ API
    useEffect(() => {
        const fetchApi = async () => {
            try {
                const result = await getStoreBranchList();
                // console.log("Kết quả getProvinces:", result);
                setBranches(result.storeBranches);
            } catch (error) {
                console.error("Lỗi khi tải danh sách chi nhánh:", error);
            }
        };
        fetchApi();
    }, []);

    // Tìm kiếm chi nhánh theo tên
    const handleSearch = (value) => {
        if (!value) {
            setIsFiltering(false);
            setFilterBranches([]);
            return;
        }

        const filtered = branches.filter((branch) =>
            branch.name.toLowerCase().includes(value.toLowerCase())
        );
        setIsFiltering(true);
        setFilterBranches(filtered);
    };

    // Format số điện thoại
    const formatPhone = (phone) => {
        return phone?.replace(/(\d{4})(\d{3})(\d{3})/, "$1.$2.$3");
    };

    // Cột trong bảng
    const columns = [
        {
            title: "ID",
            dataIndex: "store_branch_id",
            key: "store_branch_id",
            width: 80,
        },
        {
            title: "Tên chi nhánh",
            dataIndex: "name",
            key: "name",
        },
        {
            title: "Số điện thoại",
            dataIndex: "phone_number",
            key: "phone_number",
            //   render: (phone) => <Tag color="blue">{formatPhone(phone)}</Tag>,
        },
        {
            title: "Email",
            dataIndex: "email",
            key: "email",
        },
        {
            title: "Giờ mở cửa",
            dataIndex: "opening_hours",
            key: "opening_hours",
            render: (text) => <Tag color="purple">{text}</Tag>,
        },
        {
            title: "Địa chỉ",
            key: "address",
            render: (_, record) => {

                const addr = record.address;
                if (!addr) return "Không có địa chỉ";

                const detailed = addr.detailed_address || "";
                const ward = addr.ward || "";
                const province = addr.province || "";

                return (
                    <span>
                        {detailed}
                        {ward ? `, ${ward}` : ""}
                        {province ? `, ${province}` : ""}
                    </span>
                );
                // const addr = record.address;
                // if (!addr)
                //   return <Tag color="gray">Không có địa chỉ</Tag>;

                // const ward = addr.ward?.name || "";
                // const province = addr.province?.name || "";
                // return (
                //   <span>
                //     {addr.detailed_address}, {ward}, {province}
                //   </span>
                // );
            },
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Link to={`edit/${record.store_branch_id}`}>
                        <Button size="small" type="primary" icon={<EditOutlined />} />
                    </Link>
                    <Popconfirm
                        title="Bạn chắc chắn muốn xóa chi nhánh này?"
                        okText="Xóa"
                        cancelText="Hủy"
                    >
                        <Button danger size="small" icon={<DeleteOutlined />}></Button>
                    </Popconfirm>
                    <Link to={`${record.store_branch_id}`}>
                        <Button size="small" icon={<EyeOutlined />} />
                    </Link>
                </Space>
            ),
        },
    ];

    return (
        <>
            {/* Thanh công cụ tìm kiếm */}
            <div style={{ marginBottom: 16, display: "flex", justifyContent: "space-between" }}>
                <Search
                    placeholder="Tìm kiếm chi nhánh..."
                    onSearch={handleSearch}
                    allowClear
                    style={{ width: 300 }}
                />
                <Link to="create">
                    <Button type="primary">+ Thêm chi nhánh</Button>
                </Link>
            </div>

            {/* Bảng hiển thị chi nhánh */}
            <Table
                columns={columns}
                dataSource={isFiltering ? filterBranches : storeBranches}
                rowKey="store_branch_id"
                pagination={{ pageSize: 5 }}
            />
        </>
    );
}

export default AdminStoreBranchList;
