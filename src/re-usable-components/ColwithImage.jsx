import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const ColwithImage = ({ title, text, imageUrl }) => {
  return (
    <Container>
      <h1 className="text-center text-danger">{title}</h1>
      <Row >
        <Col className="pt-5" xs={12} sm={6} md={12} lg={8} xl={6} >
          <p>{text}</p>
        </Col>
        <Col className="text-center p-5" xs={12} md={6}>
          <img
            src={imageUrl}
            alt="service"
            className="img-fluid"
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ColwithImage;
