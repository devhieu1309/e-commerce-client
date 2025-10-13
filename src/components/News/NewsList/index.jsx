import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";

import NewsListToolbar from "./NewsListToolbar";
import NewsListModal from "./NewsListModal";
import DeleteNewsList from "./DeleteNewsList";

function AdminNewsList() {
  const [newslist] = useState([
    {
      id: 1,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 2,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 3,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 4,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 5,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 6,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 7,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 8,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 9,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 10,
      title: "Điện thoại Iphone 16 sắp ra mắt",
      cover_image: "image1.jpg",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
  ]);

  const getParentName = (parentId) => {
    const parent = newslist.find((c) => c.id === parentId);
    return parent ? parent.title : "Không có";
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },

    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Hình ảnh đại diện",
      dataIndex: "cover_image",
      key: "cover_image",
      render: (text) => (
        <img
          src={`/public/tt8.webp`}
          alt="News "
          style={{ width: 80, height: 80, objectFit: "cover " }}
        />
      ),
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
          {/* <EditCategory record={record} onReload={onReload} /> */}
          <NewsListModal mode="edit" record={record} />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa tin tức này không?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteNewsList record={record} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <NewsListToolbar />
      <Table
        columns={columns}
        dataSource={newslist}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}

export default AdminNewsList;
