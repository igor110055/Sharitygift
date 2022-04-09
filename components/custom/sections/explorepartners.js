/* eslint-disable */
import React from "react";
import { Row, Col, Container, Card, CardBody, Form, FormGroup, Label, Input, Button  } from "reactstrap";
import Link from "next/link";

const ExplorePartners = () => {
  return (
    <div>
      <div className="spacer">
        <Container>
          <Row>
            <Col md="12">
              <h3 className="midtitle">Explore our Partnership</h3>
              <p className="text-black p-t-10">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
              </p>
            </Col>
          </Row>
          <Row className="m-t-20">
            <Col md="7" sm="12">
                <Form className="row">
                    <FormGroup className="col-md-6">
                        <Label htmlFor="firstname">First Name<span className="text-red">*</span></Label>
                        <Input type="text" className="form-control" id="firstname" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="lastname">Last Name<span className="text-red">*</span></Label>
                        <Input type="text" className="form-control" id="lastname" />
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Label htmlFor="email">Email Address<span className="text-red">*</span></Label>
                        <Input type="email" className="form-control" id="email" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="orgname">Organization name</Label>
                        <Input type="text" className="form-control" id="orgname" />
                    </FormGroup>
                    <FormGroup className="col-md-6">
                        <Label htmlFor="websiteurl">Website URL</Label>
                        <Input type="text" className="form-control" id="websiteurl" />
                    </FormGroup>
                    <Col md="12">
                        <p className="p-t-10 text-black"><b>Which best describes for you:<span className="text-red">*</span></b> </p>
                    </Col>
                    
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox1" type="checkbox" />
                        <Label htmlFor="checkbox1"> Nonprofit </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox2" type="checkbox" />
                        <Label htmlFor="checkbox2"> Corporate Partner </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox3" type="checkbox" />
                        <Label htmlFor="checkbox3"> Media Partner </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox4" type="checkbox" />
                        <Label htmlFor="checkbox4"> Influencer </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox5" type="checkbox" />
                        <Label htmlFor="checkbox5"> Doner </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox6" type="checkbox" />
                        <Label htmlFor="checkbox6"> Financial Service </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox7" type="checkbox" />
                        <Label htmlFor="checkbox7"> Crypto Project </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox8" type="checkbox" />
                        <Label htmlFor="checkbox8"> Crypto Exchange </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12 m-l-20">
                        <Input id="checkbox9" type="checkbox" />
                        <Label htmlFor="checkbox9"> Other </Label>
                    </FormGroup>
                    <FormGroup className="col-md-12">
                        <Label htmlFor="description">Describe what you are looking to achieve with this partnership </Label>
                        <Input type="textarea" className="form-control" id="description" rows={5} />
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
