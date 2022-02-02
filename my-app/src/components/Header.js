import React from 'react';
import Profile from '../assets/fancypic.jpg'

export default function Header() {
  return (
    <header>
        <div className="h1div">
            <h1>MATTHEW FLANAGAN</h1>
        </div>
        <div className="imgDisplay">
            <img src={Profile} alt="professional"></img>
        </div>
    </header>
  );
}
