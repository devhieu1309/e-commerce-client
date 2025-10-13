import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";

import NewsListModal from "./NewsBlocksModal";
import NewsBlockToolbar from "./NewsBlocksToolbar";
import DeleteNewsBlocks from "./DeleteNewsBlocks";

function AdminNewsBlocks() {
  const [newsblocks] = useState([
    {
      id: 1,
      title: "1. iPhone 15 màu hồng có mấy phiên bản?",
      content: "Nội dung [......].",
      image: "image1.jpg",
      position: 1,
      news_id: 1,
    },
    {
      id: 2,
      title: "1. iPhone 15 màu hồng có mấy phiên bản?",
      content: "Nội dung [......].",
      image: "image1.jpg",
      position: 2,
      news_id: 1,
    },
    {
      id: 3,
      title: "1. iPhone 15 màu hồng có mấy phiên bản?",
      image: "image1.jpg",
      content: "Nội dung [......].",
      position: 3,
      news_id: 1,
    },
    {
      id: 4,
      title: "1. iPhone 15 màu hồng có mấy phiên bản?",
      content: "Nội dung [......].",
      image: "image1.jpg",

      position: 4,
      news_id: 1,
    },
    {
      id: 5,
      title: "1. iPhone 15 màu hồng có mấy phiên bản?",
      content: "Nội dung [......].",
      image: "image1.jpg",
      position: 5,
      news_id: 1,
    },
    {
      id: 6,
      title: "1. iPhone 15 màu hồng có mấy phiên bản?",
      content: "Nội dung [......].",
      image: "image1.jpg",
      position: 1,
      news_id: 2,
    },
    {
      id: 7,
      title: "1. iPhone 15 màu hồng có mấy phiên bản?",
      content: "Nội dung [......].",
      image: "image1.jpg",
      position: 1,
      news_id: 2,
    },
    {
      id: 8,
      title: "1. iPhone 15 màu hồng có mấy phiên bản?",
      content: "Nội dung [......].",
      image: "image1.jpg",
      position: 2,
      news_id: 2,
    },
  ]);

  const getParentName = (parentId) => {
    const parent = newsblocks.find((c) => c.id === parentId);
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
      title: "Nội dung",
      dataIndex: "content",
      key: "content",
    },
    {
      title: "Hình ảnh ",
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img
          src={`/public/tt8.webp`}
          alt="News "
          style={{ width: 80, height: 80, objectFit: "cover " }}
        />
      ),
    },
    {
      title: "Vị trí hiển thị",
      dataIndex: "position",
      key: "position",
      width: 120,
    },
    {
      title: "Mã tin tức",
      dataIndex: "news_id",
      key: "news_id",
      // render: (news_id) => getParentName(news_id),
    },

    // {
    //   title: "Ngày tạo",
    //   dataIndex: "created_at",
    //   key: "created_at",
    // },
    // {
    //   title: "Ngày cập nhật",
    //   dataIndex: "updated_at",
    //   key: "updated_at",
    // },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          {/* <EditCategory record={record} onReload={onReload} /> */}
          <NewsListModal mode="edit" record={record} />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa bài viết này không?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteNewsBlocks record={record} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <NewsBlockToolbar />
      <Table
        columns={columns}
        dataSource={newsblocks}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}

export default AdminNewsBlocks;
