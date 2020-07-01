import React from "react";
import {SAMPLE_PAGE_TITLE} from '../../constants/text';
import Logo from "../Information/Logo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Letter = () => {
  return (
  <Container fluid className='letter page'>
    <Row>
      <Logo/>
    </Row>
    <Row>
      <h3 className="chapter">§1</h3>
    </Row>
    <Row>
      <h1 className="heading">Letter<br></br>from the<br></br>Editor</h1>
    </Row>
    <Row>
      <div className="portrait">
      </div>
    </Row>
    <Row>
      <Col xs={8} md={8} lg={6}>
        <p className="text">
        These pages step back into 1969, the year Easy Rider and The Wild Bunch were released, the year of Woodstock and the moon landing, a year of peace, love, tragedy, and war. Before you experience Once Upon a Time In … Hollywood, take the time to immerse yourself in Rick Dalton’s world. Enjoy. 
        </p>
      </Col>
      <Col xs={4} md={4} lg={6}>
      </Col>
    </Row>
  </Container>
  );
};

export default Letter;
