import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
// import { styles } from "../styles/style";
import "../styles/style.css"
import Advantages from "../components/Advantages";
import TestimonialCarousel from "../components/Testimonials";
import Faqs from "../components/Faqs";
import Marquee from "../components/Marquee";

const Home = () => {
  return (
    <>
      <div className="homeContainer" xs={12} md={12} lg={12}>
        <div>
          <Container>
          <Row>
          <Col xs={12} md={8}>
          <h1 className="homeText">Luxury Car Care</h1>
          </Col>
          </Row>
          <Row>
          <Col xs={12} md={6}>
          <p className="homeParaText">we specialize in providing premium care and maintenance for luxury cars. Our expert technicians are trained to handle high-end vehicles with the utmost precision and attention to detail. Whether it's routine maintenance, intricate repairs, or performance enhancements, we ensure that your luxury car receives the finest service it deserves.</p>
         
         
          </Col> 
          </Row>
          </Container>
        </div>
      </div>

      <Container>
        <h2 className="text-center p-5">Why Choose Us</h2>
        <Row className="p-3">
          <Col xs={12} md={4} lg={4} className="text-center p-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/511/694/non_2x/car-diagnostics-icon-illustration-vector.jpg"
              alt="car-diagnostics"
             className="serviceImage"
            />

            <h5>Computerised Diagnostics</h5>
            <p>
              Our workshop is equipped with the latest diagnostic tools and
              software, allowing us to quickly and accurately identify any
              issues with your vehicle. This ensures efficient repairs and
              minimizes downtime.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4} className="text-center p-3">
            <img
              src="https://cdn-icons-png.freepik.com/512/6342/6342791.png"
              alt="car-diagnostics"
             className="serviceImage"
            />
            <h5>Experienced and Certified Technicians</h5>
            <p>
              Our team of highly skilled technicians boasts over 20 years of
              combined experience in the automotive industry. Each member of our
              team has extensive hands-on experience working with a wide variety
              of vehicle makes and models, ensuring that your car receives the
              best possible care.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4} className="text-center p-3">
            <img
              src="https://t3.ftcdn.net/jpg/05/38/63/98/360_F_538639833_bzLDFDuegFpgHEiYPwf5QYWQgwsORvmv.jpg"
              alt="car-diagnostics"
             className="serviceImage"
            />
            <h5>High-Quality Services</h5>
            <p>
              We use high-quality parts and fluids that meet or exceed OEM
              (Original Equipment Manufacturer) standards to ensure the
              longevity and reliability of your vehicle. Every service is
              performed with meticulous attention to detail.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4} className="text-center p-3">
            <img
              src="https://www.shutterstock.com/image-vector/wrench-gear-icon-service-tool-260nw-1928977187.jpg"
              alt="car-diagnostics"
              className="serviceImage"
            />
            <h5>State-of-the-Art Equipment</h5>
            <p>
              We continuously upgrade our facilities with state-of-the-art
              equipment, including advanced alignment machines, computerized
              wheel balancers, and cutting-edge repair tools, ensuring that we
              can handle even the most complex automotive problems.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4} className="text-center p-3">
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/695/803/non_2x/customer-satisfaction-icon-style-free-vector.jpg"
              alt="car-diagnostics"
              className="serviceImage"
            />
            <h5>Customer Satisfaction Guarantee </h5>
            <p>
              Our goal is complete customer satisfaction. If for any reason you
              are not fully satisfied with our service, we will work to make it
              right, demonstrating our commitment to excellence and customer
              care.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4} className="text-center p-3">
            <img
              src="https://static.thenounproject.com/png/2129678-200.png"
              alt="car-diagnostics"
              className="serviceImage"
            />
            <h5>Convenient Location and Hours</h5>
            <p>
              We understand that your time is valuable. That’s why we offer
              extended hours, including early mornings, late evenings, and
              Saturdays, to accommodate your busy schedule.
            </p>
           
          </Col>
        </Row>
      </Container>

      <Advantages/>
      <TestimonialCarousel/>
      <Marquee/>
      <Faqs/>
    </>
  );
};

export default Home;
