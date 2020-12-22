import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import { homeObjOne, homeObjThree } from "./Data";
import Pricing from "../../components/Pricing/Pricing";

const Services = () => {
  return (
    <>
      <Pricing />
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjThree} />
    </>
  );
};

export default Services;
