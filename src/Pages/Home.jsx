import React from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.content}
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
      
<motion.img
  src="../public/assets/Profile.jpg"
  alt="Marquan Bowman"
  className={styles.profile}
  initial={{ opacity: 0, scale: 0.9 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.6 }}
/>
        <h1 className={styles.name}>Marquan Bowman</h1>
        <h2 className={styles.title}>Software Engineer</h2>
        <p className={styles.tagline}>
          Innovative and results-driven software developer. Designing, implementing, and optimizing scalable software solutions
        </p>
        <div className={styles.buttons}>
          <Link to="/projects" className={styles.button}>View Projects</Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className={styles.buttonOutline}>View Resume</a>
        </div>
      </motion.div>

      <svg className={styles.svg} viewBox="0 0 1440 320">
        <path fill="#e8f0ff" d="M0,128L80,112C160,96,320,64,480,85.3C640,107,800,181,960,213.3C1120,245,1280,235,1360,229.3L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z" />
      </svg>
    </section>
  );
}
