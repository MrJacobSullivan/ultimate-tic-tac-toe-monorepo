import * as React from 'react';
import styles from './Main.module.scss';

const Main: React.FC = ({ children }) => (
  <div className={styles.mainContainer}>{children}</div>
);

export default Main;
