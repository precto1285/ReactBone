import React from 'react';
import { Card } from 'reactstrap';

const Member = props => {
  return (
    <div className="container text-center">
      <Card>
        <div className="card-header">
          <h4>{props.name}</h4>
        </div>
        <div className="card-body">
          <h6>{props.role}</h6>
        </div>
        <div className="card-footer"></div>
      </Card>
    </div>
  )
}

export default Member;