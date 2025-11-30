import { Button, Space, Table, Tag, Dropdown, Menu } from "antd";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getShoppingOrder } from "../../services/shopingOrderServide";
import { DownOutlined } from "@ant-design/icons";


function ShoppingOrder() {
  // const [filterProducts, setFilterProducts] = useState([]);
  // const [isFiltering, setIsFiltering] = useState(false);
  // const [productList, setProductList] = useState([]);
  // const [categories, setCategories] = useState([]);


  // const handleSearchProduct = (value) => {
  //   if (!value) {
  //     setIsFiltering(false);
  //     setFilterProducts([]);
  //     return;
  //   }

  //   setIsFiltering(true);
  //   const resultFinal = productList.filter((item) =>
  //     item.product_name.toLowerCase().includes(value.toLowerCase())
  //   );

  //   setFilterProducts(resultFinal);
  // };

  // // Filter variation by category
  // const handleGetProductByCategory = (category_id) => {
  //   if (!category_id) {
  //     setIsFiltering(false);
  //     setFilterProducts([]);
  //     return;
  //   }
  //   setIsFiltering(true);
  //   const resultFinal = productList.filter(
  //     (item) => item.category_id === category_id
  //   );
  //   setFilterProducts(resultFinal);
  // };

  // // Lấy danh sách danh mục
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     const result = await getCategoryList();
  //     setCategories(result.categories);
  //   };
  //   fetchApi();
  // }, []);

  // const fetchApi = async () => {
  //   const result = await getProductList();
  //   setProductList(result.data);
  // };

  // // Lấy danh sách sản phẩm
  // useEffect(() => {
  //   fetchApi();
  // }, []);

  // // Load lại trang
  // const handleReload = () => {
  //   fetchApi();
  // };

  // const formatVND = (price) => {
  //   return price.toLocaleString("vi-VN", {
  //     style: "currency",
  //     currency: "VND",
  //   });
  // };
  const [shoppingOrder, setShoppingOrder] = useState([]);

  const fetchApi = async () => {
    const result = await getShoppingOrder();
    console.log("Danh sách đơn hàng: ", result);

    setShoppingOrder(result);
  }

  useEffect(() => {
    fetchApi();
  }, []);

  const formatVND = (price) => {
    return price.toLocaleString("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  };

  // const statusLabelMap = {
  //   pending: "Chờ xác nhận",
  //   confirmed: "Đã xác nhận",
  //   processing: "Chờ lấy hàng",
  //   shipped: "Giao hàng",
  //   delivered: "Đã giao",
  //   returned: "Trả hàng",
  //   refunded: "Hoàn tiền",
  //   cancelled: "Hủy Đơn",
  // };
  // const statusColorMap = {
  //   pending: "gold",
  //   confirmed: "blue",
  //   processing: "cyan",
  //   shipped: "orange",
  //   delivered: "green",
  //   returned: "yelow",
  //   refunded: "purple",
  //   cancelled: "red",
  // };

  const statusColorMap = {
    "Chờ lấy hàng": "cyan",
    "Trả hàng": "pink",
    "Hủy đơn": "red",
    "Chờ giao hàng": "orange",
    "Đã xác nhận": "blue",
    "Đã giao": "green",
    "Hoàn tiền": "purple"
  };

  const columns = [
    {
      title: "Mã ĐH",
      dataIndex: "shop_order_id",
      key: "shop_order_id",
    },
    {
      title: "Tên khách hàng",
      dataIndex: "user_name",
      key: "user_name",
    },
    {
      title: "Ngày đặt hàng",
      dataIndex: "order_date",
      key: "order_date",
    },
    // {
    //   title: "Đị chỉ giao hàng",
    //   dataIndex: "address",
    //   key: "address",
    // },
    {
      title: "Phương thức thanh toán",
      dataIndex: "payment_type",
      key: "payment_type",
      width: 200,
    },
    {
      title: "Phương thức giao hàng",
      dataIndex: "shipping_method",
      key: "shipping_method",
    },
    {
      title: "Trạng thái đơn hàng",
      dataIndex: "order_status",
      key: "order_status",
      render: (value) => (
        <Tag
          color={statusColorMap[value] || "default"}
          style={{
            display: "inline-block",
            minWidth: 120,
            textAlign: "center",
            padding: "4px",
            borderRadius: "6px",
            fontWeight: 500
          }}
        >
          {value}
        </Tag>
      ),
    },
    {
      title: "Tổng tiền",
      dataIndex: "order_total",
      key: "order_total",
      render: (order_total) => formatVND(Number(order_total)),
    },
    {
      title: "Hành động",
      key: "action",
      render: (_, record) => {
        const menu = (
          <Menu>
            <Menu.Item key="view">
              <Link to={`${record.shop_order_id}`}>Xem chi tiết</Link>
            </Menu.Item>
            <Menu.Item key="quick-status">
              <Link to={`${record.shop_order_id}/edit?action=status`}>Chỉnh sửa trạng thái nhanh</Link>
            </Menu.Item>
            <Menu.Item key="edit-info">
              <Link to={`${record.shop_order_id}/edit?action=info`}>Chỉnh sửa thông tin</Link>
            </Menu.Item>
            <Menu.Item key="confirm-payment">
              <Link to={`${record.shop_order_id}/edit?action=payment`}>Xác nhận thanh toán</Link>
            </Menu.Item>
          </Menu>
        );
        return (
          <Dropdown overlay={menu} trigger={['click']}>
            <Button size="medium" type="primary">
              Thông tin đơn hàng <DownOutlined />
            </Button>
          </Dropdown>
        );
      }
    }
  ];

  return (
    <>
      {/* <ItemToolbar
        categories={categories}
        handleSearchProduct={handleSearchProduct}
        handleGetProductByCategory={handleGetProductByCategory}
      /> */}
      <Table
        columns={columns}
        dataSource={shoppingOrder}
        pagination={{ pageSize: 10 }}
      />
    </>
  );
}

export default ShoppingOrder;
