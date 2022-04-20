import Head from "next/head";
import React, {useState, useEffect} from "react";
import CustomComponents from "../components/custom/Custom-components"; 
export default function Home() {

  return (
    <div>
      <Head>
        <title>Sharity</title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <CustomComponents />
    </div>
  );
}
