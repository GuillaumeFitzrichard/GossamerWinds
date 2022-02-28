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
    <div className='name' id={props.name}>
      <h5>{props.name}</h5>
      {allWorks}
    </div>
  );
};

export default Composer;
