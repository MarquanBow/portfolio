import React from 'react';
import styles from './Projects.module.css';
import ProjectCard from '../Components/ProjectCard';

const projects = [
  {
    title: 'Expense Tracker',
    description: 'A full-stack app to manage personal expenses and set budgets.',
    tech: ['React', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/yourname/expense-tracker',
    demo: 'https://expense-tracker.netlify.app'
  },
  {
    title: 'Pokémon Data Explorer',
    description: 'Search and explore Pokémon stats by type or ability.',
    tech: ['React', 'Axios', 'PokeAPI'],
    github: 'https://github.com/yourname/pokemon-project'
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
