import * as React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footerContaienr}>
      <span className={styles.copyright}>
        &copy; {year} Jacob Sullivan. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
