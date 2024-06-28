// import React from 'react';
// import { Container, Row, Col } from 'react-bootstrap';

// const ImagewithCol = ({ title, text, imageUrl }) => {
//   return (
//     <Container>
//     <h1 className='text-center'>{title}</h1>
//     <Row className='p-2'>
//       <Col className='text-center' xs={12} sm={6} md={12} lg={8} xl={6}>
//         <img src={imageUrl} alt='service' style={{width:"25rem",objectFit:"cover"}} />
//       </Col>
//       <Col xs={12} sm={6} md={6} lg={8} xl={6}>
//         <p>{text}</p>
//       </Col>
//     </Row>
//   </Container>
//   )
// }

// export default ImagewithCol

import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const ImagewithCol = ({ title, text, imageUrl }) => {
  return (
    <Container>
      <h1 className='text-center '>{title}</h1>
      <Row >
        <Col className='text-center' xs={12} md={6}>
          <img src={imageUrl} alt='service' className="img-fluid" style={{ width: "100%", height: "auto", objectFit: "cover" }} />
        </Col>
        <Col className="pt-5" xs={12} sm={6} md={12} lg={8} xl={6}>
          <p>{text}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default ImagewithCol;
