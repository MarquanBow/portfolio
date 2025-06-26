import { Link, useLocation } from 'react-router-dom';
import styles from './Navbar.module.css';

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Work', path: '/work' },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <nav className={styles.nav}>
      <div className={styles.logoContainer}>
        <img src="/logo.png" alt="MB Logo" className={styles.logo} />
      </div>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li key={link.name}>
            <Link
              to={link.path}
              className={`${styles.navLink} ${location.pathname === link.path ? styles.active : ''}`}
            >
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
