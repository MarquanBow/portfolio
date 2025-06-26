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
    title: 'Pokémon Data Explorer',
    description: 'Search and explore Pokémon stats by type or ability.',
    tech: ['React', 'Axios', 'PokeAPI'],
    github: 'https://github.com/yourname/pokemon-project'
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
