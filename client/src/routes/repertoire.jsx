import React, { useState, useEffect } from 'react';

import Style from '../components/Style.jsx'
import { 
  getClassical,
  getPopular,
  getLatin,
} from '../../dist/musics.js';
let classical = getClassical();
let popular = getPopular();
let latin = getLatin();

// const [state, setState] = useState({
//   classic: false,
//   pop: false,
//   lat: false,
// });

// const {
//   classic,
//   pop,
//   lat,
// } = state;
const Repertoire = () => {
  const [classic, setClassic] = useState(false)
  const [pop, setPop] = useState(false)
  const [lat, setLat] = useState(false)

  const classicClick = () => {
    setClassic(s => !s)
    setPop(false)
    setLat(false)
  }

  const popClick = () => {
    setPop(s => !s)
    setClassic(false)
    setLat(false)
  }

  const latClick = () => {
    setLat(s => !s)
    setClassic(false)
    setPop(false)
  }

  return(
    <div id="styles">
      <div id="repTitle">Gossamer Winds' repertoire includes selections from a variety of styles, including:</div>
      <div id="styleContainer">
        <Style
          works={classical}
          clickHandle={classicClick}
          view={classic}
          genre={'Classical'}
        />      
        <Style
          works={popular}
          clickHandle={popClick}
          view={pop}
          genre={'Popular'}
        />
        <Style
          works={latin}
          clickHandle={latClick}
          view={lat}
          genre={'Latin'}
        />
      </div>
    </div>
  );
};

export default Repertoire;