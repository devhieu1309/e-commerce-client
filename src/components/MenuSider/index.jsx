import { Menu } from "antd";
import {
  CheckOutlined,
  HighlightOutlined,
  PlayCircleOutlined,
  ShoppingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {
  const items = [
    {
      label: <Link to="/admin">Thống kê</Link>,
      icon: <PlayCircleOutlined />,
      key: "menu-0",
      // children: [
      //     {
      //         label: <Link to="/">Dashboard</Link>,
      //         key: "/"
      //     },
      //     {
      //         label: "Menu 1 - 2",
      //         key: "menu-1-2"
      //     },
      //     {
      //         label: "Menu 1 - 3",
      //         key: "menu-1-3"
      //     }
      // ]
    },
    {
      label: <Link to="/admin/user">Danh sách người dùng</Link>,
      icon: <UserOutlined />,
      key: "menu-1",
    },
    {
      label: <Link to="/admin/on_off">Khóa/Mở tài khoản người dùng</Link>,
      icon: <UserOutlined />,
      key: "menu-2",
    },
    {
      label: <Link to="/admin/products">Quản lý sản phẩm</Link>,
      icon: <CheckOutlined />,
      key: "menu-3",
    },
    {
      label: <Link to="/admin/categories">Quản lý danh mục</Link>,
      icon: <HighlightOutlined />,
      key: "menu-4",
    },
    {
      label: <Link to="/admin/variation">Quản lý biến thể</Link>,
      icon: <HighlightOutlined />,
      key: "menu-5",
    },

    {
      // label: "Quản lý banners",
      label: <Link to="/admin/bannerlist">Quản lý Banners</Link>,
      icon: <HighlightOutlined />,
      key: "menu-6",
    },

    {
      // label: "Quản lý tin tức và chi tiết tin tức",
      label: <Link to="">Tin Tức</Link>,
      icon: <HighlightOutlined />,
      key: "menu-7",
      children: [
        {
          label: <Link to="/admin/newslist">Quản lý tin tức</Link>,
          key: "menu-7-1",
        },
        {
          label: <Link to="newsblocks">Quản lý chi tiết tin tức</Link>,
          key: "menu-7-2",
        },
      ],
    },
    {
      // label: "Quản lý sản phẩm tồn kho",
      label: <Link to="/admin/quantityInStock">Quản lý sản phẩm tồn kho</Link>,
      icon: <HighlightOutlined />,
      key: "menu-8",
    },
    {
      // label: "Quản lý phương thanh toán  phương thanh toán",
      label: <Link to="/admin/orderstatus">Quản lý phương thanh toán</Link>,
      icon: <HighlightOutlined />,
      key: "menu-9",
    },
    {
      // label: "Quản lý phương thức vận chuyển",
      label: <Link to="/admin/shipping_methods">Quản lý phương thức vận chuyển</Link>,
      icon: <ShoppingOutlined />,
      key: "menu-10",
<<<<<<< HEAD
=======
    },
    {
      // label: "Quản lý chương trình khuyến mãi",
      label: <Link to="/admin/promotions">Quản lý chương trình khuyến mãi</Link>,
      icon: <HighlightOutlined />,
      key: "menu-11",
>>>>>>> f294a43d1fbd039a99dc03b004f749e7da48ccba
    },
  ];

  return (
    <>
      <Menu
        mode="inline"
        items={items}
        defaultSelectedKeys={["menu-1-1"]}
        defaultOpenKeys={["/"]}
      />
    </>
  );
}

export default MenuSider;
