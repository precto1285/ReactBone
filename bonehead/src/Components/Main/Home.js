import React, { Component } from 'react';
import { Jumbotron, Row, Col } from 'reactstrap';
import HomeSub from './../Sub/HomeSub';

export default class Home extends Component {
  render() {
    return (
      <div className='container'>
        <Jumbotron className="bg primary text-center text-white">
          <h1>BONEHEAD</h1>
        </Jumbotron>
        <div className="container">
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
      </div>
    )
  }
}