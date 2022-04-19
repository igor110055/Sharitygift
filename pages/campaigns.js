import Head from "next/head";
import Link from "next/link";

import PortfolioComponent from "../components/custom/sections/portfoliocomponent";
import GeneralBanner from "../components/custom/sections/generalbanner";
import SubBanner from "../components/custom/sections/subbanner";
import CampaignsPortfolio from "../components/custom/sections/campaignsportfolio";

export default function Campaigns() {
  return (
    <div>
      <Head>
        <title>Sharity | Campaigns</title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        <GeneralBanner title="Lorem ispun doler campaign" />
        <SubBanner title="Campaigns" />
        
        <CampaignsPortfolio />
        <p className="p-t-20"></p>
      </div>
      {/* <HeaderComponent />
      <BannerComponent />
      <FormBannerComponent />
      <FeatureComponent />
      
      <PricingComponent />
      <TeamComponent />
      <TestimonialComponent />
      <BlogComponent />
      <C2aComponent />
      <ContactComponent /> */}
      
    </div>
  );
}
