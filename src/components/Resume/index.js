import React from 'react';
import Container from 'react-bootstrap/Container';
import Iframe from 'react-iframe';
import './style.css';
// import Resume1 from 'src/assets/Resume1.jpg';
// import Resume2 from 'src/assets/Resume2.jpg'

function Resume() {
    return(
        <Container>
            <br />
        <h3>Front-end Technologies</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>jQuery</li>
                <li>mobile responsive design</li>
                <li>React</li>
                <li>Bootstrap/React-Bootstrap</li>
            </ul>
        <h3>Back-end Technologies</h3>
            <ul>
                <li>API</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL, Sequelize</li>
                <li>MongoDB, Mongoose</li>
            </ul>
            

            <h3> Resume</h3> 
            {/* 
            <Figure.Image
              width={100}
              height={125}
              alt="1"
              src={Resume1}
            />
            </figure>
            <figure>
            <Figure.Image
              width={100}
              height={125}
              alt="2"
              src={Resume2}
            />
        */}

        </Container>
    );
}

export default Resume;