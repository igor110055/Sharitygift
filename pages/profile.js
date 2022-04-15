import React, { useState, useEffect } from "react"
import fetch from 'isomorphic-unfetch'
import Head from "next/head";
import Link from "next/link";

import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Container, Row, Col, Button, ButtonGroup, Form, FormGroup, Label, Input, Spinner } from "reactstrap";

export default function Profile({ user }) {
  const [role, setRole] = useState(0);
  const [checkedItems, setCheckedItems] = useState({}); //plain object as state
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
      // updating an object instead of a Map
      setCheckedItems({...checkedItems, [event.target.name] : event.target.checked });
  }
  const saveProfile = async () => {
    setLoading(true)
    const userinfo = {
      id: data._id,
      email: data.email,
      role: role,
      checkedItems: checkedItems
    }
    const res = await fetch("/api/profile", {
      method: 'post',
      body: JSON.stringify(userinfo)
    });
    setLoading(false)
  }
  useEffect(async () => {
    setLoading(true)
    const res = await fetch("/api/user", {
      method: 'post',
      body: JSON.stringify(user)
    });
    const json = await res.json();
    await setData(json)
    setLoading(false)
  }, []);

  useEffect(async () => {
    if(data.role){
      setRole(data.role)
    }
    console.log(data)
    if(data.checkedItems){
      setCheckedItems(data.checkedItems)
    }
  }, [data]);

  const checkboxes = [
    {
        name: 'Medical',
        key: 'medical',
    },
    {
      name: 'Emergency',
      key: 'emergency',
    },
    {
      name: 'Non Profit',
      key: 'nonprofit',
    },
    {
      name: 'Education',
      key: 'education',
    },
    {
      name: 'Animals',
      key: 'animals',
    },
    {
      name: 'Environment',
      key: 'environment',
    },
    {
      name: 'Business',
      key: 'business',
    },
    {
      name: 'Community',
      key: 'community',
    },
    {
      name: 'Charity token',
      key: 'chritytoken',
    },
    {
      name: 'Event',
      key: 'event',
    },
    {
      name: 'Faith',
      key: 'faith',
    },
    {
      name: 'Family',
      key: 'family',
    },
    {
      name: 'Sports',
      key: 'sports',
    },
    {
      name: 'Travel',
      key: 'travel',
    },
    {
      name: 'Volunteer',
      key: 'volunteer',
    },
    {
      name: 'Wishes',
      key: 'wishes',
    },
  ];
  if(loading){
    return (<><Head>
      <title>Sharity | Profile</title>
      <meta
        name="Sharity"
        content="Crypto Donation"
      />
      <link rel="icon" href="/favicon.png" />
      <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
    </Head><div className="p-t-102">
      <div className="spacer text-center">
        <Spinner>
          Loading...
        </Spinner>
      </div>
    </div></>)
  }
  return (
    <div>
      <Head>
        <title>Sharity | Profile</title>
        <meta
          name="Sharity"
          content="Crypto Donation"
        />
        <link rel="icon" href="/favicon.png" />
        <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet' />
      </Head>
      
      <div className="p-t-102">
          <div className="spacer">
            <Container>
              <Row>
                <Col md={12}>
                  <h6>Email Address:</h6> 
                </Col>
                <Col md={12}>
                  <h6><b>{user.email}</b></h6> 
                </Col>
                <Col md={12} className="m-t-20">
                  <h6>Name:</h6> 
                </Col>
                <Col md={12}>
                  <h6><b>{user.name}</b></h6> 
                </Col>
                <Col md={12} className="m-t-20">
                  <h6>I am going to:</h6> 
                </Col>
                <Col md={12}>
                  <ButtonGroup>
                    <Button
                      color={!role?"primary":"light-reverse"}
                      size="sm"
                      onClick={() => setRole(0)}
                    >
                      Donate
                    </Button>
                    <Button
                      color={role?"primary":"light-reverse"}
                      size="sm"
                      onClick={() => setRole(1)}
                    >
                      Fundraise
                    </Button>
                  </ButtonGroup>
                </Col>
                {role ? "":<div><Col md={12} className="m-t-20">
                  <h6>Select your{role?"":" favorite"} categories:</h6> 
                  </Col>
                  <Col md={12}>
                    {
                      checkboxes.map(item => (
                        <FormGroup check><Input type="checkbox" checked={checkedItems[item.key]} onChange={handleChange} id={item.key} name={item.key} /><Label check for={item.key}>{item.name}</Label></FormGroup>
                      ))
                    }
                </Col></div>}
                
                <Col md={12} className="m-t-20">
                  <Button 
                    color="light-reverse"
                    onClick={saveProfile}>
                    Save    
                  </Button>
                </Col>
              </Row>
            </Container>
            
          </div>
      </div>
      
    </div>
  );
}

export const getServerSideProps = withPageAuthRequired();