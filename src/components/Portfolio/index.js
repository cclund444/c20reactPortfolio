import React from 'react';
import PortfolioList from '../Project-list/index.js'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import './style.css';


function Portfolio() {
    return(

<Container>
  <Row>
        {
            PortfolioList.map((items, i) => (  
            <Col xs='12' md='6' lg='4'>                
        
        <a href={items.link} target="_blank">
            <body>
                img src= {`assets/PP1.jpg`,'assets/PP2.jpg', 'assets/PP3.jpg', 'assets/P3.jpg'}/>
                <p> Link: https://cclund444.github.io/c02codeRefactor/portfolio.html </p>
            </body>
        </a>
        <div className="description">
            <div className="description-name">
                {items.name}
            </div>
            <div className="description-github">
                <a href={items.github} target="_blank">Github</a>
            </div>
        </div>
        </Col>
    ))}
  </Row>
</Container>
    )
}

export default Portfolio;