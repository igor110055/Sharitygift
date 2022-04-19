import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react"

import { useUser } from '@auth0/nextjs-auth0';

import { Spinner } from "reactstrap";

import MainBanner from "../components/custom/sections/mainbanner";
import CharityRaisers from "../components/custom/sections/charityraisers";
import MedicalRaisers from "../components/custom/sections/medicalraisers";
import AnimalRaisers from "../components/custom/sections/animalraisers";

export default function Explorer() {
  const { user, error, isLoading } = useUser();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState(null);
  
  useEffect(async () => {
    if(user){
      setLoading(true)
      const res = await fetch("/api/user", {
        method: 'post',
        body: JSON.stringify(user)
      });
      const json = await res.json();
      await setData(json)
      setLoading(false)
    }
  }, [user]);

  useEffect(async () => {
    if(data.checkedItems)
      setKeys(Object.keys(data.checkedItems));
  }, [data]);
  

  if(loading){
    return (<><Head>
      <title>Sharity | Profile</title>
      <meta
        name="Sharity"
        content="Crypto Donation"
      />
      <link rel="icon" href="/favicon.png" />
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
    </Head><div className="p-t-102">
      <div className="spacer text-center">
        <Spinner>
          Loading...
        </Spinner>
      </div>
    </div></>)
  }
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
        {keys && keys.map((item) => {
          
          if(data.checkedItems[item] == true){
            console.log("yessss")
            return (<CharityRaisers key={item} title={item} />)
          }
        })}
        {/* <CharityRaisers />
        <MedicalRaisers />
        <AnimalRaisers /> */}
        {user?"ddd":"eee"}
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
