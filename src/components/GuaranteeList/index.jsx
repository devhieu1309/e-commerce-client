import React from 'react';
import { useEffect, useState } from "react";
import { Table, Tag, Button, Popconfirm, Space } from "antd";
import { Link } from "react-router-dom";
import { EditOutlined, DeleteOutlined, EyeOutlined } from "@ant-design/icons";
import GuaranteeToolbar from './GuaranteeToolbar';
import { getProductList } from '../../services/productServices';
import { getGuaranteeList } from '../../services/warrantyServices';
import DeleteGuarantee from './DeleteGuarantee';
function GuaranteeList() {

    // const [guaranteeList, setGuaranteeList] = useState([
    //     {
    //         "id": 1,
    //         "serial_number": "SN601HY",
    //         "warranty_status": "Hết hạn bảo hành",
    //         "warranty_start": "2010-01-26",
    //         "warranty_expiry": "1975-09-18",
    //         "branch": "Wyman, Bergnaum and Boehm",
    //         "description": "Ut neque impedit dignissimos quisquam illo ad voluptatibus.",
    //         "product_id": 1,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 2,
    //         "serial_number": "SN270DT",
    //         "warranty_status": "Còn bảo hành",
    //         "warranty_start": "1994-12-30",
    //         "warranty_expiry": "2014-07-30",
    //         "branch": "Boehm Group",
    //         "description": "Perspiciatis assumenda architecto laudantium laborum.",
    //         "product_id": 5,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 3,
    //         "serial_number": "SN016DM",
    //         "warranty_status": "Còn bảo hành",
    //         "warranty_start": "1984-07-15",
    //         "warranty_expiry": "2001-03-09",
    //         "branch": "Dare, Boyle and Hessel",
    //         "description": "Voluptatum quisquam voluptatem sed vel reprehenderit sunt iste ad.",
    //         "product_id": 2,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 4,
    //         "serial_number": "SN162NU",
    //         "warranty_status": "Còn bảo hành",
    //         "warranty_start": "1980-03-12",
    //         "warranty_expiry": "1973-01-21",
    //         "branch": "Schamberger-Towne",
    //         "description": "Optio accusamus animi libero qui asperiores libero.",
    //         "product_id": 3,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 5,
    //         "serial_number": "SN723DK",
    //         "warranty_status": "Hết hạn bảo hành",
    //         "warranty_start": "2014-10-29",
    //         "warranty_expiry": "2002-04-21",
    //         "branch": "Schmidt-Rowe",
    //         "description": "Optio vitae est reiciendis qui quis ipsum quam.",
    //         "product_id": 3,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 6,
    //         "serial_number": "SN741VI",
    //         "warranty_status": "Hết hạn bảo hành",
    //         "warranty_start": "1973-03-16",
    //         "warranty_expiry": "1983-12-05",
    //         "branch": "Frami, Flatley and Harber",
    //         "description": "Deserunt pariatur optio temporibus deserunt.",
    //         "product_id": 2,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 7,
    //         "serial_number": "SN559DY",
    //         "warranty_status": "Hết hạn bảo hành",
    //         "warranty_start": "1987-06-18",
    //         "warranty_expiry": "2013-02-01",
    //         "branch": "Hammes LLC",
    //         "description": "Rerum doloribus et voluptates exercitationem sunt in delectus.",
    //         "product_id": 5,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 8,
    //         "serial_number": "SN215LV",
    //         "warranty_status": "Hết hạn bảo hành",
    //         "warranty_start": "1971-04-06",
    //         "warranty_expiry": "1977-09-28",
    //         "branch": "Purdy, Schaden and Grant",
    //         "description": "Voluptate voluptatum maxime perspiciatis sint.",
    //         "product_id": 4,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 9,
    //         "serial_number": "SN404OA",
    //         "warranty_status": "Còn bảo hành",
    //         "warranty_start": "2005-12-23",
    //         "warranty_expiry": "1985-12-31",
    //         "branch": "Brown, Zulauf and Lueilwitz",
    //         "description": "Blanditiis ut error animi.",
    //         "product_id": 1,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 10,
    //         "serial_number": "SN904VT",
    //         "warranty_status": "Hết hạn bảo hành",
    //         "warranty_start": "1977-07-28",
    //         "warranty_expiry": "1995-03-18",
    //         "branch": "Reichel Inc",
    //         "description": "Excepturi delectus alias corrupti voluptas quia quo nihil.",
    //         "product_id": 2,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 11,
    //         "serial_number": "SN695NW",
    //         "warranty_status": "Hết hạn bảo hành",
    //         "warranty_start": "2012-04-21",
    //         "warranty_expiry": "2022-09-15",
    //         "branch": "Cremin, Pollich and Green",
    //         "description": "Sed ut quibusdam blanditiis reprehenderit culpa illum doloribus.",
    //         "product_id": 5,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     },
    //     {
    //         "id": 12,
    //         "serial_number": "SN018KB",
    //         "warranty_status": "Còn bảo hành",
    //         "warranty_start": "2005-11-09",
    //         "warranty_expiry": "1970-02-14",
    //         "branch": "Schoen, Ratke and Reynolds",
    //         "description": "Omnis aperiam dignissimos ea et sit aut.",
    //         "product_id": 3,
    //         "created_at": "2025-11-09T04:20:03.000000Z",
    //         "updated_at": "2025-11-09T04:20:03.000000Z"
    //     }
    // ]);

    const [filterGuarantees, setFilterGuarantees] = useState([]);
    const [isFiltering, setIsFiltering] = useState(false);
    const [guaranteeList, setGuaranteeList] = useState([]);
    const [products, setProducts] = useState([]);

    // Tìm kiếm bảo hành theo số serial
    const handleSearchGuarantee = (value) => {
        if (!value) {
            setIsFiltering(false);
            setFilterGuarantees([]);
            return;
        }

        setIsFiltering(true);
        const resultFinal = guaranteeList.filter((item) =>
            item.serial_number.toLowerCase().includes(value.toLowerCase())
        );

        setFilterGuarantees(resultFinal);
    };

    // lọc bảo hành theo sản phẩm
    const handleGetGuaranteeByProduct = (product_id) => {
        if (!product_id) {
            setIsFiltering(false);
            setFilterGuarantees([]);
            return;
        }
        setIsFiltering(true);
        const resultFinal = guaranteeList.filter(
            (item) => item.product_id === product_id
        );
        setFilterGuarantees(resultFinal);
    };

    //Lấy danh sách sản phẩm
    useEffect(() => {
        const fetchApi = async () => {
            const result = await getProductList();
            setProducts(result.data);
        };
        fetchApi();
    }, []);

    const fetchApi = async () => {
        const result = await getGuaranteeList();
        setGuaranteeList(result.warranty);
    };

    //Lấy danh sách bảo hành
    useEffect(() => {
        fetchApi();
    }, []);

    // Load lại trang
    const handleReload = () => {
        fetchApi();
    };

    const columns = [
        {
            title: "ID",
            dataIndex: "id",
            key: "id",
            width: 80,
        },
        {
            title: "Số Serial",
            dataIndex: "serial_number",
            key: "serial_number",
        },
        {
            title: "Mô tả",
            dataIndex: "description",
            key: "description",
            render: (text) => {
                if (!text) return "";
                return text.length > 80 ? text.substring(0, 80) + "..." : text;
            },
        },
        {
            title: "Sản Phẩm",
            dataIndex: "product_id",
            key: "product_id",
            render: (product_id) => {
                // console.log("TEST Catefory: ", categories);
                const product = products.find((c) => c.product_id == product_id);
                return (
                    <span>{product ? product.product_name : "Không có"}</span>
                );
            },
        },
        {
            title: "Chi nhánh",
            dataIndex: "branch",
            key: "branch",
        },
        {
            title: "Tình trạng bảo hành",
            dataIndex: "warranty_status",
            key: "warranty_status",
            render: (warranty_status) =>
                warranty_status === 'Còn bảo hành' ? (
                    <Tag color="green">{warranty_status}</Tag>
                ) : (
                    <Tag color="red">{warranty_status}</Tag>
                ),
        },
        {
            title: "Ngày bắt đầu",
            dataIndex: "warranty_start",
            key: "warranty_start",
            render: (text) => {
                const date = new Date(text);
                return date.toLocaleDateString("vi-VN");
            },
        },
        {
            title: "Ngày kết thúc",
            dataIndex: "warranty_expiry",
            key: "warranty_expiry",
            render: (text) => {
                const date = new Date(text);
                return date.toLocaleDateString("vi-VN");
            },
        },
        {
            title: "Hành động",
            key: "action",
            render: (_, record) => (
                <Space>
                    <Link to={`edit/${record.id}`}>
                        <Button size="small" type="primary" icon={<EditOutlined />} />
                    </Link>
                    {/* <Popconfirm
                        title="Bạn chắc chắn muốn xóa sản phẩm này?"
                        okText="Xóa"
                        cancelText="Hủy"
                    >
                        <Button danger size="small" icon={<DeleteOutlined />}></Button>
                    </Popconfirm> */}
                    <DeleteGuarantee  record ={record} onReload = {handleReload}/>
                    <Link to="1">
                        <Button size="small" icon={<EyeOutlined />} />
                    </Link>
                </Space>
            ),
        },

    ];
    return (
        <div>
            {/* <h2>Danh sách bảo hành sản phẩm</h2> */}
            <GuaranteeToolbar
                products={products}
                handleSearchGuarantee={handleSearchGuarantee}
                handleGetGuaranteeByProduct={handleGetGuaranteeByProduct}
            />
            <Table
                columns={columns}
                dataSource={isFiltering ? filterGuarantees : guaranteeList}
                pagination={{ pageSize: 10 }}
            />
        </div>
    );

};
export default GuaranteeList;