import React from "react";
import {SAMPLE_PAGE_TITLE} from '../../constants/text';
import Logo from "../Information/Logo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Drawing = () => {
  return (
  <Container fluid className='drawing page'>
    <Row>
      <Logo/>
    </Row>
    <Row>
      <h3 className="chapter">§3</h3>
    </Row>
    <Row>
      <h1 className="heading">Drawing<br></br>Techniques</h1>
    </Row>
    <Row>
        <p className="caption">Lorem ipsum dolor sit amet</p>
        <div className="portrait advertisement"></div>
    </Row>
    <Row>
        <Col xs={6} md={6} lg={6}>
            <p className="text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r</p>
        </Col>
        <Col xs={6} md={6} lg={4}>
            <p className="small-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in r</p>
        </Col>
        <Col xs={0} md={0} lg={2}>
        </Col>
    </Row>
    <Row>
        <p className="quote">"<br></br>Lorem ipsum dolor sit amet, consectetur adipiscing eli</p>
        <p className="quotee">Rick Dalton</p>
    </Row>
  </Container>
  );
};

export default Drawing;
