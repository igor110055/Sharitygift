import Head from "next/head";
import Link from "next/link";

import PortfolioComponent from "../components/custom/sections/portfoliocomponent";
import GeneralBanner from "../components/custom/sections/generalbanner";
import Submenu from "../components/custom/sections/submenu";
import PartnershipPortfolio from "../components/custom/sections/partnershipportfolio";
import Infobar from "../components/custom/sections/infobar";
import ExplorePartners from "../components/custom/sections/explorepartners";

export default function Partnership() {
  return (
    <div>
      <Head>
        <title>Sharity | Partnership</title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        <GeneralBanner title="Lorem ispun doler partner" />
        <Submenu />
        
        <PartnershipPortfolio />
        <Infobar />
        <ExplorePartners />
        <p className="p-t-20"></p>
      </div>      
    </div>
  );
}
