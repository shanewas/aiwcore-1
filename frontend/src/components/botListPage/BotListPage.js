import React, { Component } from "react";
import Card from "react-bootstrap/Card";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import BotTable from "./BotTable";
import BotLog from "./BotLog";
import Navbarup from "../navBar/Navbarup";

export default class BotListPage extends Component {
  render() {
    return (
     <div>
        <Navbarup></Navbarup>
        <div style={{margin:"13vh 10vh"}}>
        <Card>
          <Card.Body>
            <h1>Titile Would Go there</h1>
          </Card.Body>
        </Card>

        <Row>
          <Col xs={12} md={12} lg={9} xl={9}>
            <BotTable />
          </Col>
          <Col xs={12} md={12} lg={3} xl={3}>
            <BotLog />
          </Col>
        </Row>
      </div>
      </div>
    );
  }
}
