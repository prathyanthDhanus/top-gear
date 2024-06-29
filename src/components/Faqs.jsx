import React from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { accordionContent } from "../data/Data";
import useAOS from "../custom-hooks/Aos";

const Faqs = () => {
  useAOS({ duration: 1000 });

  return (
    <>
      {/* ===============!!!!!!!!! bmw car image section !!!!!!!!!============== */}
      <div className="d-flex justify-content-center">
        <div
          md={6}
          className="d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "black", color: "white", width: "80%" }}
        >
          {/* !!!!!!!!!! caption section!!!!!!!!! */}
          <div className="text-center">
            <h1
              data-aos="fade-down"
              data-aos-easing="linear"
              data-aos-duration="1500"
            >
              Get A Fair Quote Along With Free Doorstep Pick-up & Drop Facility
            </h1>
          </div>
          {/* !!!!!!!!!! caption section end !!!!!!!!! */}
        </div>
        {/* !!!!!!!!!! image section !!!!!!!!! */}
        <div className="d-flex align-items-center">
          <img
            src="https://i.pinimg.com/736x/21/5c/83/215c83ec303ce05b53f44dc4b0b502cd.jpg"
            alt="Example"
            className="img-fluid"
            style={{ height: "800px", objectFit: "cover", width: "25rem" }}
          />
        </div>
        {/* !!!!!!!!!! image section end !!!!!!!!! */}
      </div>

      {/* =============!!!!!!!! bmw image section end !!!!!!!!!=============== */}

      {/* =============!!!!!!!! accordination !!!!!!!!!=============== */}
      <Container className="p-4">
        <h1 className="text-center text-danger p-4 ">Top-Gear FAQs</h1>
        <Accordion defaultActiveKey="0">
          {accordionContent.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index}>
              <Accordion.Header>{item.header}</Accordion.Header>
              <Accordion.Body>{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
      {/* ===============!!!!!!! accordination end !!!!!!!=============== */}
    </>
  );
};

export default Faqs;
