import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/style.css";

const data = [
  {
    imgSrc: "https://automechanica.com/uploads/service/service_image/1/1.jpg",
    title: "Expert Technicians",
  },
  {
    imgSrc: "https://carfixing.in/Uploads/ServiceImages/03192022013619.png",
    title: "Detailed Analyzing",
  },
  {
    imgSrc:
      "https://www.garageequipments.com/wp-content/uploads/2021/12/car-mechanic-changing-wheels-car-min-scaled.jpg",
    title: "Wheel Alignment",
  },
  {
    imgSrc:
      "https://valleycollision.com/wp-content/uploads/2023/08/mechanic-working-on-car-dent-repair.jpg",
    title: "Dent Repair Specialists!",
  },
  {
    imgSrc:
      "https://t3.ftcdn.net/jpg/06/88/11/10/360_F_688111011_0XuX4z5DgCgLnJ8wjhIDoVlh6YXRCKC8.jpg",
    title: "Quality Painting",
  },
];

const HorizontalScroll = () => {
  const scrollContainerRef = useRef(null);
  const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(false);

  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += event.deltaY;
        setIsHorizontalScrolling(true);
      }
    };

    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const maxScrollLeft =
          scrollContainerRef.current.scrollWidth -
          scrollContainerRef.current.clientWidth;
        if (scrollContainerRef.current.scrollLeft >= maxScrollLeft) {
          setIsHorizontalScrolling(false);
        }
      }
    };

    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("wheel", handleWheel);
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => {
      scrollContainer.removeEventListener("wheel", handleWheel);
      scrollContainer.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container
      className={`my-5 horizontal-scroll-container ${
        isHorizontalScrolling ? "disable-vertical-scroll" : ""
      }`}
      ref={scrollContainerRef}
    >
      <div className="d-flex horizontal-scroll-content">
        {data.map((item, index) => (
          <div key={index} className="image-container">
            <img
              src={item.imgSrc}
              alt={`Example ${index + 1}`}
              className="img-fluid image"
              style={{
                height: "600px",
                objectFit: "cover",
                width: "25rem",
                borderRadius: "5rem",
              }}
            />
            <div className="overlay">
              <div className="text">
                <h2>{item.title}</h2>
                
              </div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default HorizontalScroll;
