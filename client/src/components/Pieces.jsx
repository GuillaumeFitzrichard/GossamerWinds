import React from 'react';



const Pieces = (props) => {
  
  // const getPieces = (style) => {
  //   let entries = style.map((artist, aID) => {
  //     let pieces = artist.map((piece, pID) => {
  //       return <div id="piece"key={pID}>{piece}</div> 
  //     })
  //     return (
  //       <div id="composer"key={aID}>
  //         <h1>{artist}</h1>
  //         <li>{pieces}</li>
  //       </div>
  //     )
  //   })
  //   return (
  //     <div id={style}>{entries}</div>
  //   )
  // }

  return (
    <div id="title">
      <li>{props.title}</li>      
    </div>
  );
}

export default Pieces;