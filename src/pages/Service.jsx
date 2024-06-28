import React from 'react';
import FlipCard from '../re-usable-components/card';
import { Container, Row, Col } from 'react-bootstrap';

const cardData = [
  {
    imageSrc: "https://denttime.com/wp-content/uploads/2022/03/9215C768-55D9-4B4D-BDE8-29352DF098CE-min.jpeg",
    title: `Dent Work`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    alt:"phone",
  },
 
  {
    imageSrc: "https://img.freepik.com/premium-photo/close-up-auto-body-mechanic-buffing-scratch-sports-car_981948-129.jpg",
    title: `Painting`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    alt:"phone",
  },
 
  {
    imageSrc: "https://www.investopedia.com/thmb/3QrbIuJqD3FaD88bSM-drLkJAwA=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/173292168-56a956a55f9b58b7d0fa7af6.jpg",
    title: `Wheel Alignment`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    alt:"phone",
  },
 
  {
    imageSrc: "https://blog.prochoice.com.au/wp-content/uploads/2018/11/Mechanic-safety.jpg",
    title: `Engine Oil Change`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    alt:"phone",
  },
 
  {
    imageSrc: "https://assets.entrepreneur.com/content/3x2/2000/20160404181759-engine-garage-working-on-cars.png",
    title: `Engine Work`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.", 
    alt:"phone",
  },
 
  {
    imageSrc: "https://denttime.com/wp-content/uploads/2022/03/9215C768-55D9-4B4D-BDE8-29352DF098CE-min.jpeg",
    title: `Car Polish`,
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ", 
    alt:"phone",
  },
 
];

const Services = () => {
  return (
    <div>
      <div
      >
        <h1 className='text-center '>Service</h1>
      </div>
      <Container >
        <Row  >
          {cardData.map((card, index) => (
            <Col md={4}  key={index} >
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
    </div>
  );
};

export default Services;