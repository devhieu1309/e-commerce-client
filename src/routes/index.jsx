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
import Introduction from "../pages/User/Introduction";
import Cart from "../pages/User/Cart";
import Review from "../pages/User/Review";
import Relatedquestions from "../pages/User/Relatedquestions";
import Contact from "../pages/User/Contact";

import AdminBannerList from "../components/AdminBannerList";
import AdminNewsList from "../components/News/NewsList";
import AdminNewsBlocks from "../components/News/NewsBlocks";
import QuantityInStock from "../components/QuantityInStock";
import OrderStatusList from "../components/OrderStatusList";
import ShippingMethodList from "../components/ShippingMethodList";
import PromotionList from "../components/PromotionList";
import UserList from "../components/UserList";
import OnOffUserList from "../components/On_Off_User";
import VideoReview from "../components/VideoReview";
import AdminStoreBranchList from "../components/AdminStoreBranchList";
import Payment from "../pages/User/Payment";
import LoGin from "../pages/User/login/Login";
import RegisTer from "../pages/User/register/Register";
import BannerFormPage from "../components/AdminBannerList/BannerListModal";
import AddStoreBranch from "../components/AdminStoreBranchList/AddStoreBranch";
import ShoppingOrder from "../components/ShoppingOrder";
import EditStoreBranch from "../components/AdminStoreBranchList/EditStoreBranch";

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
        path: "Introduction",
        element: <Introduction />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "Review",
        element: <Review />,
      },
      {
        path: "Relatedquestions",
        element: <Relatedquestions />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "iphone-15-256gb-chinh-hang-vn-a",
        element: <Detail />,
      },
      {
        path: "/products/:id",
        element: <Detail />,
      },
      {
        path: "news",
        element: <News />,
      },
      {
        path: "newsdetail/:id",
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
        path: "dang-nhap",
        element: <LoGin />,
      },
      {
        path: "dang-ky",
        element: <RegisTer />,
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
        path: "bannerlist/createbanner",
        element: <BannerFormPage mode="create" />,
      },
      {
        path: "bannerlist/editbanner/:id",
        element: <BannerFormPage mode="edit" />,
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
      {
        path: "user",
        element: <UserList />,
      },
      {
        path: "on_off",
        element: <OnOffUserList />,
      },
      {
        path: "promotions",
        element: <PromotionList />,
      },
      {
        path: "video-review",
        element: <VideoReview />,
      },
      {
        path: "store-branches",
        element: <AdminStoreBranchList />,
      },
      {
        path: "store-branches/create",
        element: <AddStoreBranch />,
      },
      {
        path: "store-branches/edit/:id",
        element: <EditStoreBranch />,
      },
      {
        path: "shopping-order",
        element: <ShoppingOrder />,
      }
    ],
  },
  {
    path: "payment",
    element: <Payment />,
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
