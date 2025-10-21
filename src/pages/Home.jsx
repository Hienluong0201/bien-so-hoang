import React from "react";
import HeroSection from "../sections/HeroSection";
import WelcomeSection from "../sections/WelcomeSection";
import ServicesSection from "../sections/ServicesSection";
import AccessoriesSection from "../sections/AccessoriesSection";
import CustomerReviews from "../sections/CustomerReviews";
import InfoSection from "../sections/InfoSection";

const Home = () => {
  return (
    <div className="w-full">
      <HeroSection />
      <WelcomeSection />
      <ServicesSection />
      <AccessoriesSection />
      <CustomerReviews />
      <InfoSection />
    </div>
  );
};

export default Home;
