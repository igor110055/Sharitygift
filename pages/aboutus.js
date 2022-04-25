import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

import SubInfobar from "../components/custom/sections/subinfobar";
import ReactPlayer from 'react-player/youtube';

import donorimg from "../assets/images/landingpage/donorimg.png";

export default function Donors() {
  return (
    <div>
      <Head>
        <title>Sharity | Donors</title>
        <meta
          name="Solarity Donors"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        
        <SubInfobar title="About Sharity's Gift" description="" />
        <div className="spacer">
            <Container>
                <Row>
                    <Col md={7} sm={7} xs={12}>
                        <h3 className="" style={{lineHeight: 1.5}}>Sharity&apos;s Gift was founded on the principle to help facilitate giving around the world digitally. Our mission is to help nonprofits, charities, and organizations increase their funding and reach out to new demographics. Cryptocurrency is a worldwide currency and can help people around the world.</h3>
                        <p className="p-t-20">
                            <Link href="/explorer">
                                <a className="btn btn-md m-t-20 btn-primary  p-r-40 p-l-40 p-t-10 p-b-10">
                                    <span className="m-t-10">LinkedIn</span>
                                </a>
                            </Link>
                        </p>
                    </Col>
                    <Col md={5} sm={5} xs={12}>
                    <div className='player-wrapper'>
                      <ReactPlayer
                        className='react-player'
                        url='https://www.youtube.com/watch?v=ysz5S6PUM-U'
                        width='100%'
                        height='100%'
                      />
                    </div>
                    </Col>
                </Row>
            </Container>
        </div>
            
        
        <p className="p-t-20"></p>
      </div>
      
    </div>
  );
}
