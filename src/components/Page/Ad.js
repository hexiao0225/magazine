import React from "react";
import Logo from "../Information/Logo";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Ad = () => {
  return (
  <Container fluid className='ad page'>
    <Row>
      <Logo/>
    </Row>
    <Row>
      <div className="portrait earth">
      </div>
    </Row>
    <Row>
        <Col xs={4} md={4} lg={6}>
            <p className="small-text italic">is nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
        </Col>
        <Col xs={8} md={8} lg={6}>
            <p className="text">is nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident</p>
        </Col>
    </Row>
  </Container>
  );
};

export default Ad;
