import React from 'react';

export function Shops() {
    return (
        <React.Fragment>
        <h1 style={titleStyle}>Shops</h1>
        <p style={paraStyle}>Shops that sell these ingredients.</p>

 <ul style={shopStyle}>
     <li>Store Name: REWE,
        Location: Prenzlauer Berg</li>
        <li>Store Name: Netto,
        Location: Ku'Damm</li>
        <li>Store Name: Aldi
        Location: Charlottenburg</li>
 </ul>

    </React.Fragment>
    )
}

const shopStyle = {
   marginLeft: "20px",
   fontSize: "26px",
}

const titleStyle = {
    marginLeft: "20px",
    fontSize: "38px",
 }
 const paraStyle = {
    marginLeft: "20px",
    fontSize: "26px",
 }

export default Shops;
