import Head from "next/head";
import Link from "next/link";
import React, { useState, useEffect } from "react"

import { useUser } from '@auth0/nextjs-auth0';

import { Spinner, Button, Container } from "reactstrap";

import MainBanner from "../components/custom/sections/mainbanner";
import CharityRaisers from "../components/custom/sections/charityraisers";
import TextField from '@mui/material/TextField';

export default function Explorer(props) {
  const { user, error, isLoading } = useUser();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [keys, setKeys] = useState(null);
  const [showAllCategory, setShowAllCategory] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [charities, setCharities] = useState({});
  
  const handleSearch = (e) => {
    if(e.key === 'Enter'){
        findCharity()
    }
  }
  const findCharity = async () => {
    const arrSearchValue = searchValue.split(" ")
    let newCharities = {};
    setLoading(true)
    for(let key in props.charities){
        const newKey = await props.charities[key].filter((item) => {
            for(let j = 0; j < arrSearchValue.length; j ++){
                if(item['nonprofit']['name'] && item['nonprofit']['name'].toLowerCase().includes(arrSearchValue[j].toLowerCase()) || item['nonprofit']['description'] && item['nonprofit']['description'].toLowerCase().includes(arrSearchValue[j].toLowerCase())){
                    return true;
                }
            }
            return false;
        }) 
        if(newKey && newKey.length > 0)
            newCharities[key] = newKey
    }
    setCharities(newCharities)
    setLoading(false)
  }
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
    setCharities(props.charities)
  }, [data]);

  useEffect(async () => {
    if(searchValue == ''){
      setCharities(props.charities)
      setShowAllCategory(false)
    } else {
      setShowAllCategory(true)
    }
  }, [searchValue]);

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
        <div className="spacer text-center p-t-60 p-b-10">
            <Container>
                <TextField id="outlined-basic" label="Find Charities" variant="outlined" style={{width: '100%'}} value={searchValue} onKeyDown={handleSearch} onChange={(e) => setSearchValue(e.target.value)} InputProps={{endAdornment: <Button className="btn btn-primary" onClick={findCharity}>Find</Button>}} />
            </Container>
        </div>
        {loading?
        <div className="spacer text-center">
          <Spinner>
            Loading...
          </Spinner></div>:""}
          
          <div id="donate-crypto">
              
            {!loading && !showAllCategory?(keys && keys.map((item) => {
              if(data.checkedItems[item] == true){
                return (<CharityRaisers key={item+"5"} title={item} charities={charities[item]} />)
              }
            })):""}
            {!loading && !showAllCategory?(!keys && Object.keys(charities) && Object.keys(charities).slice(0,3).map((item) => {
              return (<CharityRaisers key={item+"4"} title={item} charities={charities[item]} />)
            }
            )):""}
            {!loading && showAllCategory?(keys && keys.map((item) => {
              if(data.checkedItems[item] == true && charities[item]){
                return (<CharityRaisers key={item+"3"} title={item} charities={charities[item]} />)
              }
            })):""}
            {!loading && showAllCategory?(keys && Object.keys(charities).map((item) => {
              if(keys.includes(item) && data.checkedItems[item] == true) return;
              return (<CharityRaisers key={item+"1"} title={item} charities={charities[item]} />)
            }
            )):""}
            {!loading && showAllCategory?(!keys && Object.keys(charities).map((item) => {
              return (<CharityRaisers key={item+"2"} title={item} charities={charities[item]} />)
            }
            )):""}
            {Object.keys(charities).length == 0 ? (<div className="text-center m-t-20"><span>No result to show</span></div>):""}
          </div>
        {!loading && searchValue == ''?
        <div className="align-center">
          <Link href="#">
            <a className="btn btn-lg m-t-30 btn-alternate p-l-40 p-r-40 font-14" onClick={() => setShowAllCategory(1-showAllCategory)}>
              Show {showAllCategory?'less':'all'} categories
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
    const charity = await fetch("https://api.www.every.org/api/search_v0?query=&causes="+categories[i]+"&take=100&skip=0", {
        method: `GET`,
        headers: {
          Accept: "application/text"
        }
      });
    const json = await charity.json()
    charities[categories[i]] = json['data']['nonprofits']
  }
  return {
    props: {
      charities,
    },
  };
}