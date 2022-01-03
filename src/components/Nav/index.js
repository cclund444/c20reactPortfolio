import React from 'react';
import './style.css';
import {Navbar} from 'react-bootstrap';
import {Container} from 'react-bootstrap';
import {Nav} from 'react-bootstrap';


function Navigate({currentPage, setCurrentPage}) {
    return (
    <header>
        <Navbar bg="dark" variant="dark" class="navbar" collapseOnSelect expand="lg">
            <Container>
            <Navbar.Brand href="#home">CCL</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
                <Nav.Link href="#about" onClick={() => setCurrentPage('About')}>About Me</Nav.Link>
                <Nav.Link href="#portfolio" onClick={() => setCurrentPage('Portfolio')}>Portfolio</Nav.Link>
                <Nav.Link href="#contact" onClick={() => setCurrentPage('Contact')}>Contact</Nav.Link>
                <Nav.Link href="#resume" onClick={() => setCurrentPage('Resume')}>Resume</Nav.Link>
            </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>

    </header>
    );
}


export default Navigate;