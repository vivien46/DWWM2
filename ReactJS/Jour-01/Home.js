import React from 'react';
import styles from '../styles/Home.module.css';
import 'antd/dist/antd.css';
import { Popover, Button } from 'antd';
import Movie from '../components/Movie';

export default function Home() {
  const movies = [];

  for (let i = 0; i < 10; i++) {
    movies.push(<Movie key={i} />);
  }

  const popoverContent = (
    <div className={styles.popoverContent}>
      <span>Movie 1</span>
      <span>Movie 2</span>
      <span>Movie 3</span>
      <span>Movie 4</span>
    </div>
  );

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <div className={styles.logoContainer}>
          <img src="logo.png" alt="logo" />
          <p className={styles.title}>MOVIZ</p>
        </div>
        <Popover title="Liked Movies" content={popoverContent} trigger="click">
          <Button>❤️ 4 movie(s)</Button>
        </Popover>
      </div>
      <div className={styles.release}>LAST RELEASES</div>
      <div className={styles.moviesContainer}>{movies}</div>
    </div>
  );
}
