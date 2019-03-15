import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Member from './../Sub/Member';


export default class Members extends Component {
  render() {
    this.state = {
      name: ['Dino Navarra', 'Chico Cristobal', 'Monjo Balinghasay', 'Phil Recto', 'Paul Lacsamana'],
      role: ['Vocals', 'Guitar', 'Bass', 'Drums']
    }
    return (
      <div>
        <h1>Members:</h1>
        <Row className="my-5 py-5">
          <Col>
            <Member
              name={this.state.name[0]}
              role={this.state.role[0]}
            />
          </Col>
          <Col>
            <Member
              name={this.state.name[1]}
              role={this.state.role[1]}
            />
          </Col>
          <Col>
            <Member
              name={this.state.name[2]}
              role={this.state.role[1]}
            />
          </Col>
          <Col>
            <Member
              name={this.state.name[3]}
              role={this.state.role[2]}
            />
          </Col>
          <Col>
            <Member
              name={this.state.name[4]}
              role={this.state.role[3]} />
          </Col>
        </Row>
      </div>
    )
  }
}