import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../styles/style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import ContactForm from "../components/Contactform";

const Contactus = () => {
  return (
    <div>
      <Container className="my-5" style={{ overflow: "hidden" }}>
        <h1 className="text-center text-danger p-5">Contact Us</h1>
        <Row className="justify-content-end">
          <Col xs={12} md={8} lg={8} className="order-md-2 p-4">
            <h3>Contact Info</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
          <Col xs={12} md={3} lg={3} className="order-md-2 mb-4">
            <img
              src="https://i.pinimg.com/originals/4c/5c/9d/4c5c9dbb7d822b280e434bbe95abfa62.gif"
              alt="brand"
              className="img-fluid marquee-item"
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={4} lg={4} className="mb-4">
            <div className="phone-number-container">
              <FontAwesomeIcon icon={faPhoneAlt} className="phone-icon" />
              <span className="phone-number">+123 456 7890</span>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4} className="mb-4">
            <div className="phone-number-container">
              <FontAwesomeIcon icon={faInstagram} className="phone-icon" />
              <span className="phone-number">top_gear</span>
            </div>
          </Col>
          <Col xs={12} md={4} lg={4} className="mb-4">
            <div className="phone-number-container">
              <FontAwesomeIcon icon={faGoogle} className="phone-icon" />
              <span className="phone-number">www.top_gear.com</span>
            </div>
          </Col>
        </Row>
      </Container>

      <Container>
        <Row>
          <Col xs={12} md={6} lg={6}>
            <ContactForm />
          </Col>
          <Col  xs={12} md={6} lg={6}>
          <img src="https://st3.depositphotos.com/1743476/32186/i/450/depositphotos_321868246-stock-photo-young-latin-woman-in-customer.jpg" alt="call"
           className="img-fluid" 
          />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contactus;
