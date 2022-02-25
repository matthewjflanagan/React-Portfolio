import React from 'react';
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="container-nav">
        <ul id="webpageLinks">
            <li>
                <Link to="/">HOME</Link>
            </li>
            <li>
                <Link to="/About">ABOUT</Link>
            </li>
            <li>
                <Link to="/Portfolio">PORTFOLIO</Link>
            </li>
            <li>
                <Link to="/Contact">MESSAGE</Link>
            </li>
            <li>
                <Link to="/Resume">RESUME</Link>
            </li>
        </ul>   
    </nav>
  );
}
