import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>Copyright © 2023 The Raw Office</p>
      <p className={styles.authorName}>Miguel Camargo</p>
    </footer>
  );
};

export default Footer;
