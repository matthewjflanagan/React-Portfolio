import React from 'react';
import './style.css';

export default function Navigation() {
    const name = 'matt';
  return (
    <nav>
        <ul id="webpageLinks">
            <li>
                <a className="webpagelinks" href="#aboutme" alt="link to about me section">ABOUT ME</a>
            </li>
            <li>
                <a className="webpagelinks" href="#work" alt="link to work section">PROJECTS</a>
            </li>
            <li>
                <a className="webpagelinks" href="#contactmeheader" alt="link to contact details">CONTACT</a>
            </li>
            <li>
                <a  className="webpagelinks" href="./Resume.pdf" alt="link to resume">RESUME</a>
            </li>
        </ul>   
    </nav>
  );
}
