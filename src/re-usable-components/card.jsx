import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const ReusableCard = ({
  title,
  text,
  imgSrc,
  alt,
  buttonText,
  buttonLink,
  onClick,
}) => {
  return (
    <Card
      style={{
        width: "18rem",
        boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.2)",
        borderRadius: "20px",
      }}
    >
      <Card.Img variant="top" src={imgSrc} alt={alt} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Button variant="primary" href={buttonLink} onClick={onClick}>
          {buttonText}
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ReusableCard;