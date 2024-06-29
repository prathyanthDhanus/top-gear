import React from "react";
import { Container} from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { accordionContent } from "../data/Data";

const Faqs = () => {
  return (
    <>
    
        <div className="d-flex w-100" style={{ height: '80vh' }}>
         
          <div style={{ backgroundColor: "black", width: "60%" }} className="equal-height">
          <h4 className="homeText p-5" >Get A Fair Quote Along With Free Doorstep Pick-up & Drop Facility</h4>
         
          </div>
          <div style={{ width: "40%", overflow: "hidden" }} className="equal-height">
            <img
              src="https://i.pinimg.com/736x/21/5c/83/215c83ec303ce05b53f44dc4b0b502cd.jpg"
              alt="car"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          
          </div>
        </div>
   
      <Container className="p-4">
        <h2 className="text-center text-danger p-4 ">Top-Gear FAQs</h2>
        <Accordion defaultActiveKey="0" >
          {accordionContent.map((item, index) => (
            <Accordion.Item eventKey={index.toString()} key={index} >
              <Accordion.Header  >{item.header}</Accordion.Header>
              <Accordion.Body >{item.body}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </Container>
 
    </>
  );
};

export default Faqs;
