import React from 'react';
import styles from '../Style/ThankYou.module.css'; // Import the CSS module if you have specific styles

const ThankYou = () => {
  return (
    <div className={styles.thankYouContainer}>
      <h1 className={styles.thankYouTitle}>Thank You!</h1>
      <p className={styles.thankYouMessage}>
        Your submission has been received. We will get back to you shortly.
      </p>
    </div>
  );
};

export default ThankYou;
