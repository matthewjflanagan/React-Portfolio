import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  const projects = [
    {
      id : 1,
      name : 'project1',
      img : './logo512.png',
      repo : 'www.github.com',
      description : 'kdjfalksjflksdj'
    },
    {
      id : 2,
      name : 'project2',
      img : './logo192.png',
      repo : 'www.github.com',
      description : 'blah'
    }
  ];

  return (
    <main>
      {projects.map(project => <Project key = {project.id} project = {project} />)}
    </main>
  );
};

export default Portfolio;
