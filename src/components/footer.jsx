import React from 'react';
import styles from './footer.modules.css';

import fbLogo from '../assets/fb.png';
import twitterLogo from '../assets/twitter.png';
import igLogo from '../assets/ig.png';

import appleAppStore from '../assets/app-store-apple.png';
import googleAppStore from '../assets/app-store-google.png';
import microsoftAppStore from '../assets/app-store-microsoft.png';

const PORTFOLIO_URL = 'https://summerra.in';


export default function Footer ({setSelectedTab}) {
  return(
    <div className={styles.footer}>
      <div className={styles.links}>
        <div className={styles['footer-inner-position']}/>
        <span className={styles['home-link']} onClick={() => setSelectedTab('home')}>Home</span>
        |
        <a href={PORTFOLIO_URL} target='blank'>Terms & Conditions</a>
        |
        <a href={PORTFOLIO_URL} target='blank'>Privacy Policy</a>
        |
        <a href={PORTFOLIO_URL} target='blank'>Contact</a>
      </div>

      <div className={styles['social-media-link-wrapper']}>
        <div className={styles['logos-container']}>
          <a href='https://facebook.com' target='blank'>
            <img className={styles.logo} src={fbLogo} alt={"facebook logo that links to facebook home"}/>
          </a>
          <a href='https://twitter.com' target='blank'>
            <img className={styles.logo} src={twitterLogo} alt={"twitter logo that links to twitter home"}/>
          </a>
          <a href='https://instagram.com' target='blank'>
            <img className={styles.logo} src={igLogo} alt={"instagram logo that links to instagram home"}/>
          </a>
          
        </div>
        <div className={styles['app-store-container']}>
          <a  href='https://www.apple.com/ios/app-store/' target='blank'>
            <img className={styles['app-store']} src={appleAppStore} alt={"facebook logo"}/>
          </a>
          <a href='https://play.google.com/store?hl=en_US' target='blank'>
            <img className={styles['app-store']}src={googleAppStore} alt={"facebook logo"}/></a>
          <a href='https://www.microsoft.com/en-us/store/apps/windows' target='blank'>
            <img className={styles['app-store']} src={microsoftAppStore} alt={"facebook logo"}/>
          </a>
        </div>
      </div>
    </div>
  );
}