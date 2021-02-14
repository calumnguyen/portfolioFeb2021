import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { ConnectLottie } from '../animation/LottieAnimation';

const HomeScreen = () => {
  return (
    <>
      <Row className='my-auto'>
        <Col md={3} className='mt-5 pt-5'>
          <h1>Connect</h1>
        </Col>
        <Col md={6} className='mb-3 '>
          <ConnectLottie />
        </Col>
        <Col md={3} className='py-3'>
          Hello
        </Col>
      </Row>
    </>
  );
};

export default HomeScreen;
