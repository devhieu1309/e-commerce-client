import { Menu } from "antd";
import {
  CheckOutlined,
  HighlightOutlined,
  PlayCircleOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

function MenuSider() {
  const items = [
    {
      label: <Link to="/admin">Thống kê</Link>,
      icon: <PlayCircleOutlined />,
      key: "menu-1",
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
      label: <Link to="/admin/products">Quản lý sản phẩm</Link>,
      icon: <CheckOutlined />,
      key: "menu-2",
    },
    {
      label: <Link to="/admin/categories">Quản lý danh mục</Link>,
      icon: <HighlightOutlined />,
      key: "menu-3",
    },
    {
      label: <Link to="/admin/variation">Quản lý biến thể</Link>,
      icon: <HighlightOutlined />,
      key: "menu-4",
    },

    {
      // label: "Quản lý banners",
      label: <Link to="/admin/bannerlist">Quản lý Banners</Link>,
      icon: <HighlightOutlined />,
      key: "menu-6",
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
