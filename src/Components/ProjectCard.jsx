import React from 'react';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <div className={styles.card}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.techList}>
        {tech.map((item, index) => (
          <span key={index} className={styles.tech}>
            {item}
          </span>
        ))}
      </div>

      <div className={styles.links}>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.button}>
            GitHub
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.button}>
            Demo
          </a>
        )}
      </div>
    </div>
  );
}

