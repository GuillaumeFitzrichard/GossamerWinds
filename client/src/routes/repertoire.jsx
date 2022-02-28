import React from 'react';

import Style from '../components/Style.jsx'
import { 
  getClassical,
  getPopular,
  getLatin,
} from '../../dist/musics.js';

const Repertoire = () => {
  let classical = getClassical();
  let popular = getPopular();
  let latin = getLatin();

  return(
    <div id="styles">
      <h1>Gossamer Winds' repertoire includes selections from a variety of styles, including:</h1>
      <Style
      works={classical}
      >Classical</Style>
      <Style
      works={popular}
      >Popular</Style>
      <Style
      works={latin}
      >Latin</Style>
    </div>
  );
};

export default Repertoire;