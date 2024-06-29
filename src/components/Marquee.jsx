import React from "react";
import "../styles/style.css";
import { Container, Row, Col } from "react-bootstrap";

const Marquee = () => {
  return (
    // =============!!!!!!!!! marquee component !!!!!!!!!!===============
    <div>
      <h1 className="text-center text-danger p-5">Brands We Serve</h1>
      <Container className="my-5" style={{ overflow: "hidden" }}>
        <Row className="marquee-container">
          {/* !!!!!!!!!! honda icon !!!!!!!!! */}
          <Col xs={8} md={2} lg={2}>
            <img
              src="https://www.carlogos.org/car-logos/honda-logo-2000-full-download.png"
              alt="brand"
              className="img-fluid marquee-item"
              style={{ padding: "1rem" }}
            />
          </Col>

          {/* !!!!!!!!!! volkswagen icon !!!!!!!!! */}
          <Col xs={8} md={2} lg={2}>
            <img
              src="https://i.pinimg.com/originals/9d/af/f8/9daff8341b698b79f82086d09699181c.png"
              alt="brand"
              className="img-fluid marquee-item"
            />
          </Col>

          {/* !!!!!!!!!! benz icon !!!!!!!!! */}
          <Col xs={8} md={2} lg={2}>
            <img
              src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/07/21183222/emblem.jpg"
              alt="brand"
              className="img-fluid marquee-item"
            />
          </Col>

          {/* !!!!!!!!!! toyota icon !!!!!!!!! */}
          <Col xs={8} md={2} lg={2}>
            <img
              src="https://www.carlogos.org/car-logos/toyota-logo-2005-download.png"
              alt="brand"
              className="img-fluid marquee-item"
              style={{ padding: "2rem" }}
            />
          </Col>

          {/* !!!!!!!!!! bmw icon !!!!!!!!! */}
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
    //================!!!!!!!! marquee component end !!!!!!!!!==================
  );
};

export default Marquee;
