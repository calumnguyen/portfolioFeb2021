import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CardNews = ({ news }) => {
  return (
    <Card className='my-3 p-3 rounded'>
      <Link to={news.url}>
        <Card.Img src={news.image} variant='top' />
      </Link>
      <Card.Body>
        <Link to={news.url}>
          <Card.Title as='div'>
            <strong>{news.title}</strong>
          </Card.Title>
        </Link>
        <Card.text>{news.summary}</Card.text>
      </Card.Body>
    </Card>
  );
};

export default CardNews;
