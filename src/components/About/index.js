import React from 'react';
import './style.css';
import Container from 'react-bootstrap/Container';
import Figure from 'react-bootstrap/Figure';


function About() {
    return (
      <Container>
          <h1>About Me</h1>
          <Figure>
            <Figure.Image
              width={171}
              heigh={180}
              alt="Caleb Lund"
              img src="./assets/1.jpg"
            />
          </Figure>
          <p>
          I hope this finds whoever is reading it doing well. This is a portfolio of my codeing. I am learning and enjoying it. Ask any questions. 
          </p>
          <p>
          I have obtained my Bachelors Degree from The University of Arizona in; General Studies with an imphasis on Science, Technology, Health and Society. I am currently towards the end of a BootCamp through UofA for codeing and web developement. 
          </p>
      </Container>
      
    );
}

export default About;