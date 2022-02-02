import React from 'react';
import './style.css';

export default function Navigation() {
  return (
    <nav>
        <ul id="webpageLinks">
            <li>
                <a className="webpagelinks" alt="link to about me section">ABOUT ME</a>
            </li>
            <li>
                <a className="webpagelinks" alt="link to work section">PROJECTS</a>
            </li>
            <li>
                <a className="webpagelinks" alt="link to contact details">CONTACT</a>
            </li>
            <li>
                <a  className="webpagelinks" alt="link to resume">RESUME</a>
            </li>
        </ul>   
    </nav>
  );
}
