// import React from 'react'
import "./header.css";
import React, { useState } from "react";
import People from "../../assets/people/people.png";
import landingPic from "../../assets/people/landingPic.png";

import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
// import Button from "../../components/shared/button/Button";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';




const Header = () => {
  
  function AlertDismissible() {
    const [show, setShow] = useState(true);

    return (
      <React.Fragment>
        <Alert show={show} variant="success">
          <Alert.Heading>How's it going?!</Alert.Heading>
          <p>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula,
            eget lacinia odio sem nec elit. Cras mattis consectetur purus sit
            amet fermentum.
          </p>
          <hr />
          <div className="d-flex justify-content-end">
            <Button onClick={() => setShow(false)} variant="outline-success">
              Close me y'all!
            </Button>
          </div>
        </Alert>

        {!show && <Button onClick={() => setShow(true)}>Show Alert</Button>}
      </React.Fragment>
    );
  }

  return (
    <div>
      Header
      <div className="section__padding">
      <div>
    
  <Stack direction="horizontal" gap={4} className='mb-2 pb-3'>
        <Col>
       
  <Button href="#" variant="success" size="lg" className='me-4'>Find Services</Button>
  <Button href="#" variant="outline-success" size="lg">Find Work</Button>
 </Col>
 </Stack>
      

       </div>
      <div className="anyworka__header" id="home">
        <div className="anyworka__header-content">
          <h1 className="gradient__text">
            Get quality service, with the speed of light
          </h1>
          <div className="anyworka__header-content__input">
            <input type="email" placeholder="" />
            <button type="button">Get started</button>
          </div>
          <div className="anyworka__header-content_people">
            <img src={People} alt="people" />
            <p>
              lorem this is the text that goes under the main topic in tiny
              text,mostly in double lines. under this is a 4 dropdown bars{" "}
            </p>
          </div>
          
        </div>
        <div className="anyworka__header-image">
            <img src={landingPic} alt="people" />
            
          </div>
      </div>
    </div>
    </div>
  );
};

export default Header;
