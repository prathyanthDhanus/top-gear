import React from "react";
import { Container} from "react-bootstrap";
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
        <h2 className="text-center p-4 ">Top-Gear FAQs</h2>
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
