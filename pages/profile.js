import Head from "next/head";
import Link from "next/link";

import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function Profile({ user }) {
  return (
    <div>
      <Head>
        <title>Sharity | Profile</title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        <p className="p-t-20">
          {user.name}
        </p>
      </div>
      
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();