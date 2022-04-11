import Head from "next/head";
import Link from "next/link";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";

import GeneralBanner from "../components/custom/sections/generalbanner";
import Submenu2 from "../components/custom/sections/submenu2";
import SubInfobar from "../components/custom/sections/subinfobar";

import donorimg from "../assets/images/landingpage/donorimg.png";

export default function Donors() {
  return (
    <div>
      <Head>
        <title>Sharity | Donate</title>
        <meta
          name="Solarity Donors"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        <GeneralBanner title="Lorem ispun doler donation" />
        <div className="spacer">
            <Container>
                <Row>
                    <Col md={7} sm={7} xs={12}>
                        <h3 className="midtitle text-black" style={{lineHeight: 1.5}}><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</b></h3>
                        <p className="p-t-20">
                            <Link href="/#">
                                <a className="btn btn-md m-t-20 btn-alternate  p-r-40 p-l-40 p-t-10 p-b-10">
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
                    <Col md={6}>
                        <h5 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Neque porro quisquam est qui</b></h5>
                        <div className="p-t-5">
                            <ul className="text-black">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Donec non velit a ipsum convallis iaculis.</li>
                                <li>In egestas felis nec ex sagittis, eu suscipit ex porttitor.</li>
                                <li>Donec congue quam eu gravida consequat.</li>
                                <li>Sed a est pellentesque, efficitur sapien vitae, viverra est.</li>
                            </ul>
                        </div>
                        <h5 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Neque porro quisquam est quidasdasd</b></h5>
                        <div className="p-t-5">
                            <ul className="text-black">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Donec non velit a ipsum convallis iaculis.</li>
                            </ul>
                        </div>
                        <h5 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Neque porro quisquam est qui</b></h5>
                        <div className="p-t-5">
                            <ul className="text-black">
                                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                                <li>Donec non velit a ipsum convallis iaculis.</li>
                            </ul>
                        </div>
                    </Col>
                    <Col md={6} className="text-black">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, metus a lobortis tempus, odio arcu euismod tortor, in venenatis ante nisl rutrum erat. Phasellus eu nunc a quam cursus efficitur. Aliquam erat volutpat. Praesent mattis sed orci ut aliquam. Suspendisse potenti. Mauris dictum nisl fringilla neque tempor tincidunt. In maximus eleifend aliquam. Phasellus quis vulputate arcu. 
                        </p>
                        <p> 
                            Praesent vel placerat justo, sed aliquet metus. Sed rhoncus diam eget justo posuere, in lobortis dui imperdiet. Vestibulum in imperdiet quam. Vestibulum eleifend commodo risus, at porta metus dictum vitae. Phasellus commodo turpis ut dui sodales pretium. Ut sagittis consequat posuere. Proin imperdiet orci fringilla accumsan porttitor. Fusce sit amet dui ut neque faucibus imperdiet. Nulla facilisi. Pellentesque imperdiet elit quis leo suscipit hendrerit. 
                        </p>
                        <p>  
                            Aenean iaculis placerat egestas. In fermentum cursus tempor. Morbi eu vestibulum massa. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec tortor justo, commodo sit amet viverra quis, varius vel ante. Etiam ac sem turpis. Curabitur sed dolor sit amet tortor pharetra sodales. Aenean eu dolor ultrices, interdum risus id, interdum leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vehicula dapibus lacinia. Aenean neque ante, pretium sit amet luctus eget, iaculis a dui. Maecenas blandit nisi ac odio elementum, quis feugiat metus facilisis.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-60">
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
                </Row>
                <Row className="m-t-40">
                    <Col md={12}>
                        <h2 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Make a Crypto Donation in 3 Easy Steps</b></h2>
                        <p className="text-black p-t-10">
                            Support a cause that matters to you by selecting a charity that accepts donations in crypto.
                        </p>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>1. Find a Charity</b></h3>
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
                        <h2 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Neque porro quisquam est qui</b></h2>
                        <p className="text-black p-t-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, metus a lobortis tempus, odio arcu euismod tortor, in venenatis ante nisl rutrum erat. Phasellus eu nunc a quam cursus efficitur. Aliquam erat volutpat. Praesent mattis sed orci ut aliquam. Suspendisse potenti. Mauris dictum nisl fringilla neque tempor tincidunt. In maximus eleifend aliquam. Phasellus quis vulputate arcu.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-60">
                    <Col md={12}>
                        <h5 className="midtitle text-black p-t-10" style={{lineHeight: 1.5}}><b>Explore Nonprofits That Accept Crypto</b></h5>
                        <p className="text-black p-t-10">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam convallis, metus a lobortis tempus, odio arcu euismod tortor, in venenatis ante nisl rutrum erat. Phasellus eu nunc a quam cursus efficitur. Aliquam erat volutpat. Praesent mattis sed orci ut aliquam. Suspendisse potenti. Mauris dictum nisl fringilla neque tempor tincidunt. In maximus eleifend aliquam. Phasellus quis vulputate arcu.
                        </p>
                    </Col>
                </Row>
                <Row className="m-t-40">
                    <Col md={12}>
                        <h3 className="midtitle text-black p-t-10" style={{lineHeight: 1.5, fontWeight: "bolder"}}><b>About The Giving Block</b></h3>
                        <p className="text-black p-t-10">
                            The Giving Block makes Bitcoin and other cryptocurrency fundraising easy for nonprofits. Empowering mission-driven organizations, charities, universities, and faith-based organizations of all sizes to leverage crypto technology to achieve their mission. Discover why cryptocurrency is the fastest growing donation method for Millennial and Gen-Z donors, at TheGivingBlock.com.
                        </p>
                        <div className="text-black p-t-10">
                            <ul>
                                <li>Website: <Link href="#"><a>https://sharity.com</a></Link></li>
                                <li>Twitter: <Link href="#"><a style={{overflowWrap: "anywhere"}}>https://twitter.com/sharity</a></Link></li>
                                <li>Linked In: <Link href="#"><a style={{overflowWrap: "anywhere"}}>https://www.linkedin.com/company/sharity/</a></Link></li>
                                <li>Facebook: <Link href="#"><a style={{overflowWrap: "anywhere"}}>https://www.facebook.com/sharity</a></Link></li>
                                <li>Instagram: <Link href="#"><a>@sharity</a></Link></li>
                                <li>YouTube: <Link href="#"><a>@sharity</a></Link></li>
                            </ul>
                        </div>
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
