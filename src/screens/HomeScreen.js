import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { HomepageLottie } from '../animation/LottieAnimation';
import { news } from '../data/news';
import CardNews from '../components/CardNews';

const HomeScreen = () => {
  return (
    <>
      <Row className='my-auto'>
        <Col md={6} className='mt-5 pt-5'>
          <h1>
            Hello, I'm `${'{'}
            <span style={{ color: '#3A6073' }}>Calum</span>
            {'}'}`
          </h1>

          <h5 className='py-3'>Thank you for visiting my site!</h5>

          <Button
            variant='dark'
            type='button'
            className='btn-block my-4 br text-3'
          >
            <i className='fas fa-paperclip px-2'></i>
            In a rush? Download my resume!
          </Button>
          <Button
            variant='outline-dark'
            type='button'
            className='btn-block mt-4 br text-3'
          >
            <i className='far fa-handshake px-2'></i>
            Have some time? Let's Connect!
          </Button>
        </Col>
        <Col md={6} className='mb-5 '>
          <HomepageLottie />
        </Col>
      </Row>
      <Row>
        {news.map((n) => (
          <Col sm={12} md={4}>
            <CardNews news={n} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
