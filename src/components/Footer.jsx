import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () => {
  return (
    <div className='pt-5'>


    <footer className="bg-dark text-white py-4 " >
      <Container >
        <Row>
          <Col md={4}>
            <h5>Top Gear Workshop</h5>
            <p>
              Your trusted partner for car maintenance and repairs. We offer
              high-quality services to keep your vehicle running smoothly.
            </p>
          </Col>
          <Col md={4}>
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Phone: +123 456 7890</li>
              <li>Email: info@topgearworkshop.com</li>
              <li>Address: 123 Main Street, City, Country</li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li><a href="#" className="text-white">Facebook</a></li>
              <li><a href="#" className="text-white">Twitter</a></li>
              <li><a href="#" className="text-white">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Top Gear Workshop. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
    </div>
  );
};

export default Footer;
