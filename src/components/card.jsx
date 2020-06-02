import React from 'react';
import styles from './card.modules.css';

import defaultImg from '../assets/home-title-card.png';

export default function Card (props) {

  const homePageOverlay = (
     <div 
      className={styles.overlay}
      onClick={() => {props.onClick(props.overlayTitle)}}
     >
        {props.overlayTitle}
      </div>
  );
  

  return(
    <div className={styles.card}>
      <div className={styles['img-overlay-wrapper']}>
        {props.homePage ? homePageOverlay : null}
        <img
          className={styles['card-image']}
          src={props.img ? props.img : defaultImg}
          alt={props.img ? `${props.title} poster image`: 'default image of a clap board'}
        />
      </div>
      <div className={styles['card-title']} title={props.title}>
        {props.title ? props.title : ''}
      </div>
    </div>
    );
}