import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>lamadev</div>
      <div className={styles.text}>
        Lama Creative Thoughts © All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
