import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const accordionContent = [
  {
    header: "What is Top-Gear ?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    header: "Why should I choose Top-Gear ?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    header: "How can you offer upto 40% savings on services?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    header: "How is Top-Gear different from the other platforms out there?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
  {
    header: "Where can I book car service with Top-Gear ?",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  },
];

const Faqs = () => {
  return (
    <>
    <h2 className="text-center p-5">Brands We Serve</h2>
      <Container>
        <Row>
          <Col>
            {" "}
            <img
              src="https://www.carlogos.org/car-logos/honda-logo-2000-full-download.png "
              alt="brand"
               className="img-fluid"
               style={{padding:"1rem"}}
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://i.pinimg.com/originals/9d/af/f8/9daff8341b698b79f82086d09699181c.png"
              alt="brand"
               className="img-fluid"
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://bcassetcdn.com/public/blog/wp-content/uploads/2023/07/21183222/emblem.jpg"
              alt="brand"
               className="img-fluid"
               
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://www.carlogos.org/car-logos/toyota-logo-2005-download.png"
              alt="brand"
               className="img-fluid"
               style={{padding:"2rem"}}
            />
          </Col>
          <Col>
            {" "}
            <img
              src="https://1000logos.net/wp-content/uploads/2018/02/BMW-Logo-1963.png"
              alt="brand"
               className="img-fluid"
             
            />
          </Col>
        </Row>
      </Container>

    
        <div className="d-flex w-100" style={{ height: '80vh' }}>
          <div style={{ backgroundColor: "black", width: "60%" }} className="equal-height">
          <h4 style={{color:"white"}}>Get A Fair Quote Along With Free Doorstep Pick-up & Drop Facility</h4>
          <p>Whether you’re the driver of your own car or a rental, you’re covered 24/7, 365 days a year</p>
          <span>Request A Callback</span>
          </div>
          <div style={{ width: "40%", overflow: "hidden" }} className="equal-height">
            <img
              src="https://i.pinimg.com/736x/21/5c/83/215c83ec303ce05b53f44dc4b0b502cd.jpg"
              alt="car"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          
          </div>
        </div>
   
        <h2 className="text-center p-4">Top-Gear FAQs</h2>
      <Container >
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
