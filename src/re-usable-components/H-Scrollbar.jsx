import React, { useRef, useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import "../styles/style.css";
import useAOS from "../custom-hooks/Aos";

// Horizontal scroll component with AOS animation and horizontal scroll functionality

const HScroll = ({ data }) => {
  useAOS({ duration: 1000 });

  const scrollContainerRef = useRef(null);
  const [isHorizontalScrolling, setIsHorizontalScrolling] = useState(false);

  // Handle horizontal scroll on mouse wheel event
  useEffect(() => {
    const handleWheel = (event) => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += event.deltaY;
        setIsHorizontalScrolling(true);
      }
    };

    // Handle scroll event to disable vertical scrolling at the end of horizontal scroll
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

    // Add event listeners to the scroll container
    const scrollContainer = scrollContainerRef.current;
    scrollContainer.addEventListener("wheel", handleWheel);
    scrollContainer.addEventListener("scroll", handleScroll);

    // Clean up event listeners on component unmount
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
          <div key={index} className="image-container" data-aos="flip-left">
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
