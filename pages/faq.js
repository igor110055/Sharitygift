import Head from "next/head";
import React, {useState} from "react";

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, Row, Col } from "reactstrap";
import GeneralBanner from "../components/custom/sections/generalbanner";

export default function Faq() {
    const [ toggle, setToggle ] = useState(false)
    const toggleAccordion = () => {
        setToggle(1-toggle)
    }
  return (
    <div>
      <Head>
        <title>Sharity | FAQ</title>
        <meta name="Sharity" content="Crypto Donation" />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      <div className="p-t-102">
        <GeneralBanner title="FAQ" />
        <div clsssName="spacer">
            <Container className="m-t-40">
                <Row>
                    <Col md={12}>
                        <Accordion className="m-b-20">
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                                style={{backgroundColor: "#F1D34D"}}
                            >
                            <Typography>How much does it cost to be listed on the Sharity App?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                You will be able to be listed on the Sharity app at no cost to you! We only have a small transaction fee that is automatically deducted.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="m-b-20">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{backgroundColor: "#F1D34D"}}
                            >
                            <Typography>Are cryptocurrency donations recognized by the IRS?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Since cryptocurrencies are classified as property by the IRS, donations of cryptocurrencies to 501c3 charities are taxed like stocks.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="m-b-20">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{backgroundColor: "#F1D34D"}}
                            >
                            <Typography>Why donate cryptocurrency?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Crypto donations to registered charities do not count as capital gains, so you can deduct the donation from your taxes. Donating crypto can ultimately reduce your tax liability. Which would you rather donate to, the IRS or your favorite cause?
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="m-b-20">
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel2a-content"
                            id="panel2a-header"
                            style={{backgroundColor: "#F1D34D"}}
                            >
                            <Typography>How do I receive my receipt?</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                Sharity is a non profit organization and as we await our 501c3 status please get a direct tax receipt from the charity you are donating too. <br></br>
                                You can email or call a direct line of communication to that organization and we will make contact with these organizations so they are aware of the process.
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Col>
                </Row>
            </Container>
            
        </div>
      </div>
      
    </div>
  );
}
