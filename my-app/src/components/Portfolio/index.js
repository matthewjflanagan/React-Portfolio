import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  const projects = [
    {
      id : 1,
      name : 'HR Management System',
      img : './HRManagementSystem.png',
      repo : 'https://github.com/alifaizan786-op/HR_Management_System',
      description : 'kdjfalksjflksdj'
    },
    {
      id : 2,
      name : 'JOBS 4 MORE',
      img : './openingpagewithoutdropdown.png',
      repo : 'https://matthewjflanagan.github.io/JOBS-4-MORE/',
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
