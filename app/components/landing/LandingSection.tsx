'use client';

import { useEffect, useState } from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import styles from '../../styles/landing.module.css';

export default function LandingSection() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      // Calculate progress: 0 at top, 1 when scrolled one viewport height
      const progress = Math.min(scrollPosition / windowHeight, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate scale: 1 at top, 0.5 at bottom (100% to 50%)
  const scale = 1 - (scrollProgress * 0.5);

  // Calculate opacity: 1 at top, 0 at bottom
  const opacity = 1 - scrollProgress;

  return (
    <main
      className={styles.container}
      style={{
        transform: `scale(${scale})`,
        opacity: opacity,
      }}
    >
      <div className={styles.content}>
        <p className={styles.greeting}>
          HEY, I&apos;M <span className={styles.greetingBreak}></span>VANSHAJ GUPTA
        </p>
        <h1 className={styles.headline}>
          A scrappy <span className={styles.highlight}>data engineer</span> obsessed with turning<br />
          <span className={styles.highlight}>chaotic, messy data into business insights.</span>
        </h1>

        <div className={styles.buttonContainer}>
          <a
            href="https://www.linkedin.com/in/vanshajgupta/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.linkedinButton}
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={24} />
          </a>
          <a
            href="https://drive.google.com/file/d/1I59cGZKu6dnwFvqWMydJRNRqbBNBfIiv/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeButton}
          >
            Resume
          </a>
        </div>
      </div>
    </main>
  );
}
