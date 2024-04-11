import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';


const Header = () => {
  return (
    <header>
        
    <Navbar bg='dark' variant='dark' expand="lg"  collapseOnSelect>
      <Container>
        <Navbar.Brand href="/">Mern App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
            <Nav.Link href="/login">
                <FaSignInAlt/> Sign In
            </Nav.Link>
            <Nav.Link href="/register">
                <FaSignOutAlt/> Sign Up
            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header