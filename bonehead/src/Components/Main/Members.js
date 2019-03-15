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
      <div className='container-fluid'>
        <h1 className='mt-5'>Members:</h1>
        <Row className="my-5 py-2">
          <Col className='col-sm-2'>
            <Member
              name={this.state.name[0]}
              role={this.state.role[0]}
            />
          </Col>
          <Col className='col-sm-2'>
            <Member
              name={this.state.name[1]}
              role={this.state.role[1]}
            />
          </Col>
          <Col className='col-sm-2'>
            <Member
              name={this.state.name[2]}
              role={this.state.role[1]}
            />
          </Col>
          <Col className='col-sm-2'>
            <Member
              name={this.state.name[3]}
              role={this.state.role[2]}
            />
          </Col>
          <Col className='col-sm-2'>
            <Member
              name={this.state.name[4]}
              role={this.state.role[3]} />
          </Col>
        </Row>
      </div>
    )
  }
}