import React from 'react';

const Album = (props) => {
  return (
    <div className="container">
      <h3 className="text-white text-center bg-dark p-2">
        {props.album}
      </h3>
    </div>

  )
}

export default Album;