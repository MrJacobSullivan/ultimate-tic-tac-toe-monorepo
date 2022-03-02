import * as React from 'react';
import styles from './Page.module.scss';

const Page: React.FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.margin}>{children}</div>
    </div>
  );
};

export default Page;
