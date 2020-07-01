import React from "react";
import {SAMPLE_PAGE_TITLE} from '../../constants/text';
import Logo from "../Information/Logo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Rise = () => {
  return (
  <Container fluid className='rise page'>
    <Row>
      <Logo/>
    </Row>
    <Row>
      <h3 className="chapter">§2</h3>
    </Row>
    <Row>
      <h1 className="heading">Rise<br></br>of a<br></br>Culture</h1>
    </Row>
    <Row>
    <Col xs={8} md={8} lg={6}>
        <p className="text">
        These pages step back into 1969, the year Easy Rider and The Wild Bunch were released, the year of Woodstock and the moon landing, a year of peace, love, tragedy.
        </p>
      </Col>
      <Col xs={4} md={4} lg={6}>
      </Col>
    </Row>
    <Row>
      <Col xs={8} md={8} lg={6}>
        <h3 className="text">
        These pages step back into 1969, the year Easy Rider and The Wild Bunch were released, the year of Woodstock and the moon landing, a year of peace, love, tragedy, and war. Before you experience Once Upon a Time In … Hollywood, take the time to immerse yourself in Rick Dalton’s world. Enjoy. 
        </h3>
      </Col>
      <Col xs={4} md={4} lg={6}>
      </Col>
    </Row>
    <Row>
      <Col xs={10} md={10} lg={4}></Col>
      <Col xs={2} md={2} lg={8}>
          <div className="portrait"></div>
      </Col>
    </Row>
    <Row>
      <Col xs={10} md={8} lg={6}>
        <div className="horizontal"></div>
      </Col>
      <Col xs={2} md={4} lg={6}>
      </Col>
    </Row>
  </Container>
  );
};

export default Rise;
