import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { styles } from "../styles/style";
import Advantages from "../components/Advantages";
import TestimonialCarousel from "../components/Testimonials";

const Home = () => {
  return (
    <>
      <div style={styles.container}>
        <div>
          <h1>Luxury Car Care</h1>
        </div>
      </div>

      <Container>
        <h2>Why Choose Us</h2>
        <Row>
          <Col xs={12} md={4} lg={4}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/035/511/694/non_2x/car-diagnostics-icon-illustration-vector.jpg"
              alt="car-diagnostics"
              style={styles.serviceImage}
            />

            <h5>Computerised Diagnostics</h5>
            <p>
              Our workshop is equipped with the latest diagnostic tools and
              software, allowing us to quickly and accurately identify any
              issues with your vehicle. This ensures efficient repairs and
              minimizes downtime.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img
              src="https://cdn-icons-png.freepik.com/512/6342/6342791.png"
              alt="car-diagnostics"
              style={styles.serviceImage}
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
          <Col xs={12} md={4} lg={4}>
            <img
              src="https://t3.ftcdn.net/jpg/05/38/63/98/360_F_538639833_bzLDFDuegFpgHEiYPwf5QYWQgwsORvmv.jpg"
              alt="car-diagnostics"
              style={styles.serviceImage}
            />
            <h5>High-Quality Services</h5>
            <p>
              We use high-quality parts and fluids that meet or exceed OEM
              (Original Equipment Manufacturer) standards to ensure the
              longevity and reliability of your vehicle. Every service is
              performed with meticulous attention to detail.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img
              src="https://www.shutterstock.com/image-vector/wrench-gear-icon-service-tool-260nw-1928977187.jpg"
              alt="car-diagnostics"
              style={styles.serviceImage}
            />
            <h5>State-of-the-Art Equipment</h5>
            <p>
              We continuously upgrade our facilities with state-of-the-art
              equipment, including advanced alignment machines, computerized
              wheel balancers, and cutting-edge repair tools, ensuring that we
              can handle even the most complex automotive problems.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img
              src="https://static.vecteezy.com/system/resources/previews/013/695/803/non_2x/customer-satisfaction-icon-style-free-vector.jpg"
              alt="car-diagnostics"
              style={styles.serviceImage}
            />
            <h5>Customer Satisfaction Guarantee </h5>
            <p>
              Our goal is complete customer satisfaction. If for any reason you
              are not fully satisfied with our service, we will work to make it
              right, demonstrating our commitment to excellence and customer
              care.
            </p>
          </Col>
          <Col xs={12} md={4} lg={4}>
            <img
              src="https://static.thenounproject.com/png/2129678-200.png"
              alt="car-diagnostics"
              style={styles.serviceImage}
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
    </>
  );
};

export default Home;
