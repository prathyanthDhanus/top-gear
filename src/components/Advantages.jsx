import React from "react";
import CarouselComponent from "../re-usable-components/Carousel";
import { Container, Row, Col } from "react-bootstrap";
import { styles } from "../styles/style";

const images = [
  {
    src: "https://4kwallpapers.com/images/wallpapers/mclaren-720s-gt3x-race-cars-2021-5k-8k-2560x1440-4977.jpg",
    alt: "Image 1",
  },
  {
    src: "https://w0.peakpx.com/wallpaper/442/308/HD-wallpaper-mclaren-p1-gtr-super-car-concept-mclaren-mclaren-p1-cars-concept-cars.jpg",
    alt: "image2",
  },
  {
    src: "https://www.teahub.io/photos/full/141-1413350_mclaren-f1-gtr-wallpaper-p1-gtr-mclaren-p1.png",
    alt: "Image 3",
  },
];

const Advantages = () => {
  return (
    <>
      <Container>
        <Row>
          <CarouselComponent images={images} />
        </Row>
      </Container>
      <Container>
        <h2>Our Advantages</h2>
        <Row>
          <Col xs={12} md={6} lg={3}>
            <img
              src="https://www.tgpindia.com/wp-content/uploads/2023/03/engine-parts.jpg"
              alt="Auto mechanic working on car"
              className="img-fluid"
            />
            <p>Genuine Parts</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img
              src="https://img.freepik.com/premium-photo/auto-car-repair-service-center-mechanic-examining-car-suspension_136930-6.jpg"
              alt="Mechanic examining car suspension"
              className="img-fluid"
            />
            <p>Genuine Parts</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img
              src="https://st2.depositphotos.com/1158045/6706/i/450/depositphotos_67063213-stock-photo-mechanic-at-work-in-his.jpg"
              alt="Mechanic at work"
              className="img-fluid"
            />
            <p>Genuine Parts</p>
          </Col>
          <Col xs={12} md={6} lg={3}>
            <img
              src="https://www.shutterstock.com/image-photo/portrait-shot-handsome-mechanic-working-600nw-1711144648.jpg"
              alt="Handsome mechanic working"
              className="img-fluid"
            />
            <p>Genuine Parts</p>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <h2>We Are At</h2>
          <Col>
            <img
              src="https://cdn-icons-png.freepik.com/512/5460/5460427.png"
            
              style={styles.serviceImage}
            /><br/>
            <span>35480</span>
          </Col>
          <Col>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-find-jobs-1956265-1650428.png"
              style={styles.serviceImage}
            /><br/>
            <span>39133</span>
          </Col>
          <Col>
            <img
              src="https://cdn.pixabay.com/photo/2014/04/02/10/44/eye-304414_960_720.png"
              style={styles.serviceImage}
            /><br/>
            <span>25</span>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Advantages;
