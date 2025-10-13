import LayoutUser from "../layout/LayoutUser";
import Home from "../pages/User/Home";
import Detail from "../pages/User/Detail";
import Error404 from "../components/Error404";
import Dashboard from "../pages/Admin/Dashboard";
import LayoutDashboard from "../layout/LayoutDashboard";
import CategoryList from "../components/CategoryList";
import News from "../pages/User/news/News";
import NewsDetail from "../pages/User/detailnews/NewsDetail";
import Guarantee from "../pages/User/guarantee/Guarantee";
import ComparProducts from "../pages/User/compareproducts/ComparProducts";
import StoreSystem from "../pages/User/storesystem/StoreSystem";
import PreOrderPage from "../pages/User/preOrderPage/PreOrderPage";
import ProductsFavorite from "../pages/User/FavoriteProducts/ProductsFavorite";
import ItemList from "../components/ItemList";
import VariationList from "../components/VariationList";
import AddItem from "../components/ItemList/AddItem";
import ItemDetail from "../components/ItemList/ItemDetail";
import EditItem from "../components/ItemList/EditItem";
import AdminBannerList from "../components/AdminBannerList";
import AdminNewsList from "../components/News/NewsList";
import AdminNewsBlocks from "../components/News/NewsBlocks";
import QuantityInStock from "../components/QuantityInStock";
import OrderStatusList from "../components/OrderStatusList";

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
        path: "news",
        element: <News />,
      },
      {
        path: "iphone-15-hong-co-may-phien-ban-5-diem-doc-dao-khien-nhieu-chi-em-yeu-thich",
        element: <NewsDetail />,
      },
      {
        path: "Tra-cuu-bao-hanh",
        element: <Guarantee />,
      },
      {
        path: "san-pham-yeu-thich",
        element: <ProductsFavorite />,
      },
      {
        path: "so-sanh-san-pham",
        element: <ComparProducts />,
      },
      {
        path: "he-thong-cua-hang",
        element: <StoreSystem />,
      },
      {
        path: "dat-truoc-san-pham",
        element: <PreOrderPage />,
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
