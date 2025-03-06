import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorMessage}>Page Not Found</h2>
      <p className={styles.description}>
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <button className={styles.homeButton} onClick={() => navigate('/')}>
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
