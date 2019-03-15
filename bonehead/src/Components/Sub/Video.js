import React from 'react';
import { Row, Col } from 'reactstrap';

const Video = () => {
  return (
    <div className="container">
      <Row className="my-1 text-center">
        <Col>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/5wZCxo_NylU"></iframe>
        </Col>
        <Col>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/emAnpQrsMVo"></iframe>
        </Col>
      </Row>
      <Row className="my-1 text-center">
        <Col>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/6mvfQh1oO0E"></iframe>
        </Col>
        <Col>
          <iframe width="420" height="315" src="https://www.youtube.com/embed/JIV8KNDCHOU&t=8s"></iframe>


        </Col>
      </Row>

    </div>
  )
}

export default Video;

