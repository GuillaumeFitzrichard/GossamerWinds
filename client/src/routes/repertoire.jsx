import React from 'react';
import { 
  getClassical,
  getPopular,
  getLatin,
} from '../../dist/musics.js';

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
    let composition = {
      title: work,
      movement: movement,
    };
    if (!sortedCatalogue[composer]) {
      sortedCatalogue[composer] = {
        compositions: []
      }
    }
    sortedCatalogue[composer].compositions.push(composition)
  })
  
  return sortedCatalogue
}

const Repertoire = () => {

  
  const getPieces = (style) => {
 
  }
  return(
    <div id="styles">
      <h1>Gossamer Winds' repertoire includes selections from a variety of styles, including:</h1>
      <h3>Classical</h3>
      <h3>Popular</h3>
      <h3>Latin</h3>
    </div>
  );
};

export default Repertoire;