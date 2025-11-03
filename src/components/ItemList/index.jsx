import { Button, Popconfirm, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined, EditOutlined, EyeOutlined } from "@ant-design/icons";
import ItemToolbar from "./ItemToolbar";
import { Link } from "react-router-dom";
import { getCategoryList } from "../../services/categoryServices";
import { getProductList } from "../../services/productServices";
import { Delete } from "lucide-react";
import DeleteItem from "./DeleteItem";

function ItemList() {
  // const [productList, setProductList] = useState([
  //   {
  //     id: 1,
  //     name: "iPhone 15",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 30990000,
  //     stock: 35,
  //   },
  //   {
  //     id: 2,
  //     name: "Iphone 15 Promax",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Ipad",
  //     category_id: 2,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 20,
  //   },
  //   {
  //     id: 3,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Phụ kiện",
  //     category_id: 3,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 4,
  //     name: "Samsung A36",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Laptop",
  //     category_id: 4,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 5,
  //     name: "Oppo A12",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Phụ kiện",
  //     category_id: 3,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 6,
  //     name: "Laptop ASUS Vivobook",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 7,
  //     name: "Samsung Galaxy S23 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Phụ kiện",
  //     category_id: 3,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 8,
  //     name: "Iphone 12",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 9,
  //     name: "Iphone 13",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 10,
  //     name: "Vivo A12",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 11,
  //     name: "Dell",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Phụ kiện",
  //     category_id: 3,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 12,
  //     name: "Iphone 17 Promax",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Ipad",
  //     category_id: 2,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 13,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Phụ kiện",
  //     category_id: 3,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 14,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 15,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 16,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 17,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Ipad",
  //     category_id: 2,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 18,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 19,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 20,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Ipad",
  //     category_id: 2,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 21,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Điện thoại",
  //     category_id: 1,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 22,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Ipad",
  //     category_id: 2,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 23,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Laptop",
  //     category_id: 4,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  //   {
  //     id: 24,
  //     name: "Samsung Galaxy S24 Ultra",
  //     image:
  //       "230913032939-iphone-15-green-8c348a34-ebcd-41c6-8b6d-ef888554c4a2.webp",
  //     category_name: "Laptop",
  //     category_id: 4,
  //     sku: 15000000,
  //     price: 28990000,
  //     stock: 0,
  //   },
  // ]);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isFiltering, setIsFiltering] = useState(false);
  const [productList, setProductList] = useState([]);
  const [categories, setCategories] = useState([]);

  // Get variation by variation name
  const handleSearchProduct = (value) => {
    if (!value) {
      setIsFiltering(false);
      setFilterProducts([]);
      return;
    }

    setIsFiltering(true);
    const resultFinal = productList.filter((item) =>
      item.product_name.toLowerCase().includes(value.toLowerCase())
    );

    setFilterProducts(resultFinal);
  };

  // Filter variation by category
  const handleGetProductByCategory = (category_id) => {
    if (!category_id) {
      setIsFiltering(false);
      setFilterProducts([]);
      return;
    }
    setIsFiltering(true);
    const resultFinal = productList.filter(
      (item) => item.category_id === category_id
    );
    setFilterProducts(resultFinal);
  };

  // Lấy danh sách danh mục
  useEffect(() => {
    const fetchApi = async () => {
      const result = await getCategoryList();
      setCategories(result.categories);
    };
    fetchApi();
  }, []);

  const fetchApi = async () => {
    const result = await getProductList();
    setProductList(result.data);
  };

  // Lấy danh sách sản phẩm
  useEffect(() => {
    fetchApi();
  }, []);

  // Load lại trang
  const handleReload = () => {
    fetchApi();
  };

  const formatVND = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  // const columns = [
  //   {
  //     title: "ID",
  //     dataIndex: "id",
  //     key: "id",
  //     width: 80,
  //   },
  //   {
  //     title: "Tên sản phẩm",
  //     dataIndex: "name",
  //     key: "name",
  //   },
  //   {
  //     title: "Ảnh sản phẩm",
  //     dataIndex: "image",
  //     key: "image",
  //     render: (image) => (
  //       <img src={`/public/${image}`} alt={image} style={{ width: 80 }} />
  //     ),
  //   },
  //   {
  //     title: "Danh mục",
  //     dataIndex: "category_name",
  //     key: "category_name",
  //   },
  //   {
  //     title: "Giá thấp nhất",
  //     dataIndex: "sku",
  //     key: "sku",
  //     render: (price) => <Tag color="gray">{formatVND(price)}</Tag>,
  //   },
  //   {
  //     title: "Giá cao nhất",
  //     dataIndex: "price",
  //     key: "price",
  //     render: (price) => <Tag color="red">{formatVND(price)}</Tag>,
  //   },
  //   {
  //     title: "Tồn kho",
  //     dataIndex: "stock",
  //     key: "stock",
  //     render: (stock) =>
  //       stock > 0 ? (
  //         <Tag color="green">{stock} sản phẩm</Tag>
  //       ) : (
  //         <Tag color="red">Hết hàng</Tag>
  //       ),
  //   },
  //   {
  //     title: "Hành động",
  //     key: "action",
  //     render: (_, record) => (
  //       <Space>
  //         <Link to="edit/1">
  //           <Button size="small" type="primary" icon={<EditOutlined />} />
  //         </Link>
  //         <Popconfirm
  //           title="Bạn chắc chắn muốn xóa sản phẩm này?"
  //           okText="Xóa"
  //           cancelText="Hủy"
  //         >
  //           <Button danger size="small" icon={<DeleteOutlined />}></Button>
  //         </Popconfirm>
  //         <Link to="1">
  //           <Button size="small" icon={<EyeOutlined />} />
  //         </Link>
  //       </Space>
  //     ),
  //   },
  // ];

  const columns = [
    {
      title: "ID",
      dataIndex: "product_id",
      key: "product_id",
      width: 80,
    },
    {
      title: "Tên sản phẩm",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Ảnh sản phẩm",
      key: "image",
      render: (_, record) => {
        const image = record.items?.[0]?.image || null;
        return image ? (
          <img
            src={image}
            alt={record.product_name}
            style={{ width: 80, borderRadius: 4 }}
          />
        ) : (
          <span>Không có ảnh</span>
        );
      },
    },
    {
      title: "Danh mục",
      dataIndex: "category_id",
      key: "category_id",
      render: (category_id) => {
        // console.log("TEST Catefory: ", categories);
        const category = categories.find((c) => c.category_id == category_id);
        return (
          <Tag color="blue">
            {category ? category.category_name : "Không có"}
          </Tag>
        );
      },
    },
    {
      title: "Giá thấp nhất",
      key: "min_price",
      render: (_, record) => {
        const prices = record.items?.map((i) => Number(i.price)) || [];
        const minPrice = Math.min(...prices);
        return <Tag color="green">{formatVND(minPrice)}</Tag>;
      },
    },
    {
      title: "Giá cao nhất",
      key: "max_price",
      render: (_, record) => {
        const prices = record.items?.map((i) => Number(i.price)) || [];
        const maxPrice = Math.max(...prices);
        return <Tag color="red">{formatVND(maxPrice)}</Tag>;
      },
    },
    {
      title: "Tổng tồn kho",
      key: "stock",
      render: (_, record) => {
        const total =
          record.items?.reduce((sum, i) => sum + Number(i.qty_in_stock), 0) ||
          0;
        return total > 0 ? (
          <Tag color="green">{total} sản phẩm</Tag>
        ) : (
          <Tag color="red">Hết hàng</Tag>
        );
      },
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => (
        <Space>
          <Link to={`edit/${record.product_id}`}>
            <Button size="small" type="primary" icon={<EditOutlined />} />
          </Link>
          {/* <DeleteItem record={record} onReload={handleReload} /> */}
          <DeleteItem record={record} onReload={handleReload}/>
          <Link to={`${record.product_id}`}>
            <Button size="small" icon={<EyeOutlined />} />
          </Link>
        </Space>
      ),
    },
  ];

  return (
    <>
      <ItemToolbar
        categories={categories}
        handleSearchProduct={handleSearchProduct}
        handleGetProductByCategory={handleGetProductByCategory}
      />
      <Table
        columns={columns}
        dataSource={isFiltering ? filterProducts : productList}
        pagination={{ pageSize: 5 }}
      />
    </>
  );
}

export default ItemList;
