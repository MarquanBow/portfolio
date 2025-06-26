import React, { useState } from 'react';
import styles from './ExpandableWorkCard.module.css';

export default function ExpandableWorkCard({ company, title, dates, clients }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.card}>
      <div className={styles.header} onClick={() => setExpanded(!expanded)}>
        <div>
          <h3>{title}</h3>
          <p>{company}</p>
          <p className={styles.dates}>{dates}</p>
        </div>
        <span className={styles.toggle}>{expanded ? '▲' : '▼'}</span>
      </div>

      {expanded && (
        <div className={styles.clientList}>
          {clients.map((client, index) => (
            <div key={index} className={styles.clientCard}>
              <h4>{client.name}</h4>
              <p><strong>Duration:</strong> {client.duration}</p>
              <p><strong>Summary:</strong> {client.summary}</p>
              <p><strong>Tech:</strong> {client.tech.join(', ')}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
