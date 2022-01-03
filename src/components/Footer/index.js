import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import './style.css';
import Container from 'react-bootstrap/Container';

function Footer() {
    return(
    <Container>
        <div class="contact">
            <a href="https://www.linkedin.com/in/caleb-lund-84183584/" target="_blank" class="contact-link"><FaLinkedinIn /></a>
            <a href="https://github.com/cclund444" target="_blank" class="contact-link"><FaGithub /></a>
            <a href="mailto:calebcoylund444@gmail.com" class="contact-link"><FaEnvelope /></a>
        </div>
    </Container>
    );
}


export default Footer;