'use client'
// Navigation Bar to be used on each page of application
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { usePathname } from 'next/navigation';



const Navbar: React.FC = () => {
  const pathname = usePathname();

    return (
      <nav className="navbar">
      <ul className="navList">
        <li className={`navItem ${pathname === '/' ? 'active' : ''}`}>
          <Link href="/">About Me</Link>
        </li>
        <li className={`navItem ${pathname === '/projects' ? 'active' : ''}`}>
          <Link href="/projects">My Projects</Link>
        </li>
      </ul>
        <div className="appTitle">Emily O&apos;Heron
        <div className="iconContainer">
          <a href="https://github.com/emilyoheron" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/emilyoheron/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
        </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;
