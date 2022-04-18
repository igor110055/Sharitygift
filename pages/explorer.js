import Head from "next/head";
import Link from "next/link";

import HeaderComponent from "../components/custom/sections/headercomponent";
import BannerComponent from "../components/custom/sections/bannercomponent";
import FormBannerComponent from "../components/custom/sections/formbannercomponent";
import FeatureComponent from "../components/custom/sections/featurecomponent";
import PortfolioComponent from "../components/custom/sections/portfoliocomponent";
import PricingComponent from "../components/custom/sections/pricingcomponent";
import TeamComponent from "../components/custom/sections/teamcomponent";
import TestimonialComponent from "../components/custom/sections/testimonialcomponent";
import BlogComponent from "../components/custom/sections/blogcomponent";
import C2aComponent from "../components/custom/sections/c2acomponent";
import ContactComponent from "../components/custom/sections/contactcomponent";
import MainBanner from "../components/custom/sections/mainbanner";
import Categories from "../components/custom/sections/categories";
import CharityRaisers from "../components/custom/sections/charityraisers";
import MedicalRaisers from "../components/custom/sections/medicalraisers";
import AnimalRaisers from "../components/custom/sections/animalraisers";
import CallToAction from "../components/call-to-action/CallToAction";
// aapi-led
// adoption
// afghanistan
// animals
// athletics
// autism
// black-led
// buddhism
// cancer
// cats
// christianity
// climate
// conservation
// coronavirus
// culture
// dance
// disabilities
// disease
// dogs
// education
// environment
// filmandtv
// food-security
// freepress
// gender-equality
// health
// hinduism
// housing
// humans
// hurricane-laura
// immigrants
// indigenous-led
// indigenous-peoples
// islam
// judaism
// justice
// latine-led
// legal
// lgbt
// libraries
// mental-health
// middle-east
// museums
// music
// oceans
// poverty
// racial-justice
// refugees
// religion
// reproductive-justice
// research
// science
// seniors
// space
// theater
// transgender
// ukraine
// veterans
// visualart
// votingrights
// water
// wildfires
// wildlife
// women-led
// womens-health
// youth
export default function Explorer() {
  return (
    <div>
      <Head>
        <title>Sharity | Explore </title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        <MainBanner />
        <CharityRaisers />
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