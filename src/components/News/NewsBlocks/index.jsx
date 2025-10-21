import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";

import DeleteNewsBlocks from "./DeleteNewsBlocks";
import NewsBlocksToolbar from "./NewsBlocksToolbar";
import NewsBlocksModal from "./NewsBlocksModal";
import { getNewsBlocks } from "../../../services/newsBlocksServices";

function AdminNewsBlocks() {
  const [news, setNews] = useState([]);

  const fetchApi = async () => {
    const result = await getNewsBlocks();
    setNews(result);
  };

  // Lấy danh sách bài viết
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
      render: (text) => {
        if (!text) return "";
        return text.length > 30 ? text.substring(0, 30) + "..." : text;
      },
    },
    {
      title: "Nội dung bài viết",
      dataIndex: "content",
      key: "content",
      render: (text) => {
        if (!text) return "";
        return text.length > 50 ? text.substring(0, 50) + "..." : text;
      },
    },
    {
      title: "Ảnh",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img
          src={`http://127.0.0.1:8000/storage/${text}`}
          alt={text}
          style={{ width: 170, height: 60, objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Thứ tự hiển thị bài viết",
      dataIndex: "position",
      key: "position",
    },
    {
      title: "Thuộc tin tức",
      dataIndex: "news_id",
      key: "news_id",
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
          <NewsBlocksModal
            mode="edit"
            record={record}
            onReload={handleReload}
          />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa bài viết này không?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteNewsBlocks record={record} onReload={handleReload} />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <NewsBlocksToolbar
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

export default AdminNewsBlocks;
