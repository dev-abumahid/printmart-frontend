import Canvase from "@/components/home/canvas";
import Category from "@/components/home/category";
import Cta from "@/components/home/cta";
import Hero from "@/components/home/hero";
import LittleThings from "@/components/home/little-things";
import Product from "@/components/home/product";
import ReviewRatings from "@/components/home/review-ratings";
import TrustedBrands from "@/components/home/trusted-brands";
import Vision from "@/components/home/vision";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <TrustedBrands />
      <Category />
      <Product />
      {/* <CustomizeStep /> */}
      <LittleThings />
      <Canvase />
      <ReviewRatings />
      <Vision />
      <Cta />
    </div>
  );
};

export default HomePage;
