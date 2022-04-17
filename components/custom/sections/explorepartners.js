/* eslint-disable */
import React, {useState} from "react";
import { Row, Col, Container, Card, CardBody, Form, FormGroup, Label, Input, Button, Select, Option, ButtonGroup,InputGroupText,InputGroup  } from "reactstrap";
import Link from "next/link";
import PdfViewerComponent from '../../PdfViewerComponent.js';

const ExplorePartners = () => {
  const [role, setRole] = useState(0);
  const [picture, setPicture] = useState(null);
  const [agreeImgData, setAgreeImgData] = useState(null);
  const [disagreeImgData, setDisagreeImgData] = useState(null);
  const onChangeAgreePicture = e => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setAgreeImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  const onChangeDisagreePicture = e => {
    if (e.target.files[0]) {
      setPicture(e.target.files[0]);
      const reader = new FileReader();
      reader.addEventListener("load", () => {
        setDisagreeImgData(reader.result);
      });
      reader.readAsDataURL(e.target.files[0]);
    }
  };
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row>
            <Col md="12">
              <h2 className="midtitle">Become a Partner</h2>
              <p className="text-black p-t-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </Col>
          </Row>
          <Row className="m-t-20">
            <Col md="7" sm="12">
              <ButtonGroup>
                <Button
                  color={!role?"primary":"light-reverse"}
                  size="sm"
                  onClick={() => setRole(0)}
                >
                  Individual
                </Button>
                <Button
                  color={role?"primary":"light-reverse"}
                  size="sm"
                  onClick={() => setRole(1)}
                >
                  Charity
                </Button>
              </ButtonGroup>
            </Col>
            <PdfViewerComponent
              document={"Document.pdf"}
            />
            
            {!role?<Col md="7" sm="12" className="m-t-20">
              <h3>Personal Donation Request Questionnaire</h3>
            </Col>:""}
            {role?<Col md="7" sm="12" className="m-t-20">
              <h3>Donation Request Questionnaire</h3>
              <Form className="row">
                <FormGroup className="col-md-12">
                  <Label htmlFor="businessrequestassistance">Business Request Assistance</Label>
                  <Input type="text" className="form-control" id="businessrequestassistance" name="businessrequestassistance" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="businessaddressstreet">Business Address</Label>
                  <InputGroup>
                    <Input type="text" className="form-control" id="businessaddressstreet" name="businessaddressstreet" /><InputGroupText>
                      Street Address
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>
                <FormGroup className="col-md-12">
                  <InputGroup>
                    <Input type="text" className="form-control" id="businessstreetcity" name="businessstreetcity" /><InputGroupText>
                      City, State, Zip
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>

                <FormGroup className="col-md-12">
                  <Label htmlFor="phonenumbermain">Phone Number</Label>
                  <InputGroup>
                    <Input type="text" className="form-control" id="phonenumbermain" name="phonenumbermain" /><InputGroupText>
                      Main
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>
                <FormGroup className="col-md-12">
                  <InputGroup>
                    <Input type="text" className="form-control" id="phonenumbercontact" name="phonenumbercontact" /><InputGroupText>
                      Contact Person / Ext
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>
                <FormGroup className="col-md-12">
                  <InputGroup>
                    <Input type="text" className="form-control" id="phonenumberfax" name="phonenumberfax" /><InputGroupText>
                      Fax
                    </InputGroupText>
                  </InputGroup>
                </FormGroup>
              </Form>
              <div className="text-center m-t-20">
                <h4><b>BUSINESS QUESTIONS</b></h4>
                <h5>PLEASE ANSWER QUESTIONS IN DETAIL</h5>
                <h6><b><i>&#40;Please note that all donations made through this app will be made in Crypto Currency&#41;</i></b></h6>
              </div>
              <Form className="row">
                <FormGroup className="col-md-12">
                  <Label htmlFor="howlongexistence">1&#41; How long has your business been in existence&#63; Conception date&#63;</Label>
                  <Input type="text" className="form-control" id="howlongexistence" name="howlongexistence" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="mission">2&#41; What is your mission&#63;</Label>
                  <Input type="textarea" className="form-control" id="mission" name="mission" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="taxexemptstatus">3&#41; Does your busines hold a valid and current 501c3 tax exempt status with the IRS? &#40;yes or no&#41;</Label>
                  <Input type="text" className="form-control" id="taxexemptstatus" name="taxexemptstatus" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="mission">4&#41; If yes, What is your EIN Number&#63;</Label>
                  <Input type="textarea" className="form-control" id="mission" name="mission" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="goodstanding">5&#41; Is your business in good standings&#63; &#40;Yes or No&#41;</Label>
                  <Input className="form-control" id="goodstanding" name="goodstanding" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="whynotgoodstanding">If no, please tell us why&#63;</Label>
                  <Input type="textarea" className="form-control" id="whynotgoodstanding" name="whynotgoodstanding" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="litigation">6&#41; Are there any pending or expected litigations involving your organization&#63; &#40;Yes or No&#41;</Label>
                  <Input className="form-control" id="litigation" name="litigation" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="litigationexplain">If yes, please explain</Label>
                  <Input type="textarea" className="form-control" id="litigationexplain" name="litigationexplain" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="criminalbackground">7&#41; Does any employee/volunteer have a criminal background, is awaiting trial, or have a pending criminal or civil case pending&#63; &#40;Yes or No&#41;</Label>
                  <Input className="form-control" id="criminalbackground" name="criminalbackground" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="criminalbackgroundexplain">If yes, please explain</Label>
                  <Input type="textarea" className="form-control" id="criminalbackgroundexplain" name="criminalbackgroundexplain" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="employees">8&#41; How many employees does your organization have&#63;</Label>
                  <Input type="text" className="form-control" id="employees" name="employees" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="operatedby">9&#41; Is your organization operated by a board of directors or a person&#63;</Label>
                  <Input type="text" className="form-control" id="operatedby" name="operatedby" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="paidsalary">10&#41; Are you and/or any employees paid a salary&#63; &#40;Yes or No&#41;</Label>
                  <Input type="text" className="form-control" id="paidsalary" name="paidsalary" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="goals">11&#41; What are the long- and short-term goals of your organization&#63;</Label>
                  <Input type="textarea" className="form-control" id="goals" name="goals" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="servepeople">12&#41; On average, how many people do you service annually&#63;</Label>
                  <Input type="text" className="form-control" id="servepeople" name="servepeople" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="service">13&#41; Do you service men, women, children or a combination&#63;</Label>
                  <Input type="text" className="form-control" id="service" name="service" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="needhelp">14&#41; Do any of the people you serve need to be helped confidentially&#63; If so, why&#63;</Label>
                  <Input type="textarea" className="form-control" id="needhelp" name="needhelp" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="maintain">15&#41; How does your organization maintain ethical standards&#63;</Label>
                  <Input type="textarea" className="form-control" id="maintain" name="maintain" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="areas">16&#41; In your opinion, what areas of your organization need improvement&#63;</Label>
                  <Input type="textarea" className="form-control" id="areas" name="areas" rows="2" />
                </FormGroup>
              </Form>
              <div className="text-center m-t-20">
                <h4><b>USAGE QUESTIONS</b></h4>
                <h5>PLEASE ANSWER QUESTIONS IN DETAIL</h5>
              </div>
              <Form className="row">
                <FormGroup className="col-md-12">
                  <Label htmlFor="donationuse">1&#41; If awarded, how would the donation be used&#63;</Label>
                  <Input type="textarea" className="form-control" id="donationuse" name="donationuse" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="donationexp">2&#41; Have you ever received donations in the past&#63; If so, how were the donations used&#63;</Label>
                  <Input type="textarea" className="form-control" id="donationexp" name="donationexp" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="proofdonation">3&#41; If granted, proof of what the donation was used for will need to be provided. Are you willing to provide that proof&#63; &#40;Yes or No&#41;</Label>
                  <Input type="text" className="form-control" id="proofdonation" name="proofdonation" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="goodstanding">4&#41; How soon would you need assistance&#63;</Label>
                  <Input className="form-control" id="goodstanding" name="goodstanding" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="otherinfo">5&#41; Can you provide any other important information about your organization to help with our decision-making process&#63; &#40;Yes or No&#41;</Label>
                  <Input className="form-control" id="otherinfo" name="otherinfo" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="infoexplain">If yes, please tell us</Label>
                  <Input type="textarea" className="form-control" id="infoexplain" name="infoexplain" rows="2" />
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="otherinfo">6&#41; <b>Sharity</b> is a non-discriminatory organization. If accepted will your organization follow our principals&#63; <i>&#34;We believe everyone should be treated equally regardless of race, creed, color, sex, national origin, religion, age, disability, marital status, citizenship, pregnancy, or any other characteristic protected by law.&#34;</i> <b>If yes, please print your initials</b> </Label>
                  <Input className="form-control" id="otherinfo" name="otherinfo" />
                </FormGroup>
              </Form>
              <div className="text-center m-t-20">
                <h4><b>USE OF PHOTOS OR VIDEOS</b></h4>
              </div>
              <Label>
                In efforts to let the community know who we are and what we are about, the use of pictures and videos may be necessary, and they may be made public. If you agree to the use of pictures and videos, please sign below. If picture and videos cannot be used, please sign below acknowledging that and explain why.
              </Label>
              <Form className="row">
                <FormGroup className="col-md-12">
                  <Label><b>I agree to the use of picture and videos</b></Label>
                  <Row>
                    <Col md="6">
                      <Label>Signature</Label>
                      <Input className="form-control" type="file" id="agreesign" name="agreesign" onChange={onChangeAgreePicture} />
                      <div className="previewProfilePic">
                        <img className="playerProfilePic_home_tile" src={agreeImgData} />
                      </div>
                    </Col>
                    <Col md="6">
                      <Label>Date</Label>
                      <Input className="form-control" type="date" id="agreedate" name="agreedate" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label><b>I do not agree to the use of picture and videos</b></Label>
                  <Row>
                    <Col md="6">
                      <Label>Signature</Label>
                      <Input className="form-control" type="file" id="disagreesign" name="disagreesign" onChange={onChangeDisagreePicture} />
                      <div className="previewProfilePic">
                        <img className="playerProfilePic_home_tile" src={disagreeImgData} />
                      </div>
                    </Col>
                    <Col md="6">
                      <Label>Date</Label>
                      <Input className="form-control" type="date" id="disagreedate" name="disagreedate" />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup className="col-md-12">
                  <Label htmlFor="disagreereason">If you do not agree, please explain the reason.</Label>
                  <Input type="textarea" className="form-control" id="disagreereason" name="disagreereason" rows="2" />
                </FormGroup>
              </Form>
              <div className="text-center m-t-20">
                <h4><b>ACKNOWLEDGEMENT OF TRUTH</b></h4>
              </div>
              <Label>
              I have the authority to complete this document, and I acknowledge that I have answered all questions truthfully and to the best of my knowledge. I have not tried to hide, conceal or misconstrue any information. If any addition information is needed, I am willing to provide that information to the best of my knowledge and in a timely manner. I understand that the approval or denial of receiving funds or goods is expressly the decision of <b>SHARITY</b> and I will accept that decision without malice. I am aware that falsifying information is illegal and anyone doing so will be fully prosecuted.
              </Label>
            </Col>:""}
            
            <Col md="7" sm="12">
                <hr />
                <Form className="row">
                    <FormGroup className="col-md-6">
                        <Label htmlFor="firstname">First Name<span className="text-red">*</span></Label>
                        <Input type="text" className="form-control" id="firstname" required />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="lastname">Last Name<span className="text-red">*</span></Label>
                        <Input type="text" className="form-control" id="lastname" required />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="email">Email Address<span className="text-red">*</span></Label>
                        <Input type="email" className="form-control" id="email" required />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="phone">Phone Number<span className="text-red">*</span></Label>
                        <Input type="text" className="form-control" id="phone" required />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="orgname">Organization name<span className="text-red">*</span></Label>
                        <Input type="text" className="form-control" id="orgname" required />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="websiteurl">Website URL</Label>
                        <Input type="url" className="form-control" id="websiteurl" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="photo">Photo<span className="text-red">*</span></Label>
                        <Input type="file" className="form-control" id="photo" required />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="logo">Logo<span className="text-red">*</span></Label>
                        <Input type="file" className="form-control" id="logo" required />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Label htmlFor="category">Select my category<span className="text-red">*</span></Label>
                        <Input
                                type="select"
                                // value={selectedOption}
                                // onChange={onChangeSelection}
                                required
                            >
                            <option value="">-</option>
                            <option value={"medical"}>Medical</option>
                            <option value={"memorial"}>Memorial</option>
                            <option value={"emergency"}>Emergency</option>
                            <option value={"nonprofit"}>Non profit</option>
                            <option value={"education"}>Education</option>
                            <option value={"animals"}>Animals</option>
                            <option value={"environment"}>Environment</option>
                            <option value={"business"}>Business</option>
                            <option value={"community"}>Community</option>
                            <option value={"charitytoken"}>Charity token</option>
                            <option value={"creative"}>Creative</option>
                            <option value={"event"}>Event</option>
                            <option value={"faith"}>Faith</option>
                            <option value={"family"}>Family</option>
                            <option value={"sports"}>Sports</option>
                            <option value={"travel"}>Travel</option>
                            <option value={"volunteer"}>Volunteer</option>
                            <option value={"wishes"}>Wishes</option>
                        </Input>
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Label htmlFor="description">Description</Label>
                        <Input type="textarea" className="form-control" id="description" rows={5} />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Input type="file" className="form-control" id="file" />
                    </FormGroup>
                    <Col md="12">
                        <p className="p-t-10 text-black"><b>Save my fund to:<span className="text-red">*</span></b> </p>
                    </Col>
                    
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox1" type="checkbox" selected />
                        <Label htmlFor="checkbox1"> Create new wallet automatically </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox2" type="checkbox" />
                        <Label htmlFor="checkbox2"> Use my existing wallet </Label>
                    </FormGroup>
                    <Col md="12">
                        <Button type="submit" className="btn btn-alternate waves-effect waves-light m-r-15 p-l-40 p-r-40">Submit</Button>
                    </Col>
                </Form>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default ExplorePartners;
