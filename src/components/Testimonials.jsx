// TestimonialCarousel.js
import React from 'react';
import { Carousel, Container } from 'react-bootstrap';

const TestimonialCarousel = () => {
//   const testimonials = [
//     {
//       name: 'John Doe',
//       title: 'CEO of Company',
//       text: 'This product is amazing! It has changed the way we do business.',
//       image: 'https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg'
//     },
//     {
//       name: 'Jane Smith',
//       title: 'CTO of Another Company',
//       text: 'A revolutionary tool that has increased our efficiency significantly.',
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1oLaDJlC-DvPibHvUAluSld6D4KG_Q00x6oMDubpL3K5lLeqWeKn8eUgbQ3ZiWjg6HM&usqp=CAU'
//     },
//     {
//       name: 'Alice Johnson',
//       title: 'Manager at Some Company',
//       text: [
//         'An outstanding experience.',
//         'Highly recommended!',
//         'The support team is fantastic.'
//       ],
//       image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTlHOIDT1fFfYhabUc7o-Pc08bqihLYc5XDKW-xRGFlUQJDs-rDs-IDKKxB1tl_m1wPY&usqp=CAU'
//     }
//   ];

  const testimonials = [
    {
      name: 'John Doe',
      title: 'CEO of Company',
      text: [
        `🔻Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
        ' Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat',
        '  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat'
      ],
      image: 'https://static.vecteezy.com/system/resources/previews/012/941/847/original/illustration-of-avatar-girl-nice-smiling-woman-with-black-hair-flat-icon-on-purple-background-vector.jpg'
    },
    {
      name: 'Jane Smith',
      title: 'CTO of Another Company',
      text: [
        '🔻Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Leo a diam sollicitudin tempor.',
        'Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Leo a diam sollicitudin tempor.'
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1oLaDJlC-DvPibHvUAluSld6D4KG_Q00x6oMDubpL3K5lLeqWeKn8eUgbQ3ZiWjg6HM&usqp=CAU'
    },
    {
      name: 'Alice Johnson',
      title: 'Manager at Some Company',
      text: [
        '🔻Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        'Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Leo a diam sollicitudin tempor.',
        'Diam sollicitudin tempor id eu nisl nunc mi ipsum faucibus. Leo a diam sollicitudin tempor.'
      ],
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcTlHOIDT1fFfYhabUc7o-Pc08bqihLYc5XDKW-xRGFlUQJDs-rDs-IDKKxB1tl_m1wPY&usqp=CAU'
    }
  ];

  return (
    <Container className="my-5">
    <Carousel indicators={false} interval={3000}>
      {testimonials.map((testimonial, index) => (
        <Carousel.Item key={index}>
          <div className="d-flex flex-column align-items-center">
            <img
              className="d-block img-fluid rounded-circle mb-3"
              src={testimonial.image}
              alt={`${testimonial.name}`}
              style={{ width: '150px', height: '150px' }}
            />
            <blockquote className="blockquote text-center">
              {testimonial.text.map((paragraph, i) => (
                <p key={i} className="mb-4">{paragraph}</p>
              ))}
              <footer className="blockquote-footer">
                {testimonial.name} <cite title="Source Title">{testimonial.title}</cite>
              </footer>
            </blockquote>
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  </Container>
  );
};

export default TestimonialCarousel;
