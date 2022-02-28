import React from 'react';

import Pieces from './Pieces.jsx'

const Composer = (props) => {
  let allWorks = props.works.map((piece, id) => {
    return (
      <div id="works">
        <Pieces 
          key={id}
          title={piece}
        />
      </div>
    )
  })
  return (
    <div id="name">
      <h1>{props.name}</h1>
      {allWorks}
    </div>
  );
};

export default Composer;
