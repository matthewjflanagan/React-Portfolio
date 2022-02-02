import React from 'react';
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <nav className="container-nav">
        <ul id="webpageLinks" className="nav nav-tabs">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/Portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/Contact">Contact</Link>
            </li>
            <li>
                <Link to="/Resume">Resume</Link>
            </li>
        </ul>   
    </nav>
  );
}
