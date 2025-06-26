import React from 'react';
import styles from './ProjectCard.module.css';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectCard({ title, description, tech, github, demo }) {
  return (
    <motion.div
      className={styles.card}
      whileHover={{ scale: 1.03 }}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.description}>{description}</p>

      <div className={styles.techList}>
        {tech.map((item, index) => (
          <span key={index} className={styles.tech}>{item}</span>
        ))}
      </div>

      <div className={styles.links}>
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <Github size={18} />
          </a>
        )}
        {demo && (
          <a href={demo} target="_blank" rel="noopener noreferrer" className={styles.iconLink}>
            <ExternalLink size={18} />
          </a>
        )}
      </div>
    </motion.div>
  );
}
