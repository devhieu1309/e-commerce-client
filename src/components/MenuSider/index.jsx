import { Menu } from "antd";
import {
  CheckOutlined,
  HighlightOutlined,
  PlayCircleOutlined,
  ShoppingOutlined,
  UserOutlined,
  PictureOutlined,
  ReadOutlined,
  DatabaseOutlined,
  CreditCardOutlined,
  EditOutlined,
  CalendarOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";
import { icons } from "antd/es/image/PreviewGroup";

function MenuSider() {
  const items = [
    {
      label: <Link to="/admin">Thống kê</Link>,
      icon: <PlayCircleOutlined />,
      key: "menu-0",
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
      icon: <PictureOutlined />,
      key: "menu-6",
    },

    {
      // label: "Quản lý tin tức và chi tiết tin tức",
      label: <Link to="/admin/newslist">Quản lý tin tức</Link>,
      icon: <ReadOutlined />,
      key: "menu-7",
      children: [
        {
          label: <Link to="/admin/newslist"> Tin tức</Link>,
          key: "menu-7-1",
          icon: <ReadOutlined />,
        },
        {
          label: <Link to="newsblocks">Bài viết</Link>,
          key: "menu-7-2",
          icons: <ReadOutlined />,
        },
      ],
    },
    {
      // label: "Quản lý sản phẩm tồn kho",
      label: <Link to="/admin/quantityInStock">Quản lý sản phẩm tồn kho</Link>,
      icon: <DatabaseOutlined />,
      key: "menu-8",
    },
    {
      // label: "Quản lý phương thanh toán  phương thanh toán",
      label: <Link to="/admin/orderstatus">Quản lý phương thanh toán</Link>,
      icon: <CreditCardOutlined />,
      key: "menu-9",
    },
    {
      // label: "Quản lý phương thức vận chuyển",
      label: (
        <Link to="/admin/shipping_methods">Quản lý phương thức vận chuyển</Link>
      ),
      icon: <ShoppingOutlined />,
      key: "menu-10",
    },
    {
      // label: "Quản lý chương trình khuyến mãi",
      label: (
        <Link to="/admin/promotions">Quản lý chương trình khuyến mãi</Link>
      ),
      icon: <HighlightOutlined />,
      key: "menu-11",
    },
    {
      label: (
        <Link to="/admin/video-review">Quản lý video review sản phẩm</Link>
      ),
      icon: <HighlightOutlined />,
      key: "menu-12",
    },
    {
      label: (
        <Link to="/admin/store-systems">Quản lý chi nhánh cửa hàng</Link>
      ),
      icon: <HighlightOutlined />,
      key: "menu-13",
    },
    {
      label: <Link to="/admin/shopping-order">Danh sách đơn hàng</Link>,
      icon: <CalendarOutlined />,
      key: "menu-14",
      children: [
        {
          label: <Link to="/admin/shopping-order">Danh sách đơn hàng</Link>,
          key: "menu-14-1",
        },
        {
          label: <Link to="">Chi tiết đơn hàng</Link>,
          key: "menu-14-2",
        },
        {
          label: <Link to="">Quản lý bảo hành</Link>,
          key: "menu-14-3",

        },
      ],
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
