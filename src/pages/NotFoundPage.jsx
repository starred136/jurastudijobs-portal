import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../styles/NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>🚧</h1>
      <h2 className={styles.errorMessage}>Seite im Aufbau</h2>
      <p className={styles.description}>
        Wir bereiten wertvolle Informationen für Sie vor. Bleiben Sie dran!
      </p>
      {/* (Sorry, this page is still under construction. Please check back later.) */}
      <button className={styles.homeButton} onClick={() => navigate('/')}>
        Zur Startseite
      </button>
    </div>
  );
};

export default NotFoundPage;