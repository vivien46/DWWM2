import React from 'react';
import styles from '../styles/Movie.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Movie() {
  const stars = [];

  for (let i = 0; i < 10; i++) {
    stars.push(<FontAwesomeIcon icon={faStar} key={i} />);
  }

  return (
    <div className={styles.card}>
      <img className={styles.image} src="poster.jpg" alt="poster" />
      <div className={styles.textContainer}>
        <span className={styles.name}>Name</span>
        <p className={styles.description}>Description</p>
      </div>
      <span className={styles.vote}>{stars} (vote count)</span>
    </div>
  );
}

export default Movie;
