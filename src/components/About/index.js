import React from 'react';
// import './style.css';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';
import { Col, Image, Row } from 'react-bootstrap';
import selfie from '../../assets/1.jpg';

function About() {
    return (
      <Container>
          <h1>About Me</h1>
        {/* <Image
          src={selfie} thumbnail></Image> */}
          <Row>
            <Col md="3">
          <Figure>
            <Figure.Image
              width={171}
              height={180}
              alt="Caleb Lund"
              src={selfie}
            />
          </Figure>
          </Col>
          <Col>
          <p class="fs-3">
          I hope this finds whoever is reading it doing well. This is a portfolio of my codeing. I am learning and enjoying it. Ask any questions. 
          </p>
          <p class="fs-3">
          I have obtained a degree from The University of Arizona in; Bachelor Of General Studies Science, Technology, Health and Society Emphasis. I am currently towards the end of a BootCamp through UofA for codeing and web developement. 
          </p>
          </Col>
          </Row>
      </Container>
      
    );
}

export default About;