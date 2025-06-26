import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.name}>Marquan Bowman</h1>
        <h2 className={styles.title}>Data-Focused Technology Consultant</h2>
        <p className={styles.tagline}>
          Blending software engineering and analytics to solve real-world problems and deliver client impact.
        </p>
        <div className={styles.buttons}>
          <Link to="/projects" className={styles.button}>
            View Projects
          </Link>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.buttonOutline}
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
}
