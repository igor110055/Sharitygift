import Head from "next/head";
import Link from "next/link";

import PortfolioComponent from "../components/custom/sections/portfoliocomponent";
import GeneralBanner from "../components/custom/sections/generalbanner";
import SubBanner from "../components/custom/sections/subbanner";
import ResourcesPortfolio from "../components/custom/sections/resourcesportfolio";
import CryptoTokens from "../components/custom/sections/cryptotokens";

export default function Resources() {
  return (
    <div>
      <Head>
        <title>Sharity | Resources</title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        <GeneralBanner title="Lorem ispun doler resource" />
        <SubBanner title="Resources" />
        
        <ResourcesPortfolio part={1} />
        <ResourcesPortfolio part={2} />
        <CryptoTokens />
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
