import { Button, Popconfirm, Space, Table } from "antd";
import { useState } from "react";

import QuantityInStockToolbar from "./QuantityInStockToolbar";
import QuantityInStockModal from "./QuantityInStockModal";
import DeleteQuantityInStock from "./DeleteQuantityInStock";

function QuantityInStock() {
  const [quantityInStock] = useState([
    {
      id: 1,
      qty_in_stock: 100,
      price: 5.0,
      product_image: "image1.jpg",
      product_id: "01",
      SKU: "SP001",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 2,
      qty_in_stock: 200,
      price: 5.0,
      product_image: "image1.jpg",
      product_id: "002",
      SKU: "SP002",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 3,
      qty_in_stock: 180,
      price: 5.0,
      product_image: "image1.jpg",
      product_id: "01",
      SKU: "SP001",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 4,
      qty_in_stock: 100,
      price: 5.0,
      product_image: "image1.jpg",
      product_id: "01",
      SKU: "SP001",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 5,
      qty_in_stock: 100,
      price: 5.0,
      product_image: "image1.jpg",
      product_id: "01",
      SKU: "SP001",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
    {
      id: 5,
      qty_in_stock: 100,
      price: 5.0,
      product_image: "image1.jpg",
      product_id: "01",
      SKU: "SP001",
      created_at: "2025-09-01 12:00:00",
      updated_at: "2025-09-10 08:00:00",
    },
  ]);

  const getParentName = (parentId) => {
    const parent = quantityInStock.find((c) => c.id === parentId);
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
      title: "Số lượng tồn kho",
      dataIndex: "qty_in_stock",
      key: "qty_in_stock",
    },
    {
      title: "Giá",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Hình ảnh sản phẩm",
      dataIndex: "product_image",
      key: "product_image",
      render: (text) => (
        <img
          src={`/public/230913055843-mt0u3fe-a2.webp`}
          alt="product"
          style={{ width: 80, height: 80, objectFit: "cover" }}
        />
      ),
    },

    {
      title: "Mã sản phẩm",
      dataIndex: "product_id",
      key: "product_id",
      render: (product_id) => getParentName(product_id),
    },
    {
      title: "Mã SKU của sản phẩm",
      dataIndex: "SKU",
      key: "SKU",
      render: (SKU) => getParentName(SKU),
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
          <QuantityInStockModal mode="edit" record={record} />
          <Popconfirm
            title="Bạn chắc chắn muốn xóa sản phẩm này không?"
            okText="Xóa"
            cancelText="Hủy"
          >
            <DeleteQuantityInStock record={record} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <QuantityInStockToolbar />
      <Table
        columns={columns}
        dataSource={quantityInStock}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}

export default QuantityInStock;
