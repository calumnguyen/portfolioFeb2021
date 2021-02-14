import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => {
  return (
    <header>
      <Navbar
        bg='dark'
        variant='dark'
        collapseOnSelect
        expand='lg'
        className='mb-3'
      >
        <Container>
          <LinkContainer to='/'>
            <Navbar.Brand href='/'>Calum Nguyen</Navbar.Brand>
          </LinkContainer>

          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <LinkContainer to='/connect'>
                <Nav.Link>
                  <i className='fas fa-envelope px-2'></i>Connect
                </Nav.Link>
              </LinkContainer>
              <Nav.Link>
                <i className='fas fa-user px-2'></i>Sign In
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
