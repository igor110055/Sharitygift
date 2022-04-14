import "../styles/scss/style.scss";
import Layout from "../layout/Layout";
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps}) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
