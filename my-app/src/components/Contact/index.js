import React from 'react';
import './style.css';

import React from 'react';

export default function Contact() {
  return (
    <nav>
        <ul id="contactlinks">
            <li class="contactme">
                Phone Number: 123-456-7890
            </li>
            <li class="contactme">
                Email: mattflanagan67@gmail.com
            </li>
            <li>
                <a class="contactme" href="https://github.com/matthewjflanagan">GitHub Account</a>
            </li>
            <li>
                <a class="contactme contactlinks" href="https://www.linkedin.com/in/matthew-flanagan-13253a223/">Linked In Page</a>
            </li>
        </ul>
    </nav>
  );
}
