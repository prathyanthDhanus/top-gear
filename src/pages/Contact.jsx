import React from 'react';
import ReusableCard from '../re-usable-components/card';
import { Container, Row, Col } from 'react-bootstrap';

const cardData = [
  {
    title: "Whatsapp",
    text: `"Chat with Us on WhatsApp for Your Sweetest Cravings!" 98956570XX`,
    imgSrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/1200px-WhatsApp.svg.png", 
    alt:"whatsapp",
    buttonText: "Say Hello👋",
    buttonLink: "https://web.whatsapp.com/"
  },
  {
    title: "Instagram",
    text: `"Follow Us on Instagram for a Slice of Sweet Inspiration!"`,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtAb9U5_tAjwahmghHkdrXnBOCzkyZ6suzZg&s", 
    alt:"instagram",
    buttonText: "Say Hello👋",
    buttonLink: "https://www.instagram.com/"
  },
  {
    title: "Facebook",
    text: `"Join Our Facebook Community for the Latest Cake Creations!"`,
    imgSrc: "https://logodix.com/logo/1058183.png", 
    alt:"facebook",
    buttonText: "Say Hello👋",
    buttonLink: "https://www.facebook.com/"
  },
  {
    title: "G-Mail",
    text: `"Email Us at Gmail for Sweet Inquiries and Orders!"`,
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0XvFduY7sDBknSh_lJd80OzsdZ_LaHL2w-g&s", 
    alt:"g-mail",
    buttonText: "Say Hello👋",
    
  },
  {
    title: "Phone",
    text: `"Give Us a Call to Sweeten Your Day!" 0497 27669XX`,
    imgSrc: "https://static.vecteezy.com/system/resources/previews/005/747/811/original/call-answer-icon-symbol-green-call-icon-symbol-for-web-app-logo-vector.jpg", 
    alt:"phone",
    buttonText: "Say Hello👋",
   
  },
 
];

const Contactus = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#690C36",
          height: "5rem",
          padding: "5rem",
        }}
      >
        <h1 style={{ fontWeight: "bolder", color: "#ffff" }}>Contact Us</h1>
      </div>
      <Container >
        <Row  >
          {cardData.map((card, index) => (
            <Col md={4}  key={index} >
                <div className="p-5">

              <ReusableCard 
                title={card.title}
                text={card.text}
                imgSrc={card.imgSrc}
                buttonText={card.buttonText}
                buttonLink={card.buttonLink}
                
                />
                </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Contactus;