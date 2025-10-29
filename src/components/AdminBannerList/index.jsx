import { Button, Popconfirm, Space, Table } from "antd";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

import DeleteBannerList from "./DeleteBannerList";
import { getBanner } from "../../services/bannerServices";
import BannerListToolbar from "./BannerListTooblar";
import BannerFormPage from "./BannerListModal";

function AdminBannerList() {
  const [banner, setBanner] = useState([]);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [editRecord, setEditRecord] = useState(null);
  const navigate = useNavigate();

  // Lấy danh sách banner
  const fetchApi = async () => {
    const result = await getBanner();
    setBanner(result);
  };

  useEffect(() => {
    fetchApi();
  }, []);

  // Load lại danh sách sau khi sửa hoặc xóa
  const handleReload = () => {
    fetchApi();
  };

  const handleSearchResult = (result) => {
    setBanner(result);
  };

  const handleEditBanner = (id) => {
    navigate(`/admin/bannerlist/editbanner/${id}`);
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
        <img
          src={`http://127.0.0.1:8000/storage/${text}`}
          alt={text}
          style={{ width: 150, height: 55, objectFit: "cover" }}
        />
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
          {/* Nút Sửa */}
          <Button
            type="text"
            style={{
              border: "1px solid #1890ff",
              color: "#1890ff",
              borderRadius: "4px",
              padding: "2px 2px",
              minWidth: "0",
              height: "24px",
            }}
            icon={<EditOutlined />}
            onClick={() => handleEditBanner(record.id)}
          />

          {/* Nút Xóa */}
          <Popconfirm
            title="Bạn chắc chắn muốn xóa Banner này?"
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
      <BannerListToolbar
        onReload={handleReload}
        onSearchResult={handleSearchResult}
      />

      <Table
        columns={columns}
        dataSource={banner}
        rowKey={(record) => record.id}
        pagination={{ pageSize: 7 }}
      />

      {/* Modal Sửa Banner */}
      {/* {isEditOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[600px] relative">
            <BannerFormPage mode="edit" record={editRecord} />
            <div className="flex justify-end mt-4">
              <Button onClick={() => setIsEditOpen(false)}>Đóng</Button>
            </div>
          </div>
        </div>
      )} */}
    </>
  );
}

export default AdminBannerList;
