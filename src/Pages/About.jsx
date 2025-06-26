import React from 'react';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about}>
      <h2 className={styles.heading}>About Me</h2>

      <p className={styles.intro}>
        I'm a passionate technology consultant with a love for clean code, impactful user experiences, and
        solving real-world problems with data. With experience across multiple industries and client
        engagements, I bring both adaptability and creativity to every project.
      </p>

      <div className={styles.sections}>
        <div className={styles.card}>
          <h3>What I Value</h3>
          <ul>
            <li>✨ Collaboration and teamwork</li>
            <li>🚀 Continuous learning</li>
            <li>💡 Clean, scalable solutions</li>
            <li>📊 Data-informed decision making</li>
          </ul>
        </div>

        <div className={styles.card}>
          <h3>Technical Skills</h3>
          <ul>
            <li>React, JavaScript, Python, Java</li>
            <li>SQL, PostgreSQL, MongoDB</li>
            <li>REST APIs, Firebase, AWS</li>
            <li>Data visualization, AI/ML fundamentals</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
