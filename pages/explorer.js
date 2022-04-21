import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react"

import { useUser } from '@auth0/nextjs-auth0';

import { Spinner } from "reactstrap";

import MainBanner from "../components/custom/sections/mainbanner";
import CharityRaisers from "../components/custom/sections/charityraisers";

export default function Explorer(props) {
  const { user, error, isLoading } = useUser();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState(null);
  useEffect(async () => {
    if(user){
      console.log(user)
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
    console.log(props.charities)
  }, [data]);

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
        {loading?
        <div className="spacer text-center">
          <Spinner>
            Loading...
          </Spinner></div>:""}
          <div id="donate-crypto">
            {!loading?(keys && keys.map((item) => {
              if(data.checkedItems[item] == true){
                return (<CharityRaisers key={item} title={item} charities={props.charities[item]} />)
              }
            })):""}
            {!loading?(!keys && Object.keys(props.charities).slice(0,3).map((item) => {
              return (<CharityRaisers key={item} title={item} charities={props.charities[item]} />)
            }
            )):""}
          </div>
        {!loading?
        <div className="align-center">
          <Link href="#">
            <a className="btn btn-lg m-t-30 btn-alternate p-l-40 p-r-40 font-14">
              Show more categories
            </a>
          </Link>
        </div>:""}
        <p className="p-t-20"></p>
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const categories = [
    "aapi-led",
    "adoption",
    "afghanistan",
    "animals",
    "athletics",
    "autism",
    "black-led",
    "buddhism",
    "cancer",
    "cats",
    "christianity",
    "climate",
    "conservation",
    "coronavirus",
    "culture",
    "dance",
    "disabilities",
    "disease",
    "dogs",
    "education",
    "environment",
    "filmandtv",
    "food-security",
    "freepress",
    "gender-equality",
    "health",
    "hinduism",
    "housing",
    "humans",
    "hurricane-laura",
    "immigrants",
    "indigenous-led",
    "indigenous-peoples",
    "islam",
    "judaism",
    "justice",
    "latine-led",
    "legal",
    "lgbt",
    "libraries",
    "mental-health",
    "middle-east",
    "museums",
    "music",
    "oceans",
    "poverty",
    "racial-justice",
    "refugees",
    "religion",
    "reproductive-justice",
    "research",
    "science",
    "seniors",
    "space",
    "theater",
    "transgender",
    "ukraine",
    "veterans",
    "visualart",
    "votingrights",
    "water",
    "wildfires",
    "wildlife",
    "women-led",
    "womens-health",
    "youth"
  ]
  let charities = {}
  for ( let i = 0; i < categories.length; i ++ ){
    const charity = await fetch("https://partners.every.org/v0.2/browse/"+categories[i]+"?apiKey=72a0e0f6c64e2d13ee4108a39acfa99a");
    const json = await charity.json()
    charities[categories[i]] = json['nonprofits']
  }
  return {
    props: {
      charities,
    },
  };
}