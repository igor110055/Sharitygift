/* eslint-disable */
import React, {useState} from "react";
import { Row, Col, Container, Card, CardBody, Form, FormGroup, Label, Input, Button, Select, Option, ButtonGroup,InputGroupText,InputGroup  } from "reactstrap";
import Link from "next/link";
import PdfViewerComponent from '../../PdfViewerComponent.js';

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
          <Row className="m-t-10">
            <Col md="7" sm="12" className="m-b-20">
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
            {!role?<PdfViewerComponent
              document={"Personal.pdf"}
            />:""}
            {role?<PdfViewerComponent
              document={"Charity.pdf"}
            />:""}
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
