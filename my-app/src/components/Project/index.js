import React from 'react';

export default function Project({project}) {
  return (
  <div>
      <ul>
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
    <img src={project.img}/>
  </div>
  );
}
