import React from "react";

// core components
import Banner2 from "../banner/Banner2";
import Banner3 from "../banner/Banner3";
import Banner4 from "../banner/Banner4";
import FundraiseCard from "../basic/fundraise-card";

// sections for this page
import HeaderComponent from "./sections/headercomponent";
import BannerComponent from "./sections/bannercomponent";
import FormBannerComponent from "./sections/formbannercomponent";
import FeatureComponent from "./sections/featurecomponent";
import PortfolioComponent from "./sections/portfoliocomponent";
import PricingComponent from "./sections/pricingcomponent";
import TeamComponent from "./sections/teamcomponent";
import TestimonialComponent from "./sections/testimonialcomponent";
import BlogComponent from "./sections/blogcomponent";
import C2aComponent from "./sections/c2acomponent";
import ContactComponent from "./sections/contactcomponent";
import CallToAction from "../../components/call-to-action/CallToAction";

const CustomComponents = () => {
  return (
    <div className="p-t-102">
      <Banner2 />
      <Banner3 />
      <FundraiseCard />
      {/* <Banner4 /> */}
      {/* <HeaderComponent /> */}
      {/* <BannerComponent />
      <FormBannerComponent />
      <FeatureComponent />
      <PortfolioComponent />
      <PricingComponent />
      <TeamComponent />
      <TestimonialComponent />
      <BlogComponent />
      <C2aComponent />
      <ContactComponent />
      <CallToAction /> */}
    </div>
  );
};

export default CustomComponents;
