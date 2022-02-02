import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

export default function Navigation() {
  return (
    <nav className="container-nav">
        <ul id="webpageLinks" className="nav nav-tabs">
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
            <Link to="/Project">Portfolio</Link>
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
