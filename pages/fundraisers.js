import Head from "next/head";
import Link from "next/link";

import PortfolioComponent from "../components/custom/sections/portfoliocomponent";
import MainBanner from "../components/custom/sections/mainbanner";
import Categories from "../components/custom/sections/categories";
// import CharityRaisers from "../components/custom/sections/charityraisers";
import MedicalRaisers from "../components/custom/sections/medicalraisers";
import AnimalRaisers from "../components/custom/sections/animalraisers";

export default function Fundraiser() {
  return (
    <div>
      <Head>
        <title>Sharity | Fundraisers</title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        <MainBanner />
        <PortfolioComponent />
        <Categories />
        {/* <CharityRaisers /> */}
        <MedicalRaisers />
        <AnimalRaisers />
        <div className="align-center">
          <Link href="#">
            <a className="btn btn-lg m-t-30 btn-alternate p-l-40 p-r-40 font-14">
              Show more categories
            </a>
          </Link>
        </div>
        <p className="p-t-20"></p>
      </div>      
    </div>
  );
}
