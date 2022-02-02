import React from 'react';

export default function Project({project}) {
  return (
  <div id="appsdiv">
      <ul className="apps">
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
    <img className='applicationpics' src={project.img}/>
  </div>
  );
}
