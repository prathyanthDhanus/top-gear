import React from "react";
import FlipCard from "../re-usable-components/card";
import { Container, Row, Col } from "react-bootstrap";
import { serviceCardData } from "../data/Data";
import ColwithImage from "../re-usable-components/ColwithImage";
import ImagewithCol from "../re-usable-components/ImagewithCol";

const Services = () => {
  return (
    <div className="p-3">
      <ColwithImage
        title="Service Overview"
        text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum"
        imageUrl="https://www.shutterstock.com/image-photo/car-service-technologycustomer-satisfaction-guarantee-600nw-2271159941.jpg"
      />
      <Container>
        <h1 className="text-center ">Services Offered</h1>

        <Row>
          {serviceCardData.map((card, index) => (
            <Col md={4} key={index}>
              <div className="p-5">
                <FlipCard
                  imageSrc={card.imageSrc}
                  title={card.title}
                  description={card.description}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container>
        <h1 className="text-center ">Detailed Service Descriptions</h1>
        <ColwithImage
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"
          imageUrl="https://media.istockphoto.com/id/1635077149/vector/concept-of-effectiveness-efficiency-or-productivity-for-better-results-improve-performance.jpg?s=612x612&w=0&k=20&c=NfQbaqWW-fErvNKi08Ophe5fJRrsC3xGdz81WC-F3mY="
        />
        <ImagewithCol
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,"
          imageUrl="https://media.istockphoto.com/id/1359876068/vector/customer-service-hotline-operators-consult-customers-with-headsets-on-computers-247-global.jpg?s=612x612&w=0&k=20&c=HcrFsPakslvox6rWnOWllH-jJ32TUNrTKusZ1J0_5oc="
        />
        <ColwithImage
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,"
          imageUrl="https://media.istockphoto.com/id/1441507385/vector/woman-on-coffe-break-eating-donut-at-computer-workplace.jpg?s=612x612&w=0&k=20&c=fXGPeD377f9v5GXQ8iLfoifPHxj9J5xkaL7QQn-zHTk="
        />
        <ImagewithCol
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
          imageUrl="https://media.istockphoto.com/id/1603182869/vector/manager-providing-constructive-feedback-vector-illustration.jpg?s=612x612&w=0&k=20&c=GeWTkyjiQUUQ5NzAaN1XFhTJzwPeUavk4i73wsiws2k="
        />
      </Container>

      <Container>
        <Row>
          <Col xs={12} sm={6} md={4} lg={4} xl={6}>
            <img
              src="https://www.speedcarwash.com/blog/wp-content/uploads/2020/03/general-car-care.jpg"
              alt="service"
              className="img-fluid"
            />
          </Col>
          <Col xs={12} sm={6} md={4} lg={4} xl={6}>
            <img
              src="https://etimg.etb2bimg.com/photo/85364012.cms"
              alt="service"
              className="img-fluid"
            />
          </Col>
        </Row>
      </Container>

      <Container className="p-5">
      <h1 className="text-center p-3 ">Service Feedbacks</h1>
        <Row>
          <Col>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).
          </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Services;
