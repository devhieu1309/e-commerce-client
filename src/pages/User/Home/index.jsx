import  Policy  from "../../../components/Policy"
import Banner from "../../../components/Banner"
import PopularCategories from "../../../components/PopularCategories"
import ProductList from "../../../components/ProductList"
import HotDeal from "../../../components/HotDeal"
import Iphone from "../../../components/Iphone"
import Ipad from "../../../components/Ipad"
import Mac from "../../../components/Mac"
import Iphone15ProBanner from "../../../components/Iphone15ProBanner"
import FeaturedAccessories from "../../../components/FeaturedAccessories"
import Accessories from "../../../components/Accessories"
import IpadProBanner from "../../../components/IpadProBanner"
import LatestNews from "../../../components/LatestNews"
import ProductReview from "../../../components/ProductReview"
import CustomerFeedback from "../../../components/CustomerFeedback"

function Home() {
  return (
    <>
      <Banner />
      <Policy />
      <PopularCategories />
      <ProductList />
      <HotDeal />
      <Iphone />
      <Ipad />
      <Mac />
      <Iphone15ProBanner />
      <FeaturedAccessories />
      <Accessories />
      <IpadProBanner />
      <LatestNews />
      <ProductReview />
      <CustomerFeedback />
    </>
  );
}

export default Home;
