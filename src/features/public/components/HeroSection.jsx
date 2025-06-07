import React from "react";
import Container from "../../../components/Container";
import { Link } from "react-router-dom";
import heroSectionVideo from "../../../../public/assets/videos/hero_section_video.mp4";

const HeroSection = () => {
  return (
    <Container>
      <div className="flex p-4">
        <div className=" flex flex-col lg:flex-row md:gap-14 items-center justify-between mt-[80px] ">
          <div className=" order-2 lg:order-1 text-center lg:text-left mt-16 lg:mt-0">
            <h3 className=" text-xl lg:text-2xl font-medium text-black">
              👋 Welcome to GlowCheck
            </h3>
            <h1 className="w-full lg:w-[480px] text-4xl lg:text-5xl font-bold leading-[50px] lg:leading-[60px] mt-3 bg-clip-text">
              Smart Skincare Ingredient Compatibility Checker
            </h1>
            <p className="w-full lg:w-[500px] text-sm lg:text-base mt-4">
              Easily find out if your skincare products can be used together.
              Our tool helps you avoid harmful combinations, simplify your
              routine, and make confident skincare choices with science-backed
              insights.
            </p>
            <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-4 mt-6 ">
              <Link
                to={"/products/check-ingredients"}
                className="md:w-1/2 px-3 py-1 md:py-2  border-green-700 text-green-700 border rounded-full ml-6 md:ml-0 md:bg-green-700 md:text-white md:text-center"
              >
                check products
              </Link>
              <Link
                to={"/products"}
                className="md:hidden px-3 py-1 bg-green-700 text-white ml-6 rounded-full"
              >
                view products
              </Link>
            </div>
          </div>
          <div className=" w-full pointer-events-none">
            <video src={heroSectionVideo} autoPlay loop muted></video>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default HeroSection;
