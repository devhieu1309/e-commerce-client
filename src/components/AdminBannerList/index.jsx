import { Button, Popconfirm, Space, Table, Tooltip } from "antd";
import { useEffect, useState } from "react";

import DeleteBannerList from "./DeleteBannerList";
import { getBanner } from "../../services/bannerServices";
import BannerListToolbar from "./BannerListTooblar";
import BannerListModal from "./BannerListModal";

function AdminBannerList() {
  const [banner, setBanner] = useState([]);

  const fetchApi = async () => {
    const result = await getBanner();
    setBanner(result);
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
      dataIndex: "image",
      key: "image",
      render: (text) => (
        <img src={`/public/banner/${text}`} alt={text} style={{ width: 100 }} />
      ),
    },
    {
      title: "Link URL",
      dataIndex: "link_url",
      key: "link_url",
      render: (text) => (
        <a href={text} target="_blank" rel="noopener noreferrer">
          {text}
        </a>
      ),
    },
    {
      title: "Vị trí",
      dataIndex: "position",
      key: "position",
      render: (text) => (text === "home" ? "Trang chủ" : "Sản phẩm"),
    },
    {
      title: "Trạng thái",
      dataIndex: "is_active",
      key: "is_active",
      render: (text) => (text === 1 ? "Hiển thị" : "Ẩn"),
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
          <BannerListModal
            mode="edit"
            record={record}
            onReload={handleReload}
          />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa Banner này không?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteBannerList record={record} onReload={handleReload} />
          </Popconfirm>
        </Space>
      ),
    },
  ];
  return (
    <>
      <BannerListToolbar />
      <Table
        columns={columns}
        dataSource={banner}
        pagination={{ pageSize: 6 }}
      />
    </>
  );
}

export default AdminBannerList;
