import React from 'react';
import "../styles/style.css";
import { Container,Row,Col } from 'react-bootstrap';

const Marquee = () => {
  return (
    <div>
      <h2 className="text-center text-danger p-5">Brands We Serve</h2>
    <Container className="my-5" style={{ overflow: 'hidden' }}>
      <Row className="marquee-container"> 
        <Col xs={8} md={2} lg={2}>
          <img
            src="https://www.carlogos.org/car-logos/honda-logo-2000-full-download.png"
            alt="brand"
            className="img-fluid marquee-item"
            style={{ padding: "1rem" }}
          />
        </Col>
        <Col xs={8} md={2} lg={2}>
          <img
            src="https://i.pinimg.com/originals/9d/af/f8/9daff8341b698b79f82086d09699181c.png"
            alt="brand"
            className="img-fluid marquee-item"
          />
        </Col>
        <Col xs={8} md={2} lg={2}>
          <img
            src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/07/21183222/emblem.jpg"
            alt="brand"
            className="img-fluid marquee-item"
          />
        </Col>
        <Col xs={8} md={2} lg={2}>
          <img
            src="https://www.carlogos.org/car-logos/toyota-logo-2005-download.png"
            alt="brand"
            className="img-fluid marquee-item"
            style={{ padding: "2rem" }}
          />
        </Col>
        <Col xs={8} md={2} lg={2}>
          <img
            src="https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1963.png"
            alt="brand"
            className="img-fluid marquee-item"
          />
        </Col>
      </Row>
      
    </Container>
    

    </div>
  )
}

export default Marquee