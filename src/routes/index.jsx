import LayoutUser from "../layout/LayoutUser";
import Home from "../pages/User/Home";
import Detail from "../pages/User/Detail";
import Error404 from "../components/Error404";
import Dashboard from "../pages/Admin/Dashboard";
import LayoutDashboard from "../layout/LayoutDashboard";
import CategoryList from "../components/CategoryList";
import ItemList from "../components/ItemList";
import VariationList from "../components/VariationList";
import AddItem from "../components/ItemList/AddItem";
import ItemDetail from "../components/ItemList/ItemDetail";
import ProductEdit from "../components/ItemList/EditItem";
import EditItem from "../components/ItemList/EditItem";
import AdminBannerList from "../components/AdminBannerList";
import AdminNewsList from "../components/News/NewsList";
import AdminNewsBlocks from "../components/News/NewsBlocks";
import QuantityInStock from "../components/QuantityInStock";
import OrderStatusList from "../components/OrderStatusList";
import ShippingMethodList from "../components/ShippingMethodList";

export const routes = [
  {
    path: "/",
    element: <LayoutUser />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "iphone-15-256gb-chinh-hang-vn-a",
        element: <Detail />,
      },
      {
        path: "*",
        element: <Error404 />,
      },
    ],
  },
  {
    path: "/admin",
    element: <LayoutDashboard />,
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "categories",
        element: <CategoryList />,
        children: [
          // {
          //   index: true,
          //   element: <CategoryList />,
          // },
          // {
          //   path: "create",
          //   element: <CategoryCreate />,
          // },
          // {
          //   path: ":id/edit",
          //   element: <CategoryEdit />,
          // },
        ],
      },
      {
        path: "products",
        element: <ItemList />,
      },
      {
        path: "products/create",
        element: <AddItem />,
      },
      {
        path: "products/:id",
        element: <ItemDetail />,
      },
      {
        path: "products/edit/:id",
        element: <EditItem />,
      },
      {
        path: "variation",
        element: <VariationList />,
      },

      {
        path: "bannerlist",
        element: <AdminBannerList />,
      },

      {
        path: "quantityInStock",
        element: <QuantityInStock />,
      },

      {
        path: "newslist",
        element: <AdminNewsList />,
      },
      {
        path: "newsblocks",
        element: <AdminNewsBlocks />,
      },

      {
        path: "orderstatus",
        element: <OrderStatusList />,
      },
      {
        path: "shipping_methods", 
        element: <ShippingMethodList />, 
      },
    ],
  },
];

{
  /* <Route path="/admin/products/edit/:id" element={<ProductEdit />} /> */
}

{
  /* <Routes>
  <Route path="/" element={<LayoutUser />}>
    <Route index element={<Home />} />
    <Route path="iphone-15-256gb-chinh-hang-vn-a" element={<Detail />} />
    <Route path="*" element={<Error404 />} />
  </Route>
</Routes>; */
}
