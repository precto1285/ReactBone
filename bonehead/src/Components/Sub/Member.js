import React from 'react';
import { Card } from 'reactstrap';

const Member = props => {
  return (
    <div className="container">
      <Card>
        <div className="card-header">
          {props.name}
        </div>
        <div className="card-body">
          {props.role}
        </div>
        <div className="card-footer"></div>
      </Card>
    </div>
  )
}

export default Member;