import React from 'react';
import './style.css';

export default function Contact() {
  return (
    <nav>
        <ul id="contactlinks">
            <li className="contactme">
                Phone Number: 123-456-7890
            </li>
            <li className="contactme">
                Email: mattflanagan67@gmail.com
            </li>
            <li>
                <a className="contactme" href="https://github.com/matthewjflanagan">GitHub Account</a>
            </li>
            <li>
                <a className="contactme contactlinks" href="https://www.linkedin.com/in/matthew-flanagan-13253a223/">Linked In Page</a>
            </li>
        </ul>
    </nav>
  );
}
