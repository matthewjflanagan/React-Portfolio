import React from 'react';
import './style.css';

export default function Header() {
  return (
    <header>
        <div className="h1div">
            <h1>MATTHEW FLANAGAN</h1>
        </div>
        <div className="imgDisplay">
            <img src="./fancypic.jpg" alt="professional" />
        </div>
    </header>
  );
}
