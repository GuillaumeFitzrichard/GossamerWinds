import React from 'react';

import Pieces from './Pieces.jsx'

let catalogue = (pieces) => {
  let sortedCatalogue = {};
  pieces.forEach((piece) => {
    let splitOne = piece.indexOf(' - ');
    let splitTwo = piece.lastIndexOf(' - ');
    let composer = piece.slice(0, splitOne);
    let movement = '';
    let work = piece.slice(splitOne + 3, piece.length);
    if (splitOne != splitTwo) {
      movement = piece.slice(splitTwo + 3, piece.length);
      work = piece.slice(splitOne + 3, splitTwo);
    };
    let composition = work;
    if (!sortedCatalogue[composer]) {
      sortedCatalogue[composer] = []
    }
    if (sortedCatalogue[composer].indexOf(composition) == -1) {
      sortedCatalogue[composer].push(composition)
    }  
  })
  return Object.entries(sortedCatalogue)
}


const Style = (props) => {

  return (
    <div id="style">
      <Pieces 
      style={catalogue(props.works)}
      />
    </div>
  );
}

export default Style;
