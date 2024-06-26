
//Horizontal scroll  homepage

import React from "react";
import { Container } from "react-bootstrap";
import { hScrollData } from "../data/Data";
import HScroll from "../re-usable-components/H-Scrollbar";

const HorizontalScroll = () => {
 

  return (
    <Container>
        <h1 className="text-center text-danger p-5">Our Specialities</h1>
      <HScroll data={hScrollData} />
    </Container>
  );
};

export default HorizontalScroll;
