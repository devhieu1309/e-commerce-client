import { Button, Popconfirm, Space, Table, Tag } from "antd";
import { useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import ItemToolbar from "./ItemToolbar";
import { Link } from "react-router-dom";

function ItemList() {
  const formatVND = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  const [productList, setProductList] = useState([
    {
      id: 1,
      name: "iPhone 15",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 30990000,
      stock: 35,
    },
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 20,
    },
    {
      id: 3,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 4,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 5,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 6,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 7,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 8,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 9,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 10,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 11,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 12,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 13,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 14,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 15,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 16,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 17,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 18,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 19,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 20,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 21,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 22,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 23,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
    {
      id: 24,
      name: "Samsung Galaxy S24 Ultra",
      image:
        "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
      category: "Điện thoại",
      sku: 15000000,
      price: 28990000,
      stock: 0,
    },
  ]);

  const getParentName = (parentId) => {
    const parent = categories.find((c) => c.id === parentId);
    return parent ? parent.category_name : "Không có";
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
      width: 80,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Ảnh sản phẩm",
      dataIndex: "image",
      key: "image",
      render: (image) => (
        <img src={`/public/${image}`} alt={image} style={{ width: 80 }} />
      ),
    },
    {
      title: "Danh mục",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Giá thấp nhất",
      dataIndex: "sku",
      key: "sku",
      render: (price) => <Tag color="gray">{formatVND(price)}</Tag>,
    },
    {
      title: "Giá cao nhất",
      dataIndex: "price",
      key: "price",
      render: (price) => <Tag color="red">{formatVND(price)}</Tag>,
    },
    {
      title: "Tồn kho",
      dataIndex: "stock",
      key: "stock",
      render: (stock) =>
        stock > 0 ? (
          <Tag color="green">{stock} sản phẩm</Tag>
        ) : (
          <Tag color="red">Hết hàng</Tag>
        ),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          <Link to="edit/1">
            <Button size="small" type="primary" icon={<EditOutlined />} />
          </Link>
          <Popconfirm
            title="Bạn chắc chắn muốn xóa sản phẩm này?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <Button danger size="small" icon={<DeleteOutlined />}></Button>
          </Popconfirm>
          <Link to="1">
            <Button size="small" icon={<EyeOutlined />} />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ItemToolbar />
      <Table
        columns={columns}
        dataSource={productList}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}

export default ItemList;
