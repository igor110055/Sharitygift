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
        name: 'aapi led',
        key: 'aapi-led',
    },
    {
      name: 'adoption',
      key: 'adoption',
    },
    {
      name: 'afghanistan',
      key: 'afghanistan',
    },
    {
      name: 'animals',
      key: 'animals',
    },
    {
      name: 'athletics',
      key: 'athletics',
    },
    {
      name: 'autism',
      key: 'autism',
    },
    {
      name: 'black led',
      key: 'black-led',
    },
    {
      name: 'buddhism',
      key: 'buddhism',
    },
    {
      name: 'cancer',
      key: 'cancer',
    },
    {
      name: 'cats',
      key: 'cats',
    },
    {
      name: 'christianity',
      key: 'christianity',
    },
    {
      name: 'climate',
      key: 'climate',
    },
    {
      name: 'conservation',
      key: 'conservation',
    },
    {
      name: 'coronavirus',
      key: 'coronavirus',
    },
    {
      name: 'culture',
      key: 'culture',
    },
    {
      name: 'dance',
      key: 'dance',
    },
    {
      name: 'disabilities',
      key: 'disabilities',
    },
    {
      name: 'disease',
      key: 'disease',
    },
    {
      name: 'dogs',
      key: 'dogs',
    },
    {
      name: 'education',
      key: 'education',
    },
    {
      name: 'environment',
      key: 'environment',
    },
    {
      name: 'film and tv',
      key: 'filmandtv',
    },
    {
      name: 'food security',
      key: 'food-security',
    },
    {
      name: 'freepress',
      key: 'freepress',
    },
    {
      name: 'gender equality',
      key: 'gender-equality',
    },
    {
      name: 'health',
      key: 'health',
    },
    {
      name: 'hinduism',
      key: 'hinduism',
    },
    {
      name: 'housing',
      key: 'housing',
    },
    {
      name: 'humans',
      key: 'humans',
    },
    {
      name: 'hurricane laura',
      key: 'hurricane-laura',
    },
    {
      name: 'immigrants',
      key: 'immigrants',
    },
    {
      name: 'indigenous led',
      key: 'indigenous-led',
    },
    {
      name: 'indigenous people',
      key: 'indigenous-peoples',
    },
    {
      name: 'islam',
      key: 'islam',
    },
    {
      name: 'judaism',
      key: 'judaism',
    },
    {
      name: 'justice',
      key: 'justice',
    },
    {
      name: 'latine led',
      key: 'latine-led',
    },
    {
      name: 'legal',
      key: 'legal',
    },
    {
      name: 'lgbt',
      key: 'lgbt',
    },
    {
      name: 'libraries',
      key: 'libraries',
    },
    {
      name: 'mental health',
      key: 'mental-health',
    },
    {
      name: 'middle east',
      key: 'middle-east',
    },
    {
      name: 'museums',
      key: 'museums',
    },
    {
      name: 'music',
      key: 'music',
    },
    {
      name: 'oceans',
      key: 'oceans',
    },
    {
      name: 'poverty',
      key: 'poverty',
    },
    {
      name: 'racial justice',
      key: 'racial-justice',
    },
    {
      name: 'refugees',
      key: 'refugees',
    },
    {
      name: 'religion',
      key: 'religion',
    },
    {
      name: 'reproductive justice',
      key: 'reproductive-justice',
    },
    {
      name: 'research',
      key: 'research',
    },
    {
      name: 'science',
      key: 'science',
    },
    {
      name: 'seniors',
      key: 'seniors',
    },
    {
      name: 'space',
      key: 'space',
    },
    {
      name: 'theater',
      key: 'theater',
    },
    {
      name: 'transgender',
      key: 'transgender',
    },
    {
      name: 'ukraine',
      key: 'ukraine',
    },
    {
      name: 'veterans',
      key: 'veterans',
    },
    {
      name: 'visualart',
      key: 'visualart',
    },
    {
      name: 'votingrights',
      key: 'votingrights',
    },
    {
      name: 'water',
      key: 'water',
    },
    {
      name: 'wildfires',
      key: 'wildfires',
    },
    {
      name: 'wildlife',
      key: 'wildlife',
    },
    {
      name: 'women led',
      key: 'women-led',
    },
    {
      name: 'womens health',
      key: 'womens-health',
    },
    {
      name: 'youth',
      key: 'youth',
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
                        <FormGroup check key={item.key}><Input type="checkbox" checked={checkedItems[item.key]} onChange={handleChange} id={item.key} name={item.key} /><Label check for={item.key}>{item.name}</Label></FormGroup>
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