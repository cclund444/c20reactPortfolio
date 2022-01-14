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
            <ul>
                <img src='assets/Resume1.jpg' />
                <img src='assets/Resume2.jpg' />
            </ul>

        </Container>
    )
}

export default Resume;