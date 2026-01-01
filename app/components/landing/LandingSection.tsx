'use client';

import { useEffect, useState } from 'react';
import styles from '../../styles/landing.module.css';

interface LandingSectionProps {
  onScrollClick: () => void;
}

export default function LandingSection({ onScrollClick }: LandingSectionProps) {
  const [scrollOpacity, setScrollOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = 450; // Fade out completely when dashboard is fully visible
      const opacity = Math.max(0, 1 - scrollPosition / maxScroll);
      setScrollOpacity(opacity);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className={styles.container}>
      <div className={styles.content} style={{ opacity: scrollOpacity }}>
        <p className={styles.greeting}>HEY, I&apos;M VANSHAJ GUPTA</p>
        <h1 className={styles.headline}>
          A scrappy <span className={styles.highlight}>data engineer</span> obsessed with turning<br />
          <span className={styles.highlight}>chaotic, messy data into business insights.</span>
        </h1>

        <button onClick={onScrollClick} className={styles.scrollIndicator}>
          <div className={styles.scrollIcon}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M7 11L12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 18L12 13L17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className={styles.scrollText}>SCROLL</span>
        </button>
      </div>
    </main>
  );
}
