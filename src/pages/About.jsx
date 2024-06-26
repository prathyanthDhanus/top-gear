import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { mechanichScrollData } from "../data/Data";
import HScroll from "../re-usable-components/H-Scrollbar";
import ColwithImage from "../re-usable-components/ColwithImage";
import ImagewithCol from "../re-usable-components/ImagewithCol";
import useAOS from "../custom-hooks/Aos";

const About = () => {
  useAOS({ duration: 1000 });

  return (
    <>
      {/* ==================!!!!!!!!! about us section !!!!!!!!!================== */}
      <Container className="p-5">
        <h1 className="text-center text-danger p-3 ">About Us</h1>
        <Row>
          <Col data-aos="zoom-out-left">
            <p>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose (injected humour and the like).
            </p>
          </Col>
        </Row>
      </Container>
      {/* ======================!!!!!!!!! about us section end !!!!!!!!!===================== */}

      {/* ======================!!!!!!!!! our family section !!!!!!!!!===================== */}
      <Container>
        <h1 className="text-center text-danger ">Our Family</h1>
        {/* !!!!!!!!!! Horizontal scroll !!!!!!!!! */}
        <HScroll data={mechanichScrollData} />
      </Container>
      {/* ======================!!!!!!!!! our family section end !!!!!!!!!===================== */}

      {/* ======================!!!!!!!!! mission/vision section !!!!!!!!!===================== */}
      <Container className="p-3">
        <Row>
          {/* !!!!!!!!!! mission section !!!!!!!!! */}
          <Col className="text-center">
            <h3>Mission</h3>
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
          {/* !!!!!!!!!! mission section end !!!!!!!!! */}

          {/* !!!!!!!!!! vision section !!!!!!!!! */}
          <Col className="text-center">
            <h3>Vision</h3>
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
          {/* !!!!!!!!!! vision section end !!!!!!!!! */}
        </Row>
      </Container>
      {/* =================!!!!!!!!! about us section end !!!!!!!!!===================== */}

      {/* =================!!!!!!!!! certificate/affiliation section !!!!!!!!!===================== */}
      <Container className="p-3" data-aos="zoom-in">
        {/* !!!!!!!!!! col with image component !!!!!!!!! */}
        <ColwithImage
          title="Certifications and Affiliations"
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
          imageUrl="https://www.shutterstock.com/image-photo/customer-satisfaction-service-warranty-concept-600nw-2332672915.jpg"
        />

        {/* !!!!!!!!!! image with col component !!!!!!!!! */}
        <ImagewithCol
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"
          imageUrl="https://www.nerdwallet.com/assets/blog/wp-content/uploads/2017/10/how-do-i-find-a-good-mechanic-1.jpeg"
        />

        {/* !!!!!!!!!! view more div !!!!!!!!! */}
        <Col xs={12} md={4} lg={4} className="mb-4 p-5">
          <div className="phone-number-container">
            <span className="phone-number">View more</span>
          </div>
        </Col>
        {/* !!!!!!!!!! view more div end !!!!!!!!! */}
      </Container>
    </>
  );
};

export default About;
