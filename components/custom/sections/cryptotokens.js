/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import PartnershipCard from "../../basic/partnership-card";
import img1 from "../../../assets/images/resources/img1.jpg";
import img2 from "../../../assets/images/resources/img2.jpg";
import img3 from "../../../assets/images/resources/img3.jpg";
import img4 from "../../../assets/images/resources/img4.jpg";
import img5 from "../../../assets/images/resources/img5.jpg";
import img6 from "../../../assets/images/resources/img6.jpg";
import img7 from "../../../assets/images/resources/img7.jpg";
import img8 from "../../../assets/images/resources/img8.jpg";

const CryptoTokens = (props) => {
  return (
    <div>
      <div className="spacer">
        <Container>
            <Row>
                <Col sm={12}>
                    <h3 className="midtitle"><b>Lorem ipsum dolor sit amet, Crypto Donations</b></h3>
                </Col>
            </Row>
            <p className="text-black p-t-10 p-b-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat
            </p>
            <Row>
                <div class="et_pb_text_inner">
                    <p>
                        <a class="cointag coin-btc" href="/resources/cryptocurrency/bitcoin">Bitcoin (BTC)</a> 
                        <a class="cointag coin-eth" href="/resources/cryptocurrency/ethereum">Ethereum (ETH)</a> 
                        <a class="cointag coin-usdc" href="/resources/cryptocurrency/usd-coin">USD Coin (USDC)</a> 
                        <a class="cointag coin-dai" href="/resources/cryptocurrency/dai">Dai (DAI)</a> 
                        <a class="cointag coin-doge" href="/resources/cryptocurrency/dogecoin">Dogecoin (DOGE)</a> 
                        <a class="cointag coin-sol" href="/resources/cryptocurrency/solana-sol/">Solana (SOL)</a>
                        <a class="cointag coin-ape" href="/resources/cryptocurrency/apecoin-ape/">ApeCoin (APE)</a>
                    </p>        
                </div>
            </Row>
        </Container>
      </div>
    </div>
  );
};

export default CryptoTokens;
