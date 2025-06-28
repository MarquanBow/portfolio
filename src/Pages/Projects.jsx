import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../Components/ProjectCard';

const projects = [
  {
    title: 'Expense Tracker',
    description: 'A full-stack app to manage personal expenses and set budgets.',
    tech: ['React', 'Node.js', 'Python', 'MongoDB'],
    github: 'https://github.com/MarquanBow/expense-tracker',
    demo: 'https://marquanexpensetracker.netlify.app/'
  },
  {
    title: 'PokéCloud',
    description: 'Search and explore Pokémon, build a team, a fun way to learn about your favorite Pokémon.',
    tech: ['React', 'Axios', 'PokeAPI', 'GoLang'],
    github: 'https://github.com/MarquanBow/pokemon-explorer',
    demo: 'https://pokeclouds.netlify.app/'
  },
  {
    title: 'Random Password Generator',
    description: 'A JavaScript app to generate secure passwords.',
    tech: ['JavaScript'],
    github: 'https://github.com/MarquanBow/random-password-generator',
    demo: 'https://marquanbow.github.io/random-password-generator/'
  },
  {
    title: 'ToDo List',
    description: 'Simple React app to create a list of tasks, edit and delete them',
    tech: ['React', 'Axios', 'PokeAPI'],
    github: 'https://github.com/MarquanBow/todo-list',
    demo: 'https://marquantodolist.netlify.app/'
  },
  // Add more projects here
];

export default function Projects() {
  return (
    <section className={styles.projects}>
      <h2 className={styles.heading}>Projects</h2>
      <div className={styles.grid}>
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
}
