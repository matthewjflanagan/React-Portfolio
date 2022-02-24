import React from 'react';
import Project from '../components/Project';
import HR from '../assets/HRManagementSystem.png';
import TOYS from '../assets/openingpagewithoutdropdown.png';
import TECH from '../assets/techBlog.png';
import QUIZ from '../assets/runningapp.png';
import SQUID from '../assets/squid-games.PNG';

const Portfolio = () => {
  const projects = [
    {
      id : 1,
      name : 'Toysplanet',
      img : TOYS,
      repo : 'https://github.com/Chrisolsen1993/Toysplanet',
      description : 'HTML/CSS/Materialize/Javascript/Node.js/SQL/Handlebars'
    },
    {
      id : 2,
      name : 'HR Management System',
      img : HR,
      repo : 'https://github.com/alifaizan786-op/HR_Management_System',
      description : 'HTML/CSS/Materialize/Javascript/Node.js/SQL/Handlebars'
    },
    {
      id : 3,
      name : 'Tech Blog',
      img : TECH,
      repo : 'https://github.com/matthewjflanagan/Tech-Blog',
      description : 'HTML/CSS/Materialize/Javascript/Node.js/SQL/Handlebars'
    },
    {
      id : 4,
      name : 'Code Quiz',
      img : QUIZ,
      repo : 'https://github.com/matthewjflanagan/Code-Quiz',
      description : 'HTML/CSS/Javascript'
    },
    {
      id : 5,
      name : 'Squid Games',
      img : SQUID,
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
