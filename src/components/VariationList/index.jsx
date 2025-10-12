import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useState } from "react";
import DeleteVariation from "./DeleteVariation";
import ViriationToolbar from "./VariationToolbar";
import VariationModal from "./VariationModal";
// import CategoryToolbar from "./CategoryToolbar";
// import CategoryModal from "./CategoryModal";
// import DeleteCategory from "./DeleteCategory";

function VariationList() {
  const [variations, setVariations] = useState([
  {
    id: 1,
    name: "Màu sắc",
    category_id: 1,
    category_name: "Điện thoại",
    created_at: "2025-09-05 09:00:00",
    updated_at: "2025-09-15 14:30:00",
  },
  {
    id: 2,
    name: "Dung lượng",
    category_id: 1,
    category_name: "Điện thoại",
    created_at: "2025-09-06 10:15:00",
    updated_at: "2025-09-16 11:00:00",
  },
  {
    id: 3,
    name: "Kích thước màn hình",
    category_id: 2,
    category_name: "Laptop",
    created_at: "2025-09-07 13:45:00",
    updated_at: "2025-09-17 09:30:00",
  },
  {
    id: 4,
    name: "Màu sắc",
    category_id: 3,
    category_name: "iPad",
    created_at: "2025-09-08 08:20:00",
    updated_at: "2025-09-18 16:45:00",
  },
  {
    id: 5,
    name: "Bộ nhớ trong",
    category_id: 3,
    category_name: "iPad",
    created_at: "2025-09-09 15:10:00",
    updated_at: "2025-09-19 10:05:00",
  },
  {
    id: 6,
    name: "Trọng lượng",
    category_id: 2,
    category_name: "Laptop",
    created_at: "2025-09-10 08:50:00",
    updated_at: "2025-09-20 09:00:00",
  },
  {
    id: 7,
    name: "Màu vỏ",
    category_id: 4,
    category_name: "Tai nghe",
    created_at: "2025-09-11 09:15:00",
    updated_at: "2025-09-21 11:45:00",
  },
  {
    id: 8,
    name: "Kết nối",
    category_id: 4,
    category_name: "Tai nghe",
    created_at: "2025-09-12 10:40:00",
    updated_at: "2025-09-22 12:00:00",
  },
  {
    id: 9,
    name: "Công suất",
    category_id: 5,
    category_name: "Loa",
    created_at: "2025-09-13 14:20:00",
    updated_at: "2025-09-23 15:10:00",
  },
  {
    id: 10,
    name: "Kích thước",
    category_id: 5,
    category_name: "Loa",
    created_at: "2025-09-14 08:30:00",
    updated_at: "2025-09-24 09:45:00",
  },
  {
    id: 11,
    name: "Dung lượng pin",
    category_id: 1,
    category_name: "Điện thoại",
    created_at: "2025-09-15 11:00:00",
    updated_at: "2025-09-25 16:20:00",
  },
  {
    id: 12,
    name: "Chất liệu vỏ",
    category_id: 2,
    category_name: "Laptop",
    created_at: "2025-09-16 09:35:00",
    updated_at: "2025-09-26 10:30:00",
  },
  {
    id: 13,
    name: "Độ phân giải",
    category_id: 3,
    category_name: "iPad",
    created_at: "2025-09-17 12:00:00",
    updated_at: "2025-09-27 14:50:00",
  },
  {
    id: 14,
    name: "Cổng kết nối",
    category_id: 2,
    category_name: "Laptop",
    created_at: "2025-09-18 08:45:00",
    updated_at: "2025-09-28 11:25:00",
  },
  {
    id: 15,
    name: "Loại bàn phím",
    category_id: 2,
    category_name: "Laptop",
    created_at: "2025-09-19 10:15:00",
    updated_at: "2025-09-29 13:40:00",
  },
  {
    id: 16,
    name: "Độ nhạy cảm biến",
    category_id: 6,
    category_name: "Chuột máy tính",
    created_at: "2025-09-20 09:30:00",
    updated_at: "2025-09-30 10:10:00",
  },
  {
    id: 17,
    name: "Kiểu dáng",
    category_id: 7,
    category_name: "Bàn phím cơ",
    created_at: "2025-09-21 14:50:00",
    updated_at: "2025-10-01 09:40:00",
  },
  {
    id: 18,
    name: "Màu đèn nền",
    category_id: 7,
    category_name: "Bàn phím cơ",
    created_at: "2025-09-22 11:15:00",
    updated_at: "2025-10-02 12:20:00",
  },
  {
    id: 19,
    name: "Tốc độ làm mới",
    category_id: 8,
    category_name: "Màn hình",
    created_at: "2025-09-23 10:00:00",
    updated_at: "2025-10-03 13:00:00",
  },
  {
    id: 20,
    name: "Độ sáng tối đa",
    category_id: 8,
    category_name: "Màn hình",
    created_at: "2025-09-24 09:50:00",
    updated_at: "2025-10-04 15:30:00",
  },
]);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Danh mục",
      dataIndex: "category_name",
      key: "category_name",
    },
    {
      title: "Tên biến thể",
      dataIndex: "name",
      key: "name",
      // render: (parent_category_id) => getParentName(parent_category_id),
    },
    {
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updated_at",
      key: "updated_at",
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          <VariationModal mode="edit" record={record} />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa danh mục này?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteVariation record={record} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ViriationToolbar />
      <Table
        columns={columns}
        dataSource={variations}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}

export default VariationList;
