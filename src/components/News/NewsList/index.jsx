import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";

import DeleteNewsList from "./DeleteNewsList";
import { getNews } from "../../../services/newsServices";
import NewsListToolbar from "./NewsListToolbar";
import NewsListModal from "./NewsListModal";

function AdminNewsList() {
  const [news, setNews] = useState([]);

  const fetchApi = async () => {
    const result = await getNews();
    setNews(result);
  };

  // Lấy danh sách tin tức
  useEffect(() => {
    fetchApi();
  }, []);

  // Load lại trang
  const handleReload = () => {
    fetchApi();
  };

  const handleSearchResut = (result) => {
    setNews(result);
  };

  const columns = [
    {
      title: "STT",
      key: "id",
      width: 80,
      render: (text, record, index) => index + 1,
    },
    {
      title: "Tiêu đề",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Ảnh",
      dataIndex: "cover_image",
      key: "cover_image",
      render: (text) => (
        <img
          src={`http://127.0.0.1:8000/storage/${text}`}
          alt={text}
          style={{ width: 150, height: 55, objectFit: "cover" }}
        />
      ),
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
          <NewsListModal mode="edit" record={record} onReload={handleReload} />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa tin tức này không?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteNewsList record={record} onReload={handleReload} />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <NewsListToolbar
        onReload={handleReload}
        onSearchResult={handleSearchResut}
      />
      <Table
        columns={columns}
        dataSource={news}
        rowKey={(record) => record.id}
        pagination={{ pageSize: 7 }}
      />
    </>
  );
}

export default AdminNewsList;
