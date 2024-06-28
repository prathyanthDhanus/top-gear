import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/style.css";

const HScroll = ({ data }) => {
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

export default HScroll;
