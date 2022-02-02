import React from 'react';

export default function Project({project}) {
  return (
  <div>
      <ul id="work" className="apps">
          <li>
            {project.name}
          </li>
          <li>
            {project.repo}
          </li>
          <li>
            {project.description}
          </li>
      </ul>
    <img className='applicationpics' alt='apps' src={project.img}/>
  </div>
  );
}
