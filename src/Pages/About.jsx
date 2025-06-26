import React from 'react';
import styles from './About.module.css';
import { motion } from 'framer-motion';
import { HeartHandshake, Lightbulb, Code, BarChart3, Layers3, DatabaseZap } from 'lucide-react';

export default function About() {
  return (
    <section className={styles.about}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        About Me
      </motion.h2>

      <motion.p
        className={styles.intro}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        I'm a tech consultant passionate about solving real-world problems using clean code and thoughtful design.
        I specialize in crafting scalable, data-driven applications that deliver value.
      </motion.p>

      <div className={styles.sections}>
        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h3><HeartHandshake size={20} /> What I Value</h3>
          <ul>
            <li><Lightbulb size={16} /> Creative problem-solving</li>
            <li><Code size={16} /> Clean, scalable code</li>
            <li><BarChart3 size={16} /> Data-backed decisions</li>
            <li><HeartHandshake size={16} /> Empathy and teamwork</li>
          </ul>
        </motion.div>

        <motion.div
          className={styles.card}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <h3><Layers3 size={20} /> Technical Skills</h3>
          <ul>
            <li><Code size={16} /> React, JavaScript, Python</li>
            <li><DatabaseZap size={16} /> MongoDB, PostgreSQL, SQL</li>
            <li><Code size={16} /> Node.js, Express, Firebase</li>
            <li><BarChart3 size={16} /> APIs, data viz, cloud basics</li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
