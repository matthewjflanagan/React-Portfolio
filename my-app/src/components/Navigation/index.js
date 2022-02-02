import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

export default function Navigation() {
  return (
    <nav className="container-nav">
        <ul id="webpageLinks" className="nav nav-tabs">
            <li>
                <Link
                to="./src/components/pages/Home/index"
                className={
                window.location.pathname === './src/components/pages/Home/index' ? 'nav-link active' : 'nav-link'
                }
            >
                Home
            </Link>
            </li>
            <li>
            <Link
            to="../pages/Project/index"
            className={
              window.location.pathname === '/pages/Project'
                ? 'nav-link active'
                : 'nav-link'
            }
          >
            Portfolio
          </Link>
            </li>
            <li>
                <Link
                to="../pages/Contact/index"
                className={
                window.location.pathname === '/pages/Contact'
                    ? 'nav-link active'
                    : 'nav-link'
                }
            >
                Contact
            </Link>
            </li>
            <li>
                <Link
                to="../pages/Resume/index"
                className={
                window.location.pathname === '/pages/Resume'
                    ? 'nav-link active'
                    : 'nav-link'
                }
            >
                Resume
            </Link>
            </li>
        </ul>   
    </nav>
  );
}
