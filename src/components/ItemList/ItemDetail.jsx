import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Table, Card, Typography, Button, Image, Space } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import {
  getProductDetail,
  getProductList,
} from "../../services/productServices";

const { Title } = Typography;

const ItemDetail = () => {
  const { id } = useParams(); // Lấy product_id từ URL
  const [product, setProduct] = useState(null);
  const [variants, setVariants] = useState([]);

  useEffect(() => {
    // Giả lập API – thay bằng API thật từ backend của bạn
    const fetchData = async () => {
      const response = await getProductDetail(id);

      // 💡 Chuyển đổi dữ liệu nhận được thành 2 biến mong muốn:
      const product = response.product;

      const productData = {
        id: product.product_id,
        name: product.product_name,
        category_name: product.category,
      };

      const itemsData = product.items.map((item) => ({
        key: item.product_item_id,
        variant: item.variant_name,
        sku: item.sku,
        price: parseFloat(item.price.replace(/\./g, "").replace(" đ", "")),
        quantity: item.qty_in_stock,
        image: item.image ? item.image : "no-image.jpg",
      }));

      console.log("Product data MINH HIEU:", productData);
      console.log("Items data MINH HIEU:", itemsData);

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
        <img src={`${image}`} alt={image} style={{ width: 80 }} />
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
        <Table
          columns={columns}
          dataSource={variants}
          pagination={false}
          bordered
        />
      </Space>
    </Card>
  );
};

export default ItemDetail;
