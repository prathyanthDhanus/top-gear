import React from "react";
import CarouselComponent from "../re-usable-components/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import "../styles/style.css";
import { carouselmages } from "../data/Data";
import useAOS from "../custom-hooks/Aos";

const Advantages = () => {
   
  useAOS({ duration: 1000 });

  return (
    <>
    {/* ===============!!!!!!!!!! carousel component !!!!!!!!!!============== */}
      <Container className="mt-5">
        <Row>
           {/* !!!!!!!!!! carousel component !!!!!!!!! */}
          <CarouselComponent images={carouselmages} />
        </Row>
      </Container>
    {/* ===============!!!!!!!!!! carousel component end !!!!!!!!!!============== */}

    {/* ===============!!!!!!!!!! our advantages card section !!!!!!!!!!============== */}
      <Container>
        <Row >
       
          <Col xs={11} >
            <h2 className="p-5 text-danger text-center" >Our Advantages</h2>
          </Col>
        </Row>
          {/* !!!!!!!!!! card row !!!!!!!!! */}
        <Row>
          <Col xs={12} md={6} lg={3} className="text-center">
            <img
              src="https://www.tgpindia.com/wp-content/uploads/2023/03/engine-parts.jpg"
              alt="Auto mechanic working on car"
              className="advantage-images "
                
            />
            <p>Genuine Parts</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center">
            <img
              src="https://img.freepik.com/premium-photo/auto-car-repair-service-center-mechanic-examining-car-suspension_136930-6.jpg"
              alt="Mechanic examining car suspension"
              className="advantage-images"
            />
            <p>Experienced Mechanics</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center">
            <img
              src="https://st2.depositphotos.com/1158045/6706/i/450/depositphotos_67063213-stock-photo-mechanic-at-work-in-his.jpg"
              alt="Mechanic at work"
              className="advantage-images"
            />
            <p>Detailed Check</p>
          </Col>
          <Col xs={12} md={6} lg={3} className="text-center">
            <img
              src="https://www.shutterstock.com/image-photo/portrait-shot-handsome-mechanic-working-600nw-1711144648.jpg"
              alt="Handsome mechanic working"
              className="advantage-images"
            />
            <p>Quality Works</p>
          </Col>
        </Row>
         {/* !!!!!!!!!! card row end !!!!!!!!! */}
      </Container>
      {/* ============!!!!!!!!!! our advantages card section end !!!!!!!!!============= */}
      
      {/* ============!!!!!!!!!! we are at section !!!!!!!!!============= */}
      <Container>
        <Row>
        <Row >
      
          <Col xs={11} >
            <h2 className="p-5 text-danger text-center" >We Are At</h2>
          </Col>
        </Row>
          <Col className="text-center" xs={12} md={2} lg={3}>
            <img
              src="https://cdn-icons-png.freepik.com/512/5460/5460427.png"
              className="serviceImage"
            />
            <br />
            <Col xs={12} md={4} lg={6} className="mb-4" data-aos="zoom-in-up">
            <div className="phone-number-container">
             
              <span className="phone-number ">35480 Customers</span>
            </div>
          </Col>
          </Col>
          <Col className="text-center" xs={12} md={2} lg={3}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-find-jobs-1956265-1650428.png"
              className="serviceImage"
            />
            <br />
            <Col xs={12} md={4} lg={6} className="mb-4" data-aos="zoom-in-up">
            <div className="phone-number-container">
             
              <span className="phone-number "> 3913 Workers</span>
            </div>
          </Col>
          </Col>
          <Col className="text-center" xs={12} md={2} lg={3}>
            <img
              src="https://cdn.pixabay.com/photo/2014/04/02/10/44/eye-304414_960_720.png"
              className="serviceImage"
            />
            <br />
            <Col xs={12} md={4} lg={6} className="mb-4" data-aos="zoom-in-up">
            <div className="phone-number-container">
             
              <span className="phone-number ">9 Years Of Experience</span>
            </div>
          </Col>
          </Col>
          <Col className="text-center" xs={12} md={2} lg={3}>
            <img
              src="https://cdn-icons-png.freepik.com/512/9539/9539840.png"
              className="serviceImage"
            />
            <br />
            <Col xs={12} md={4} lg={6} className="mb-4" data-aos="zoom-in-up">
            <div className="phone-number-container">
             
              <span className="phone-number ">12 Branches</span>
            </div>
          </Col>
          </Col>
        </Row>
      </Container>
      {/* ================!!!!!!! we are at section end !!!!!!!!!=================== */}
    </>
  );
};

export default Advantages;
