import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";

import BannerListModal from "./BannerListModal";
import DeleteBanner from "./DeleteBannerList";
import BannerListToolbar from "./BannerListTooblar";

function AdminBannerList() {
  const [banner, setbanner] = useState([
    {
      id: 1,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 2,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 3,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 4,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 5,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 6,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 7,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 8,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 9,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 10,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
    {
      id: 11,
      title: "sản phẩm mới Iphone 17",
      image_url: "image1.jpg",
      link_url: "iphon 17",
      position: "home",
      status: "1",
    },
  ]);

  const getParentName = (parentId) => {
    const parent = banner.find((c) => c.id === parentId);
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
      title: "Hình ảnh banner",
      dataIndex: "image_url",
      key: "image_url",
      render: (text) => (
        <img
          src={`/public/2banner_1.webp`}
          alt="product"
          style={{ width: 120, height: 80, objectFit: "cover" }}
        />
      ),
    },
    {
      title: "Đường dẫn liên kết",
      dataIndex: "link_url",
      key: "link_url",
    },
    {
      title: "Vị trí hiển thị",
      dataIndex: "position",
      key: "position",
      render: (position) => getParentName(position),
    },
    {
      title: "Trạng thái",
      dataIndex: "is_active",
      key: "is_active",
      render: (is_active) => getParentName(is_active),
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
          <BannerListModal mode="edit" record={record} />
          <Popconfirm
            title="Bạn chắc chắn muốn đi banner này không?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteBanner record={record} />
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
