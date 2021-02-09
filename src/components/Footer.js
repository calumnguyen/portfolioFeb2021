import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container>
      <Row>
        <Col className='text-center py-3'>
          Made and maintained with <i className='fas fa-heart'></i> in{' '}
          {currentYear} by Calum Nguyen.
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
