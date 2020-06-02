import React from 'react';
import styles from './header.modules.css';

import logo from '../assets/favicon.png'

export default function Header () {
  return(
    <div className={styles.header}>
      <img className={styles.logo} src={logo} alt="telly stream logo"/>
      TellyStream
    </div>
  );
}