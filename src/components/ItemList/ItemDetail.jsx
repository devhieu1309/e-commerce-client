import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Table, Card, Typography, Button, Image, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";

const { Title } = Typography;

const ItemDetail = () => {
  const { id } = useParams(); // Lấy product_id từ URL
  const [product, setProduct] = useState(null);
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    // Giả lập API – thay bằng API thật từ backend của bạn
    const fetchData = async () => {
      // Ví dụ dữ liệu trả về
      const productData = {
        id: id,
        name: "iPhone 15",
        category_name: "Điện thoại",
      };

      const itemsData = [
        {
          key: 1,
          variant: "Đen – 128GB",
          sku: "IP15-BLACK-128",
          price: 25000000,
          quantity: 10,
          image:  "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
        },
        {
          key: 2,
          variant: "Đen – 256GB",
          sku: "IP15-BLACK-256",
          price: 28000000,
          quantity: 8,
          image:  "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
        },
        {
          key: 3,
          variant: "Trắng – 128GB",
          sku: "IP15-WHITE-128",
          price: 25000000,
          quantity: 12,
          image:  "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
        },
        {
          key: 4,
          variant: "Trắng - 256GB",
          sku: "IP15-WHITE-256",
          price: 28000000,
          quantity: 6,
          image:  "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
        },
      ];

      setProduct(productData);
      setVariants(itemsData);
    };

    fetchData();
  }, [id]);

  const columns = [
    {
      title: "Biến thể",
      dataIndex: "variant",
    },
    {
      title: "SKU",
      dataIndex: "sku",
    },
    {
      title: "Giá",
      dataIndex: "price",
      render: (price) => `${price.toLocaleString()} ₫`,
    },
    {
      title: "Số lượng",
      dataIndex: "quantity",
    },
    {
      title: "Ảnh",
      dataIndex: "image",
       render: (image) => (
        <img src={`/public/${image}`} alt={image} style={{ width: 80 }} />
      ),
    },
  ];

  return (
    <Card>
      <Space direction="vertical" style={{ width: "100%" }}>
        <Link to="/admin/products">
          <Button icon={<ArrowLeftOutlined />}>Quay lại danh sách</Button>
        </Link>

        <Title level={3}>Chi tiết sản phẩm</Title>
        {product && (
          <div>
            <p>
              <b>Tên sản phẩm:</b> {product.name}
            </p>
            <p>
              <b>Danh mục:</b> {product.category_name}
            </p>
          </div>
        )}

        <Title level={4}>Danh sách biến thể</Title>
        <Table columns={columns} dataSource={variants} pagination={false} bordered />
      </Space>
    </Card>
  );
};

export default ItemDetail;
