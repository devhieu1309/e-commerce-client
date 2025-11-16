import Policy from "../../../components/Policy"
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
import ScrollReveal from "../../../components/ScrollReveal"

function Home() {
  return (
    <>
      <Banner />
      <ScrollReveal 
        animation="fade-up" 
        delay={50} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <Policy />
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-up" 
        delay={100} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <PopularCategories />
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-up" 
        delay={100} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <ProductList />
      </ScrollReveal>
      <ScrollReveal 
        animation="scale" 
        delay={50} 
        duration={500} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <HotDeal />
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-left" 
        delay={100} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <Iphone />
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-right" 
        delay={100} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <Ipad />
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-left" 
        delay={100} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <Mac />
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-up" 
        delay={50} 
        duration={500} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <Iphone15ProBanner />
      </ScrollReveal>
      <ScrollReveal 
        animation="slide-up" 
        delay={100} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <FeaturedAccessories />
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-up" 
        delay={100} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <Accessories />
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-up" 
        delay={50} 
        duration={500} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <IpadProBanner />
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-right" 
        delay={100} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <LatestNews />
      </ScrollReveal>
      <ScrollReveal 
        animation="scale" 
        delay={100} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <ProductReview limit={4} is_visible={1} showLoadMore={false}/>
      </ScrollReveal>
      <ScrollReveal 
        animation="fade-up" 
        delay={50} 
        duration={600} 
        threshold={0.1}
        rootMargin="0px 0px -50px 0px"
      >
        <CustomerFeedback />
      </ScrollReveal>
    </>
  );
}

export default Home;
