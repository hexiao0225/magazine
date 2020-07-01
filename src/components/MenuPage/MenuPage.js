import React from "react";
import { MENU_TITLE } from "../../constants/text";
import Logo from "../Information/Logo";
import Date from "../Information/Date";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Calendar from './Calendar'

const MenuPage = () => {
  return (
    <Container fluid className='menu-page'>
      <Row>
        <Logo />
      </Row>
      <Row>
        <h1 className='heading'>
          Rise of<br></br>a Visual<br></br>Culture
        </h1>
      </Row>
      <Row>
        <Col xs={4} md={4} lg={6}>
          <Date />
        </Col>
        <Col xs={8} md={8} lg={6}>
          <p className='intro In-View'>
            Is television the new fast track to movie stardom? More and more
            actors and actresses are using their popularity on the small screen
            as a stepping stone to big Hollywood feature films. This issue’s
            feature article dives into Bounty Law start Rick Dalton’s attempt to
            shake his reputation as small screen start and finally make it big.
          </p>
        </Col>
      </Row>
      {/* <div className='content'>
        <Row
          onMouseEnter={() => {
            console.log("entered letter from editor");
          }}
          onMouseLeave={() => {}}
        >
          <Col xs={6} md={6} lg={6}>
            <h3 className='title'>
              Letter From<br></br>the Editor
            </h3>
          </Col>
          <Col xs={4} md={3} lg={3}>
            Welcome
          </Col>
          <Col xs={2} md={3} lg={3}>
            §1
          </Col>
        </Row>

        <Row>
          <Col xs={6} md={6} lg={6}>
            <h3 className='title'>
              Rick Dalton:<br></br> Rise of a Leading Man
            </h3>
          </Col>
          <Col xs={4} md={3} lg={3}>
            Making the jump from TV star to Hollywood Hero
          </Col>
          <Col xs={2} md={3} lg={3}>
            §2
          </Col>
        </Row>
      </div> */}
      {/* <Row>
        <h3 className="chinese-title">國民畫中</h3>
        <h1 className="chinese-title">書歷年九十</h1>
      </Row> */}
      <Row className="calendar">
          <Calendar/>
      </Row>
    </Container>
  );
};

export default MenuPage;
