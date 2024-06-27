// TestimonialCarousel.js

import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";


const TestimonialCarousel = () => {
  const testimonials = [
    {
      name: "John Doe",
      title: "CEO of Company",
      text: [
        `🔻Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
        "  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat",
      ],
      image:
        "https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg",
    },
    {
      name: "Jane Smith",
      title: "CTO of Another Company",
      text: [
        "🔻Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Leo a diam sollicitudin tempor.",
        "Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Leo a diam sollicitudin tempor.",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1oLaDJlC-DvPibHvUAluSld6D4KG_Q00x6oMDubpL3K5lLeqWeKn8eUgbQ3ZiWjg6HM&usqp=CAU",
    },
    {
      name: "Alice Johnson",
      title: "Manager at Some Company",
      text: [
        "🔻Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        "Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Leo a diam sollicitudin tempor.",
        "Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Leo a diam sollicitudin tempor.",
      ],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTlHOIDT1fFfYhabUc7o-Pc08bqihLYc5XDKW-xRGFlUQJDs-rDs-IDKKxB1tl_m1wPY&usqp=CAU",
    },
  ];

  return (
    <>
      <Container className="my-5">
        <h2 className="text-center p-5">Customer Testimonials</h2>
        <Carousel indicators={false} interval={3000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column align-items-center">
                <img
                  className="d-block img-fluid rounded-circle mb-3"
                  src={testimonial.image}
                  alt={`${testimonial.name}`}
                  style={{ width: "150px", height: "150px" }}
                />
                <blockquote className="blockquote text-center">
                  {testimonial.text.map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                  <footer className="blockquote-footer">
                    {testimonial.name}{" "}
                    <cite title="Source Title">{testimonial.title}</cite>
                  </footer>
                </blockquote>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <Container className="my-5">
  <div className="d-flex justify-content-center">
    <div md={6} className="d-flex align-items-center">
      <img 
        src='https://i.pinimg.com/736x/7b/62/11/7b62114d78818be4b95cf7e7346d59ee.jpg' 
        alt="Example" 
        className="img-fluid" 
        style={{ height: '800px', objectFit: 'cover', width: '25rem' }} 
      />
    </div>
    <div md={6} className="d-flex align-items-center justify-content-center" style={{ backgroundColor: 'black', color: 'white', width: '30rem' }}>
      <div className="text-center">
        <h2>Rev Up Your Ride with Expert Care!</h2>
        <p>Where Quality Meets the Open Road. </p>
      </div>
    </div>
  </div>
</Container>
    </>
  );
};

export default TestimonialCarousel;
