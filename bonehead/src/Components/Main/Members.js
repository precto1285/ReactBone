import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Member from './../Sub/Member';


export default class Members extends Component {
  render() {
    return (
      <div>
        <h1>Members:</h1>
        <Row className="my-5 py-5">
          <Col>
            <Member />
          </Col>
          <Col>
            <Member />
          </Col>
          <Col>
            <Member />
          </Col>
          <Col>
            <Member />
          </Col>
          <Col>
            <Member />
          </Col>
        </Row>
      </div>
    )
  }
}