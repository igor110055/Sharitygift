import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import Link from "next/link";

const SubInfobar = (props) => {
  return (
    <div className="subinfobar" id="coming">
      <Container className="py-4">
        <Row className={props.description?'m-t-20':'m-t-40 m-b-30'}>
            <Col sm={12}>
                <h2 className="midtitle text-white"><b>{props.title}</b></h2>
            </Col>
        </Row>
        {props.description && <p className="text-white p-t-10 p-b-5">
          {props.description}
        </p>}
        
      </Container>
    </div>
  );
};

export default SubInfobar;
