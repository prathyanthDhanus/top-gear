import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import { testimonials } from "../data/Data";

const TestimonialCarousel = () => {
  return (
    <>
      {/* =================!!!!!!!!! testmonials section !!!!!!!!!================== */}
      <Container className="my-5 p-4">
        <h1 className="text-center text-danger p-5">Customer Testimonials</h1>
        {/* !!!!!!!!!! carousel section !!!!!!!!! */}
        <Carousel indicators={false} interval={3000}>
          {testimonials.map((testimonial, index) => (
            <Carousel.Item key={index}>
              <div className="d-flex flex-column align-items-center">
                {/* !!!!!!!!!! profile photo (customer) !!!!!!!!! */}
                <img
                  className="d-block img-fluid rounded-circle mb-3"
                  src={testimonial.image}
                  alt={`${testimonial.name}`}
                  style={{ width: "150px", height: "150px" }}
                />

                {/* !!!!!!!!!! customer words !!!!!!!!! */}
                <blockquote className="blockquote text-center">
                  {testimonial.text.map((paragraph, i) => (
                    <p key={i} className="mb-4">
                      {paragraph}
                    </p>
                  ))}

                  {/* !!!!!!!!!! customer name !!!!!!!!! */}
                  <footer className="blockquote-footer">
                    {testimonial.name}{" "}
                    <cite title="Source Title">{testimonial.title}</cite>
                  </footer>
                </blockquote>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        {/* ==============!!!!!!!!!! carousel section end !!!!!!!!================ */}
      </Container>
      {/* =================!!!!!!!! testmonial section end !!!!!!!!!!================== */}

      {/* =================!!!!!!!! bmw car with caption !!!!!!!!!!================== */}
      <Container className="my-5">
        <div className="d-flex justify-content-center">
          {/* !!!!!!!!!! image section !!!!!!!!! */}
          <div md={6} className="d-flex align-items-center">
            <img
              src="https://i.pinimg.com/736x/7b/62/11/7b62114d78818be4b95cf7e7346d59ee.jpg"
              alt="Example"
              className="img-fluid"
              style={{ height: "800px", objectFit: "cover", width: "25rem" }}
            />
          </div>

          <div
            md={6}
            className="d-flex align-items-center justify-content-center"
            style={{ backgroundColor: "black", color: "white", width: "30rem" }}
          >
            {/* !!!!!!!!!! caption section !!!!!!!!! */}
            <div className="text-center">
              <h2>Rev Up Your Ride with Expert Care!</h2>
              <p>Where Quality Meets the Open Road. </p>
            </div>
          </div>
        </div>
      </Container>
      {/* =================!!!!!!!!! bmw car with caption end !!!!!!!================ */}
    </>
  );
};

export default TestimonialCarousel;
