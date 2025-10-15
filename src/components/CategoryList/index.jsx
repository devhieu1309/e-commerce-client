import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";
import CategoryToolbar from "./CategoryToolbar";
import CategoryModal from "./CategoryModal";
import DeleteCategory from "./DeleteCategory";
import { getCategoryList } from "../../services/categoryServices";

function CategoryList() {
  const [categories, setCategories] = useState([]);

  const fetchApi = async () => {
    const result = await getCategoryList();
    
    setCategories(result.categories.reverse());
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
