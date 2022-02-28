import React from 'react';

import Composer from './Composer.jsx'

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
  // console.log('style?\n', props, '\ncatalogue?\n', catalogue(props.works))
  let aComposer = catalogue(props.works).map((entry, id) => {
    return (
      <Composer
        key={id}
        name={entry[0]}
        works={entry[1]}
      />
    )
  })
  console.log(props.view, props.genre)
  return (
    
    <div id={props.genre}>
      <button onClick={props.clickHandle}>{props.genre}</button>
      {props.view ? aComposer : null}
    </div>
    
  );
}

export default Style;
