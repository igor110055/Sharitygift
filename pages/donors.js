import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

import GeneralBanner from "../components/custom/sections/generalbanner";
import Submenu2 from "../components/custom/sections/submenu2";
import SubInfobar from "../components/custom/sections/subinfobar";
import PdfViewerComponent from '../components/PdfViewerComponent';

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
        
        {/* <GeneralBanner title="Leading the Way in Crypto Donations" /> */}
        <SubInfobar title="Support a charity or non-profit by donating crypto today!" description="The Sharity donation platform is an easy-to-use and specially organized list of over 1400 charities &amp; causes that users can donate crypto to with the click of a button! Find the cause that you want to be a part of and donate safely, simply, and securely today!" />
        {/* <Submenu2 /> */}
        <div className="spacer">
            <Container>
                <Row>
                    <Col md={7} sm={7} xs={12}>
                        <h3 className="midtitle text-black" style={{lineHeight: 1.5}}><b>Because of the blockchain&apos;s capacity, crypto donations are highly organized and easily traceable. You can be confident that every dollar you provide will go directly to the charity of your choosing.</b></h3>
                        <p className="p-t-20">
                            <Link href="/explorer">
                                <a className="btn btn-md m-t-20 btn-primary  p-r-40 p-l-40 p-t-10 p-b-10">
                                    <span className="m-t-10">Make a Donation</span>
                                </a>
                            </Link>
                        </p>
                    </Col>
                    <Col md={5} sm={5} xs={12}>
                        <Image src={donorimg} alt="sharity banner" />
                    </Col>
                </Row>
                <Row className="m-t-60">
                    <Col md={12}>
                        <h5 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Traditional Donation Platforms</b></h5>
                        <div className="p-t-5">
                            <ul className="text-black">
                                <li>Traditional donation platforms are inefficient and very outdated.</li>
                                <li>Sometimes you have to jump through hoops to find the right charity for you.</li>
                                <li>You don&apos;t know for certain whether your funds will reach the right hands or not.</li>
                                <li>Bank transfers and checks take days to fully process and clear.</li>
                                <li>Nonprofits are usually subject to high chargebacks from credit card companies. </li>
                            </ul>
                        </div>
                        <h5 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>The Benefits of Donating through the Sharity Platform</b></h5>
                        <div className="p-t-5">
                            <ul className="text-black">
                                <li>The Sharity platform is a nonprofit organization.</li>
                                <li>The platform is a one-stop shop to house charities across nations.</li>
                                <li>Because of the blockchain&apos;s capacity, donations in crypto are highly organized and easily traceable.</li>
                                <li>Crypto donors pay no capital gains taxes on gifts to 501(c)3 organizations.</li>
                                <li>Even when donating anonymously, you will have the option to receive a tax receipt for your crypto donation.</li>
                                <li>Donating in crypto advances awareness and institutional adoption.</li>
                            </ul>
                        </div>
                    </Col>
                    {/* <Col md={6} className="text-black">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, metus a lobortis tempus, odio arcu euismod tortor, in venenatis ante nisl rutrum erat. Phasellus eu nunc a quam cursus efficitur. Aliquam erat volutpat. Praesent mattis sed orci ut aliquam. Suspendisse potenti. Mauris dictum nisl fringilla neque tempor tincidunt. In maximus eleifend aliquam. Phasellus quis vulputate arcu. 
                        </p>
                        <p> 
                            Praesent vel placerat justo, sed aliquet metus. Sed rhoncus diam eget justo posuere, in lobortis dui imperdiet. Vestibulum in imperdiet quam. Vestibulum eleifend commodo risus, at porta metus dictum vitae. Phasellus commodo turpis ut dui sodales pretium. Ut sagittis consequat posuere. Proin imperdiet orci fringilla accumsan porttitor. Fusce sit amet dui ut neque faucibus imperdiet. Nulla facilisi. Pellentesque imperdiet elit quis leo suscipit hendrerit. 
                        </p>
                        <p>  
                            Aenean iaculis placerat egestas. In fermentum cursus tempor. Morbi eu vestibulum massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tortor justo, commodo sit amet viverra quis, varius vel ante. Etiam ac sem turpis. Curabitur sed dolor sit amet tortor pharetra sodales. Aenean eu dolor ultrices, interdum risus id, interdum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dapibus lacinia. Aenean neque ante, pretium sit amet luctus eget, iaculis a dui. Maecenas blandit nisi ac odio elementum, quis feugiat metus facilisis.
                        </p>
                    </Col> */}
                </Row>
                {/* <Row className="m-t-60">
                    <Col md={12}>
                        <h2 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Neque porro quisquam est qui</b></h2>
                        <p className="text-black p-t-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, metus a lobortis tempus, odio arcu euismod tortor, in venenatis ante nisl rutrum erat. Phasellus eu nunc a quam cursus efficitur. Aliquam erat volutpat. Praesent mattis sed orci ut aliquam. Suspendisse potenti. Mauris dictum nisl fringilla neque tempor tincidunt. In maximus eleifend aliquam. Phasellus quis vulputate arcu. 
                        </p>
                        <p className="text-black"> 
                            Praesent vel placerat justo, sed aliquet metus. Sed rhoncus diam eget justo posuere, in lobortis dui imperdiet. Vestibulum in imperdiet quam. Vestibulum eleifend commodo risus, at porta metus dictum vitae. Phasellus commodo turpis ut dui sodales pretium. Ut sagittis consequat posuere. Proin imperdiet orci fringilla accumsan porttitor. Fusce sit amet dui ut neque faucibus imperdiet. Nulla facilisi. Pellentesque imperdiet elit quis leo suscipit hendrerit. 
                        </p>
                        <p className="text-black">  
                            Aenean iaculis placerat egestas. In fermentum cursus tempor. Morbi eu vestibulum massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tortor justo, commodo sit amet viverra quis, varius vel ante. Etiam ac sem turpis. Curabitur sed dolor sit amet tortor pharetra sodales. Aenean eu dolor ultrices, interdum risus id, interdum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dapibus lacinia. Aenean neque ante, pretium sit amet luctus eget, iaculis a dui. Maecenas blandit nisi ac odio elementum, quis feugiat metus facilisis.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-40">
                    <Col md={12}>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Aenean iaculis placerat egestas. In fermentum</b></h3>
                        <p className="text-black p-t-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, metus a lobortis tempus, odio arcu euismod tortor, in venenatis ante nisl rutrum erat. Phasellus eu nunc a quam cursus efficitur. Aliquam erat volutpat. Praesent mattis sed orci ut aliquam. Suspendisse potenti. Mauris dictum nisl fringilla neque tempor tincidunt. In maximus eleifend aliquam. Phasellus quis vulputate arcu. 
                        </p>
                        <p className="text-black"> 
                            Praesent vel placerat justo, sed aliquet metus. Sed rhoncus diam eget justo posuere, in lobortis dui imperdiet. Vestibulum in imperdiet quam. Vestibulum eleifend commodo risus, at porta metus dictum vitae. Phasellus commodo turpis ut dui sodales pretium. Ut sagittis consequat posuere. Proin imperdiet orci fringilla accumsan porttitor. Fusce sit amet dui ut neque faucibus imperdiet. Nulla facilisi. Pellentesque imperdiet elit quis leo suscipit hendrerit. 
                        </p>
                        <p className="text-black">  
                            Aenean iaculis placerat egestas. In fermentum cursus tempor. Morbi eu vestibulum massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tortor justo, commodo sit amet viverra quis, varius vel ante. Etiam ac sem turpis. Curabitur sed dolor sit amet tortor pharetra sodales. Aenean eu dolor ultrices, interdum risus id, interdum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dapibus lacinia. Aenean neque ante, pretium sit amet luctus eget, iaculis a dui. Maecenas blandit nisi ac odio elementum, quis feugiat metus facilisis.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-40">
                    <Col md={12}>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>elit quis leo suscipit hendreri</b></h3>
                        <p className="text-black p-t-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, metus a lobortis tempus, odio arcu euismod tortor, in venenatis ante nisl rutrum erat. Phasellus eu nunc a quam cursus efficitur. Aliquam erat volutpat. Praesent mattis sed orci ut aliquam. Suspendisse potenti. Mauris dictum nisl fringilla neque tempor tincidunt. In maximus eleifend aliquam. Phasellus quis vulputate arcu. 
                        </p>
                        <p className="text-black"> 
                            Praesent vel placerat justo, sed aliquet metus. Sed rhoncus diam eget justo posuere, in lobortis dui imperdiet. Vestibulum in imperdiet quam. Vestibulum eleifend commodo risus, at porta metus dictum vitae. Phasellus commodo turpis ut dui sodales pretium. Ut sagittis consequat posuere. Proin imperdiet orci fringilla accumsan porttitor. Fusce sit amet dui ut neque faucibus imperdiet. Nulla facilisi. Pellentesque imperdiet elit quis leo suscipit hendrerit. 
                        </p>
                        <p className="text-black">  
                            Aenean iaculis placerat egestas. In fermentum cursus tempor. Morbi eu vestibulum massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tortor justo, commodo sit amet viverra quis, varius vel ante. Etiam ac sem turpis. Curabitur sed dolor sit amet tortor pharetra sodales. Aenean eu dolor ultrices, interdum risus id, interdum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dapibus lacinia. Aenean neque ante, pretium sit amet luctus eget, iaculis a dui. Maecenas blandit nisi ac odio elementum, quis feugiat metus facilisis.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-40">
                    <Col md={12}>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>elit quis leo suscipit hendreri</b></h3>
                        <p className="text-black p-t-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, odio arcu euismod tortor, in venenatis ante nisl rutrum erat.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-60">
                    <Col md={6}>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Donate with NFT</b></h3>
                        <p className="p-t-5 text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, metus a lobortis tempus, odio arcu euismod tortor, in venenatis ante nisl rutrum erat. Phasellus eu nunc a quam cursus efficitur. Aliquam erat volutpat. Praesent mattis sed orci ut aliquam. Suspendisse potenti. Mauris dictum nisl fringilla neque tempor tincidunt. In maximus eleifend aliquam. Phasellus quis vulputate arcu. 
                        </p>
                        <p className="text-black"> 
                            Praesent vel placerat justo, sed aliquet metus. Sed rhoncus diam eget justo posuere, in lobortis dui imperdiet. Vestibulum in imperdiet quam. Vestibulum eleifend commodo risus, at porta metus dictum vitae. Phasellus commodo turpis ut dui sodales pretium. Ut sagittis consequat posuere. Proin imperdiet orci fringilla accumsan porttitor. Fusce sit amet dui ut neque faucibus imperdiet. Nulla facilisi. Pellentesque imperdiet elit quis leo suscipit hendrerit. 
                        </p>
                    </Col>
                    <Col md={6} className="text-black">
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Donate with NFT</b></h3>
                        <p className="p-t-5 text-black">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, metus a lobortis tempus, odio arcu euismod tortor, in venenatis ante nisl rutrum erat. Phasellus eu nunc a quam cursus efficitur. Aliquam erat volutpat. Praesent mattis sed orci ut aliquam. Suspendisse potenti. Mauris dictum nisl fringilla neque tempor tincidunt. In maximus eleifend aliquam. Phasellus quis vulputate arcu. 
                        </p>
                        <p className="text-black"> 
                            Praesent vel placerat justo, sed aliquet metus. Sed rhoncus diam eget justo posuere, in lobortis dui imperdiet. Vestibulum in imperdiet quam.
                        </p>
                    </Col>
                </Row> */}
                <Row className="m-t-40">
                    <Col md={12}>
                        <h2 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Make a Crypto Donation in 3 Easy Steps</b></h2>
                        <p className="text-black p-t-10">
                            Support a cause that matters to you by selecting a charity that accepts donations in crypto.
                        </p>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>1. Find your favorite charitable organization</b></h3>
                        <p className="text-black p-t-10">
                            Either search the charity by name, or choose a category using the dropdown option. Is your favorite charity not listed? Contact us to nominate a worthy organization. We have made it possible for several nonprofits to accept crypto because they were nominated by donors interested in supporting their cause.
                        </p>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>2. Make Your Crypto Donation</b></h3>
                        <p className="text-black p-t-10">
                            First, select Bitcoin, Ethereum or another cryptocurrency you want to donate from the dropdown, and enter your donation amount in the crypto of your choice or USD. Next, fill out some basic information about you (optional), and enter an email address where you would like to receive a tax receipt. Third, a dynamic wallet address will be generated for your donation which is linked directly to the charity’s wallet. We use dynamic wallet addresses to protect your privacy, but these addresses can be re-used if you’d like! Use this to send the cryptocurrency from your wallet or exchange account.
                        </p>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>3. Get Your Tax Receipt</b></h3>
                        <p className="text-black p-t-10">
                            Donors can choose to receive a tax receipt via email. This will arrive as soon as your donation has received the minimum amount of confirmations on the blockchain, so keep a lookout for it. If you can’t see it, double check your spam or junk mail, and contact The Giving Block if you require it to be resent.
                        </p>
                        <p className="text-black">
                            Be sure to file away your tax receipt in a safe location that is accessible when filing your tax return and use it for proof of your donation.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-40">
                    <Col md={12}>
                        <h2 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>The benefits of the blockchain&apos;s capacity</b></h2>
                        <p className="text-black p-t-10">
                        Traditional donation methods such as credit card payments, bank account transfers, and checks can take days (if you&apos;re lucky!) to process completely. By donating in crypto through the Sharity platform, the transaction block will be confirmed most likely in seconds or minutes. The nonprofit receives the funds directly in their crypto wallet and the process is final and complete. This means that you can verify the transaction status in the public ledger instantly, and the nonprofit have full access to your gift from anywhere in the world. 
                        Crypto donations are fast, transparent, and secure. The blockchain relies on networks of thousands of computers to verify transactions, which makes it nearly impossible to tamper with the ledger. This layer of security should put donors at ease, especially when making large financial gifts. This means that you can be confident that your gift was directly received by the charity of your choosing.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-60">
                    <Col md={12}>
                        <h4 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>The impact and value of your crypto donation</b></h4>
                        <p className="text-black p-t-10">
                            An additional benefit of providing a crypto gift as a crypto investor, the ability to donate crypto assets for the purpose of providing an investment to the charity of your choosing. Your chosen charity might choose to HODL your given investment, as opposed to converting it to fiat methods automatically. If this is the case, your donation can appreciate in monetary value far beyond the initial value of your gift. By sending donations in the form of crypto investments, you can be the change that set-up your chosen nonprofit for long-term success.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-40">
                    <Col md={12}>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5, fontWeight: "bolder"}}><b>About Sharity</b></h3>
                        <p className="text-black p-t-10">
                            Sharity makes Ethereum and other cryptocurrency fundraising easy for nonprofits. Empowering mission-driven organizations, charities, universities, and faith-based organizations of all sizes to leverage crypto technology to achieve their mission. Discover why cryptocurrency is the fastest growing donation method for Millennial and Gen-Z donors.
                        </p>
                        {/* <div className="text-black p-t-10">
                            <ul>
                                <li>Website: <Link href="https://sharitytoken.com" target="_blank" rel="noreferrer"><a>https://sharitytoken.com</a></Link></li>
                                <li>Twitter: <Link href="#"><a style={{overflowWrap: "anywhere"}}>https://twitter.com/sharity</a></Link></li>
                                <li>Linked In: <Link href="#"><a style={{overflowWrap: "anywhere"}}>https://www.linkedin.com/company/sharity/</a></Link></li>
                                <li>Facebook: <Link href="#"><a style={{overflowWrap: "anywhere"}}>https://www.facebook.com/sharity</a></Link></li>
                                <li>Instagram: <Link href="#"><a>@sharity</a></Link></li>
                                <li>YouTube: <Link href="#"><a>@sharity</a></Link></li>
                            </ul>
                        </div> */}
                    </Col>
                </Row>
            </Container>
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
