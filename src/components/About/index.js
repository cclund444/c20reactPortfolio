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
          <p>
          I have obtained my Bachelors Degree from The University of Arizona in; General Studies with an imphasis on Science, Technology, Health and Society. I am currently towards the end of a BootCamp through UofA for codeing and web developement. 
          </p>
          </Col>
          </Row>
      </Container>
      
    );
}

export default About;