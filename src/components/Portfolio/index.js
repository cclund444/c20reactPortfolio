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
            <Image
                className="portfolio-img"
                alt={`${items.name} + project`}
                key={`img_${i}`}
                src={require(``).default}
            />
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