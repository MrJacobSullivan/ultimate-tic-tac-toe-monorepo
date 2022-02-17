import * as React from 'react';
import { GITHUB_REPO } from '../../config';
import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footerContaienr}>
      <div className={styles.copyright}>
        <a href={GITHUB_REPO} target="_blank" rel="noopener noreferrer">
          Source Code on GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
