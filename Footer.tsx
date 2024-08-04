import { CSSProperties } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import styles from '../Style/Footer.module.css';

interface FooterProps {
  style?: CSSProperties;
}

const Footer = ({ style }: FooterProps) => {
  return (
    <footer className={styles.footer} style={style}>
      <p>JOIN OUR SOCIAL MEDIA FOR MORE UPDATES!</p>
      <div className={styles.socialMedia}>
        <a href="https://www.instagram.com/pritamnayakofficial" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>
            <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            INSTAGRAM
          </button>
          
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <button className={styles.button}>
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            TWITTER
          </button>
        </a>
        
      </div>
    </footer>
  );
};

export default Footer;
