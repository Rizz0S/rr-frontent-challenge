import React, { useEffect, useState } from 'react';

import styles from './themes.modules.css';

import Header from './components/header.jsx';
import Footer from './components/footer.jsx';
import Content from './components/content.jsx';

const API = 'https://raw.githubusercontent.com/StreamCo/react-coding-challenge/master/feed/sample.json';

const MAX_DISPLAY_NUM = 21;
const MIN_YEAR = 2010;

export default function App () {

  const [status, setStatus] = useState('loading');
  const [selectedTab, setSelectedTab] = useState('home');
  const [titles, setTitles] = useState([]);

  let titlesToRender = [];

  // conditionally pass down filtered & sorted movies and series titles respectively
  if (selectedTab === 'movies') {
    titlesToRender = titles.filter(title => {
      return title.programType === 'movie' && title.releaseYear >= MIN_YEAR
    })
      .sort()
      .slice(MAX_DISPLAY_NUM);
  } else if (selectedTab === 'series') {
    titlesToRender = titles.filter(title => {
      return title.programType === 'series' && title.releaseYear >= MIN_YEAR
    })
      .sort()
      .slice(MAX_DISPLAY_NUM);
  } else if (selectedTab === 'home') { // pass down specialized title objects for home page
    titlesToRender = [{
        title: 'Popular Movies',
        overlayTitle: 'movies',
        onClick: setSelectedTab,
        homePage: true
      },
      {
        title: 'Popular Series',
        overlayTitle: 'series',
        onClick: setSelectedTab,
        homePage: true
    }]
  } 

  // fetches movie & series data on page load
  useEffect(() => {
    fetch(API)
      .then(resp => { 
        if (resp.ok) {
          resp.json()
          .then(data => setTitles(data.entries))
          .then(setStatus('success'))
        } else {
          setError('error');
        }
      }).catch(() => setStatus('error'))
     }, [])

  return(
    <div className={styles.app}>
      <Header />
      <div className={styles['content-footer-wrapper']}>
        <Content
          titlesToRender={titlesToRender}
          pageTitle={selectedTab}
          status={status}
        />
        <Footer
          setSelectedTab={setSelectedTab}
        />
      </div>
    </div>
  );
}