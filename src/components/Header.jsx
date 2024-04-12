import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FaSignInAlt, FaSignOutAlt } from 'react-icons/fa';
import { LinkContainer } from 'react-router-bootstrap';


const Header = () => {
  return (
    <header>
        
    <Navbar bg='dark' variant='dark' expand="lg"  collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
        <Navbar.Brand >Mern App</Navbar.Brand>
         </LinkContainer>
       
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="ms-auto">
           
            <LinkContainer to='/login'>
            <Nav.Link >
                <FaSignInAlt/> Sign In
            </Nav.Link>
            </LinkContainer>
            
            <LinkContainer to='/register'>
            <Nav.Link >
                <FaSignOutAlt/> Sign Up
            </Nav.Link>
            </LinkContainer>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    </header>
  )
}

export default Header