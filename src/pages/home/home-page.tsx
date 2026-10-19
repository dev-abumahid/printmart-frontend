import Canvase from "@/components/home/canvas";
import Category from "@/components/home/category";
import Cta from "@/components/home/cta";
import CustomizeStep from "@/components/home/customize-step";
import Hero from "@/components/home/hero";
import LittleThings from "@/components/home/little-things";
import Product from "@/components/home/product";
import ReviewRatings from "@/components/home/review-ratings";
import Vision from "@/components/home/vision";

const HomePage = () => {
  return (
    <div className="">
      <Hero />
      <Category />
      <Product />
      <CustomizeStep />
      <Canvase />
      <LittleThings />
      <ReviewRatings />
      <Vision />
      <Cta />
    </div>
  );
};

export default HomePage;
