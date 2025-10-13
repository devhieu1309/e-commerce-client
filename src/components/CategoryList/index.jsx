import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import CategoryToolbar from "./CategoryToolbar";
import CategoryModal from "./CategoryModal";
import DeleteCategory from "./DeleteCategory";
import { getCategoryList } from "../../services/categoryServices";

function CategoryList() {
  // const [categories, setCategories] = useState([
  //   {
  //     id: 1,
  //     category_name: "Điện thoại",
  //     parent_category_id: null,
  //     created_at: "2025-09-01 12:00:00",
  //     updated_at: "2025-09-10 08:00:00",
  //   },
  //   {
  //     id: 2,
  //     category_name: "iPhone",
  //     parent_category_id: 1,
  //     created_at: "2025-09-02 09:30:00",
  //     updated_at: "2025-09-11 09:00:00",
  //   },
  //   {
  //     id: 3,
  //     category_name: "Samsung",
  //     parent_category_id: 1,
  //     created_at: "2025-09-05 15:00:00",
  //     updated_at: "2025-09-11 09:30:00",
  //   },
  //   {
  //     id: 4,
  //     category_name: "Laptop",
  //     parent_category_id: null,
  //     created_at: "2025-09-03 10:00:00",
  //     updated_at: "2025-09-12 08:00:00",
  //   },
  //   {
  //     id: 5,
  //     category_name: "MacBook",
  //     parent_category_id: 4,
  //     created_at: "2025-09-04 11:00:00",
  //     updated_at: "2025-09-13 08:30:00",
  //   },
  //   {
  //     id: 6,
  //     category_name: "Dell",
  //     parent_category_id: 4,
  //     created_at: "2025-09-04 12:00:00",
  //     updated_at: "2025-09-13 09:00:00",
  //   },
  //   {
  //     id: 7,
  //     category_name: "HP",
  //     parent_category_id: 4,
  //     created_at: "2025-09-04 13:00:00",
  //     updated_at: "2025-09-13 09:30:00",
  //   },
  //   {
  //     id: 8,
  //     category_name: "Máy tính bảng",
  //     parent_category_id: null,
  //     created_at: "2025-09-05 14:00:00",
  //     updated_at: "2025-09-14 08:00:00",
  //   },
  //   {
  //     id: 9,
  //     category_name: "iPad",
  //     parent_category_id: 8,
  //     created_at: "2025-09-06 10:00:00",
  //     updated_at: "2025-09-14 08:30:00",
  //   },
  //   {
  //     id: 10,
  //     category_name: "Samsung Galaxy Tab",
  //     parent_category_id: 8,
  //     created_at: "2025-09-06 11:00:00",
  //     updated_at: "2025-09-14 09:00:00",
  //   },
  //   {
  //     id: 11,
  //     category_name: "Phụ kiện",
  //     parent_category_id: null,
  //     created_at: "2025-09-07 09:00:00",
  //     updated_at: "2025-09-15 08:00:00",
  //   },
  //   {
  //     id: 12,
  //     category_name: "Ốp lưng",
  //     parent_category_id: 11,
  //     created_at: "2025-09-07 10:00:00",
  //     updated_at: "2025-09-15 08:30:00",
  //   },
  //   {
  //     id: 13,
  //     category_name: "Sạc dự phòng",
  //     parent_category_id: 11,
  //     created_at: "2025-09-07 11:00:00",
  //     updated_at: "2025-09-15 09:00:00",
  //   },
  //   {
  //     id: 14,
  //     category_name: "Tai nghe",
  //     parent_category_id: 11,
  //     created_at: "2025-09-07 12:00:00",
  //     updated_at: "2025-09-15 09:30:00",
  //   },
  //   {
  //     id: 15,
  //     category_name: "Đồng hồ thông minh",
  //     parent_category_id: null,
  //     created_at: "2025-09-08 10:00:00",
  //     updated_at: "2025-09-16 08:00:00",
  //   },
  //   {
  //     id: 16,
  //     category_name: "Apple Watch",
  //     parent_category_id: 15,
  //     created_at: "2025-09-08 11:00:00",
  //     updated_at: "2025-09-16 08:30:00",
  //   },
  //   {
  //     id: 17,
  //     category_name: "Samsung Watch",
  //     parent_category_id: 15,
  //     created_at: "2025-09-08 12:00:00",
  //     updated_at: "2025-09-16 09:00:00",
  //   },
  //   {
  //     id: 18,
  //     category_name: "Thời trang",
  //     parent_category_id: null,
  //     created_at: "2025-09-09 10:00:00",
  //     updated_at: "2025-09-17 08:00:00",
  //   },
  //   {
  //     id: 19,
  //     category_name: "Áo thun",
  //     parent_category_id: 18,
  //     created_at: "2025-09-09 11:00:00",
  //     updated_at: "2025-09-17 08:30:00",
  //   },
  //   {
  //     id: 20,
  //     category_name: "Quần jean",
  //     parent_category_id: 18,
  //     created_at: "2025-09-09 12:00:00",
  //     updated_at: "2025-09-17 09:00:00",
  //   },
  // ]);

  const [categories, setCategories] = useState([]);

  const fetchApi = async () => {
    const result = await getCategoryList();
    setCategories(result);
  };

  // Lấy danh sách danh mục
  useEffect(() => {
    fetchApi();
  }, []);

  // Load lại trang
  const handleReload = () => {
    fetchApi();
  };

  const columns = [
    {
      title: "STT",
      key: "index",
      width: 80,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Tên danh mục",
      dataIndex: "category_name",
      key: "category_name",
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
      title: "Ngày tạo",
      dataIndex: "created_at",
      key: "created_at",
      render: (text) => {
        const date = new Date(text);
        return date.toLocaleDateString("vi-VN");
      },
    },
    {
      title: "Ngày cập nhật",
      dataIndex: "updated_at",
      key: "updated_at",
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
          {/* <EditCategory record={record} onReload={onReload} /> */}
          <CategoryModal mode="edit" record={record} onReload={handleReload}/>
          <Popconfirm
            title="Bạn chắc chắn muốn xóa danh mục này?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteCategory record={record} onReload={handleReload}/>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <CategoryToolbar onReload={handleReload}/>
      <Table
        columns={columns}
        dataSource={categories}
        pagination={{ pageSize: 10 }}
        rowKey="category_id"
      />
    </>
  );
}

export default CategoryList;
