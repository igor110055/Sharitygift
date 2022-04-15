/* eslint-disable */
import React, {useState} from "react";
import { Row, Col, Container, Card, CardBody, Form, FormGroup, Label, Input, Button, Select, Option, ButtonGroup,InputGroupText,InputGroup  } from "reactstrap";
import Link from "next/link";

const ExplorePartners = () => {
  const [role, setRole] = useState(0);
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
              </Form>
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
