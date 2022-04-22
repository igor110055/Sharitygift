import Head from "next/head";
import React, {useState, useEffect} from "react";
import { ethers } from 'ethers';
import Link from "next/link";
import { Row, Col, Container, Card, CardBody, Form, FormGroup, Label, Input, Button, InputGroup, InputGroupText, Toast, ToastBody, ToastHeader } from "reactstrap";
import toast, { Toaster } from 'react-hot-toast';

import contract from '../../contracts/contract.json';

import Fundraiser from "../../components/basic/fundraiser"

import DonateBanner from "../../components/custom/sections/donatebanner";

const contractAddress = "0xF4d1c3C79BC78F7ecA41c01E9476E27A0465914f";
const abi = contract.abi;

export default function Donate(props) {
    const [anonym, setAnonym] = useState(false);
    const [countries, setCountries] = useState(null);
    const [rate, setRate] = useState(0);
    const [formdata, setFormData] = useState({});
    const [usd, setUSD] = useState(0);
    const [eth, setETH] = useState(0);
    const [ethusd, setDirection] = useState(true);
    const [toggleToast, setToggle] = useState(true);
    const [currentAccount, setCurrentAccount] = useState(null);
    const [inputValues, setInputValues] = useState({});
    // const countries = fetch("https://restcountries.com/v2/all")
    useEffect(async () => {
        const countries = await fetch("https://restcountries.com/v2/all")
        const data = await countries.json()
        setCountries(data)
        const rates = await fetch("https://api.coinbase.com/v2/exchange-rates?currency=ETH")
        const rate = await rates.json()
        setRate(rate.data.rates.USD)
    }, []);

    const handleInputChange = (e) => {
        setInputValues({...inputValues, [e.target.name]: e.target.value})
        console.log(inputValues)
    }
    const handleChange = (e) => {
        console.log(e.target.value)
        formdata[e.target.id] = e.target.value
        formdata["usd"] = e.target.value * rate
        console.log(formdata)
        setFormData(formdata)
    }
    const handleEthChange = (e) => {
        setETH(e.target.value)
        setUSD(e.target.value * rate)
    }
    const handleUsdChange = (e) => {
        setUSD(e.target.value)
        setETH(e.target.value / rate)
    }
    const saveTransaction = async (eth, txnhash) => {
        const res = await fetch("/api/transaction", {
            method: 'post',
            body: JSON.stringify({...inputValues, ...props, eth, txnhash})
        });
    }
    const handleFocus = (event) => event.target.select();

    const checkWalletIsConnected = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            toast.error("Make sure you have Metamask installed!");
            return;
        } else {
            console.log("Wallet exists! We're ready to go!");
        }

        const accounts = await ethereum.request({ method: 'eth_accounts' });
        if (accounts.length !== 0) {
            const account = accounts[0];
            console.log("Found an authorized account:", account);
            setCurrentAccount(account);
        } else {
            toast.error("No authorized account found! Please connnect wallet first.");
        }
    }

    const connectWalletHandler = async () => {
        const { ethereum } = window;

        if (!ethereum) {
            toast.error("Please install Metamask!");
            return;
        }

        try {
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            console.log("Found an account! Address:", accounts[0]);
            setCurrentAccount(accounts[0]);
        } catch (err) {
            console.log(err);
        }
    }

    const checkInputInfo = async () => {
        if(!anonym && (!inputValues['email'] || !inputValues['firstname'] || !inputValues['lastname'])){
            toast.error("Please input the information");
            return;
        }
    }

    const donateHandler = async () => {
        checkInputInfo()
        checkWalletIsConnected()
        try {
            const { ethereum } = window;

            if (ethereum) {
                const provider = new ethers.providers.Web3Provider(ethereum);
                const { chainId } = await provider.getNetwork()
                if(chainId !== 4){
                    toast.error("Please make sure that you choose Rinkeby network on your wallet")
                    return
                }
                const signer = provider.getSigner();
                const nftContract = new ethers.Contract(contractAddress, abi, signer);
                console.log("Initialize payment");
                try{
                    let nftTxn = await nftContract.donate("0x1640861ABB10F6C898de13e63aA58D433EE49f90", 5, {
                        value: ethers.utils.parseEther(Number(eth).toFixed(4).toString())
                    });
                    console.log("Mining... please wait");
                    toast.success((<span className="text-center">Transaction has been sent <br></br> <a href={"https://rinkeby.etherscan.io/tx/"+nftTxn.hash} target="_blank" rel="noreferrer">{nftTxn.hash.substring(0, 10)+"...."+nftTxn.hash.slice(-4)} <i className="fa fa-external-link"></i></a></span>))
                    saveTransaction(Number(eth).toFixed(4), nftTxn.hash)
                    await nftTxn.wait();
                } catch ( err ) {
                    if(err.code == "INSUFFICIENT_FUNDS"){
                        toast.error((<span>Insufficient fund. You can deposit <a href="#">here</a></span>))
                    } else if(err.code == "UNPREDICTABLE_GAS_LIMIT"){
                        toast.error('Unpredictable gas limit. Input valid amount')
                    } else if(err.code == "4001"){
                        toast.error("Transaction has been rejected")
                    }
                    console.log(err)
                    // const code = err.data.replace('Reverted ','');
                    // console.log({err});
                    // let reason = ethers.utils.toUtf8String('0x' + code.substr(138));
                    // console.log('revert reason:', reason);
                }
                console.log(`Mined, transaction hash: ${nftTxn.hash}`);
            } else {
                console.log("Ethereum object does not exit");
            }
        } catch (err) {
            console.log(err);
        }
    }

  return (
    <div>
      <Head>
        <title>Sharity | Donate</title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div>
      <DonateBanner imgSrc={props.backImg} />
        <Toaster position="top-center"
                reverseOrder={false}
                gutter={8}
                containerClassName=""
                containerStyle={{}}
                toastOptions={{
                    // Define default options
                    className: '',
                    duration: 7000,
                    style: {
                        width: '100%',
                        height: '100px',
                    },
                    // Default options for specific types
                    success: {
                        duration: 20000,
                        theme: {
                            primary: 'green',
                            secondary: 'black',
                        },
                    },
                }} ></Toaster>
        <Container className="donate-container">
            <Row>
                <Col md="12">
                    <h3 className="text-primary font-weight-bold">Donate Crypto</h3>
                </Col>
            </Row>
          <Row className="m-t-20">
            <Col md="4">
              <Fundraiser imgSrc={props.imgSrc} buttonShow={false} title={props.title} description={props.description} facebookUrl={props.facebookUrl} locationAddress={props.locationAddress} numSupport={props.numSupport} />
            </Col>
            <Col md="5">
                <Form className="row">
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="anonym" type="checkbox" checked={anonym} onChange={() => setAnonym(1-anonym)} />
                        <Label htmlFor="anonym"> Donate Anonymously </Label>
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Input type="text" className="form-control" name="firstname" required disabled={anonym} placeholder="First Name&#42;" onChange={handleInputChange} value={inputValues['firstname'] || ''} />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Input type="text" className="form-control" name="lastname" required disabled={anonym} placeholder="Last Name&#42;" onChange={handleInputChange} value={inputValues['lastname'] || ''} />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input type="text" className="form-control" name="email" required disabled={anonym} placeholder="Email&#42;" onChange={handleInputChange}  value={inputValues['email'] || ''} />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input type="select" name="country" required disabled={anonym} placeholder="Country" onChange={handleInputChange} value={inputValues['country'] || ''}  >
                            <option key="-">-</option>
                            {
                                countries?countries.map((country) => <option key={country.name}>{country.name}</option>):""
                            }
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input type="text" className="form-control" name="state" required disabled={anonym} placeholder="State/Province/Region" onChange={handleInputChange} value={inputValues['state'] || ''} />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input type="text" className="form-control" name="address1" required disabled={anonym} placeholder="Address 1" onChange={handleInputChange} value={inputValues['address1'] || ''} />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input type="text" className="form-control" name="address2" required disabled={anonym} placeholder="Address 2" onChange={handleInputChange} value={inputValues['address2'] || ''} />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input type="text" className="form-control" name="city" required disabled={anonym} placeholder="City" onChange={handleInputChange} value={inputValues['city'] || ''} />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input type="text" className="form-control" name="zip" required disabled={anonym} placeholder="Zip/Postal code" onChange={handleInputChange} value={inputValues['zip'] || ''} />
                    </FormGroup>
                </Form>
            </Col>
            <Col md="3">
                <Form className="row">
                    <FormGroup className="col-md-12">
                        <Label htmlFor="eth">Enter Amount</Label>
                    </FormGroup>
                    <FormGroup className="col-md-10 m-b-0">
                        <InputGroup>
                            <InputGroupText>
                            {ethusd?"$":"ETH"}
                            </InputGroupText>
                            <Input type="number" className="form-control" id="usd" required placeholder={ethusd?"USD":"ETH"} onChange={ethusd?handleUsdChange:handleEthChange} onFocus={handleFocus} value={ethusd?usd:eth} />
                        </InputGroup>
                    </FormGroup>
                    <FormGroup className="col-md-10">
                        <hr />
                        <InputGroup>
                            <InputGroupText>
                            {ethusd?"ETH":"$"}
                            </InputGroupText>
                            <Input type="number" className="form-control" id="eth" required placeholder={ethusd?"ETH":"USD"} onChange={ethusd?handleEthChange:handleUsdChange} onFocus={handleFocus} value={ethusd?eth:usd} />
                        </InputGroup>
                        
                    </FormGroup>
                    <FormGroup className="col-md-2 p-l-0">
                        <Button type="button" className="btn btn-icon waves-effect waves-light" onClick={() => setDirection(1-ethusd)}><i className="fa fa-sort"></i></Button>
                    </FormGroup>
                    {!currentAccount ? <FormGroup className="col-md-12">
                        <Button type="button" className="btn btn-icon waves-effect waves-light" onClick={connectWalletHandler} >Connect Wallet</Button>
                    </FormGroup>: ""}
                    
                    <FormGroup className="col-md-12">
                        Wallet Address: <span style={{whiteSpace: "nowrap"}}>{currentAccount ? currentAccount.substring(0, 8)+"...."+ currentAccount.slice(-6): "No Wallet Connected"}</span>
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Button type="button" className="btn btn-primary waves-effect waves-light" onClick={donateHandler}>Donate</Button>
                    </FormGroup>
                </Form>
            </Col>
          </Row>
        </Container>
        <p className="p-b-40"></p>
      </div>
      
    </div>
  );
}

export async function getServerSideProps({query}) {
    return {
        props: query, // will be passed to the page component as props
    }
}
