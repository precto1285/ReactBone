import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import HomeSub from './../Sub/HomeSub';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Row>
          <Col>
            <p>Summary:</p>
            <HomeSub />
          </Col>
          <Col>
            <p>Images:</p>
            <HomeSub />
          </Col>
          <Col>
            <p>Merchandise:</p>
            <HomeSub />
          </Col>
        </Row>
      </div>

    )
  }
}