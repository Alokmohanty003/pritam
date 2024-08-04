import styles from '../Style/Hero.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <img src="/logo.png" alt="Pritam Nayak Couture Logo" className={styles.logo} />
    </header>
  );
};

export default Header;