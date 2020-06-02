import React from 'react';
import styles from './content.modules.css';

import Card from './card.jsx';

export default function Content (props) {

  const cards = (
    props.titlesToRender.map(title => {
      return <Card 
        key={title.title}
        img={title.images?.['Poster Art'].url}
        title={title.title}
        overlayTitle={title.overlayTitle}
        onClick={title.onClick}
        homePage={title.homePage}
      />
    })
  )

  return(
    <div className={styles.content}>
      {props.status === 'loading' ? 
        <div className={styles['status-wrapper']}>Loading...<div className={styles.spinner}/></div>
        : null}
      {props.status === 'error' ? 
        <div className={styles['status-wrapper']}>Oops! Something went wrong.</div>
        : null}
      {props.status === 'success' ? 
        <>
          <div className={styles['page-title']}>
            {props.pageTitle === 'home' ? 'HOME PAGE' : `POPULAR ${props.pageTitle}`}
          </div>
          <ul className={styles['title-list']}>
            {cards}
          </ul>
        </>
        : null}
    </div>
  );
}