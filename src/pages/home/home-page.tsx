import Canvase from "@/components/home/canvas";
import Category from "@/components/home/category";
import Cta from "@/components/home/cta";
import Favorites from "@/components/home/favorites";
import Hero from "@/components/home/hero";
import LittleThings from "@/components/home/little-things";
import OfferBanner from "@/components/home/offer-banner";
import Product from "@/components/home/product";
import Services from "@/components/home/services";
import TrustedBrands from "@/components/home/trusted-brands";
import VideoShowcase from "@/components/home/video-showcase";
import Vision from "@/components/home/vision";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <TrustedBrands />
      <Category />
      <Product />
      <Services />
      <Favorites />
      <OfferBanner />
      {/* <CustomizeStep /> */}
      <LittleThings />
      <Canvase />
      <VideoShowcase />
      {/* <ReviewRatings /> */}
      <Vision />
      <Cta />
    </div>
  );
};

export default HomePage;
