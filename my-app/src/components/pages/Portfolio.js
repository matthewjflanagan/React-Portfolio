import React from 'react';
import Project from '../Project';

const Portfolio = () => {
  const projects = [
    {
      id : 1,
      name : 'HR Management System',
      img : './HRManagementSystem.png',
      repo : 'https://github.com/alifaizan786-op/HR_Management_System',
      description : 'HTML/CSS/Materialize/Javascript/Node.js/SQL/Handlebars'
    },
    {
      id : 2,
      name : 'JOBS 4 MORE',
      img : './openingpagewithoutdropdown.png',
      repo : 'https://matthewjflanagan.github.io/JOBS-4-MORE/',
      description : 'HTML/CSS/Javascript'
    },
    {
      id : 3,
      name : 'Tech Blog',
      img : './techBlog.png',
      repo : 'https://github.com/matthewjflanagan/Tech-Blog',
      description : 'HTML/CSS/Materialize/Javascript/Node.js/SQL/Handlebars'
    },
    {
      id : 4,
      name : 'Code Quiz',
      img : './runningapp.png',
      repo : 'https://github.com/matthewjflanagan/Code-Quiz',
      description : 'HTML/CSS/Javascript'
    },
    {
      id : 5,
      name : 'Squid Games',
      img : './squid-games.PNG',
      repo : 'https://github.com/matthewjflanagan/Squid-Games',
      description : 'HTML/CSS/Javascript'
    },
  ];

  return (
    <main>
      {projects.map(project => <Project key = {project.id} project = {project} />)}
    </main>
  );
};

export default Portfolio;
