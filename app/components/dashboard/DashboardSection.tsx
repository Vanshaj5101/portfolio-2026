'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import dashboardStyles from '../../styles/dashboard.module.css';
import SummaryView from './SummaryView';
import SkillsView from './SkillsView';
import ExperienceView from './ExperienceView';
import ProjectsView from './ProjectsView';
import { usePersonalizedGreeting } from '../../utils/usePersonalizedGreeting';
import {
  FaUser,
  FaBriefcase,
  FaFolder,
  FaHome,
  FaUsers,
  FaChevronUp,
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaFileAlt
} from 'react-icons/fa';
import { SiTableau } from 'react-icons/si';

export default function DashboardSection() {
  const [activeSection, setActiveSection] = useState('Summary');
  const [showSocialLinks, setShowSocialLinks] = useState(false);
  const [buttonOpacity, setButtonOpacity] = useState(1);
  const { greetingParts } = usePersonalizedGreeting();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Calculate how much of the dashboard is visible
        // If dashboard top is at 40% of viewport (60% visible), hide button
        const visibleThreshold = windowHeight * 0.4;

        if (rect.top <= visibleThreshold) {
          setButtonOpacity(0);
        } else {
          setButtonOpacity(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollClick = () => {
    // Set opacity to 0
    setButtonOpacity(0);

    // Wait a moment for the opacity transition, then scroll
    setTimeout(() => {
      if (sectionRef.current) {
        sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }, 300);
  };

  return (
    <section id="portfolio" ref={sectionRef} className={dashboardStyles.portfolioSection}>
      {/* Scroll Indicator */}
      <button
        onClick={handleScrollClick}
        className={dashboardStyles.scrollIndicator}
        style={{ opacity: buttonOpacity, transition: 'opacity 0.3s ease' }}
        aria-label="Scroll to dashboard"
      >
        <div className={dashboardStyles.scrollIcon}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 11L12 6L17 11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M7 18L12 13L17 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <span className={dashboardStyles.scrollText}>CLICK OR SCROLL</span>
      </button>

      <div className={dashboardStyles.portfolioBox}>
        {/* Mobile Top Navbar - Inside dashboard */}
        <div className={dashboardStyles.mobileTopNav}>
          <div className={dashboardStyles.mobileNavContainer}>
            <button
              onClick={() => setActiveSection('Summary')}
              className={`${dashboardStyles.mobileNavItem} ${
                activeSection === 'Summary' ? dashboardStyles.active : ''
              }`}
            >
              Summary
            </button>
            <button
              onClick={() => setActiveSection('Experience')}
              className={`${dashboardStyles.mobileNavItem} ${
                activeSection === 'Experience' ? dashboardStyles.active : ''
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveSection('Projects')}
              className={`${dashboardStyles.mobileNavItem} ${
                activeSection === 'Projects' ? dashboardStyles.active : ''
              }`}
            >
              Projects
            </button>
            <button
              onClick={() => setActiveSection('Skills')}
              className={`${dashboardStyles.mobileNavItem} ${
                activeSection === 'Skills' ? dashboardStyles.active : ''
              }`}
            >
              Skills
            </button>
          </div>
        </div>
        <div className={dashboardStyles.sidebar}>
          <div className={dashboardStyles.sidebarHeader}>
            <div className={dashboardStyles.logo}>
              <Image
                src="/images/fav.png"
                alt="Vanshaj Gupta"
                width={60}
                height={60}
                style={{ borderRadius: '8px' }}
              />
            </div>
            <span className={dashboardStyles.logoText}>Vanshaj Gupta</span>
          </div>

          <nav className={dashboardStyles.navigation}>
            <button
              onClick={() => setActiveSection('Summary')}
              className={`${dashboardStyles.navItem} ${
                activeSection === 'Summary' ? dashboardStyles.navItemActive : ''
              }`}
            >
              <FaUser size={18} />
              <span>Summary</span>
            </button>
            <button
              onClick={() => setActiveSection('Experience')}
              className={`${dashboardStyles.navItem} ${
                activeSection === 'Experience' ? dashboardStyles.navItemActive : ''
              }`}
            >
              <FaBriefcase size={18} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveSection('Projects')}
              className={`${dashboardStyles.navItem} ${
                activeSection === 'Projects' ? dashboardStyles.navItemActive : ''
              }`}
            >
              <FaFolder size={18} />
              <span>Projects</span>
            </button>
            <button
              onClick={() => setActiveSection('Skills')}
              className={`${dashboardStyles.navItem} ${
                activeSection === 'Skills' ? dashboardStyles.navItemActive : ''
              }`}
            >
              <FaHome size={18} />
              <span>Skills</span>
            </button>
          </nav>

          <div className={dashboardStyles.sidebarFooter}>
            <button
              onClick={() => setShowSocialLinks(!showSocialLinks)}
              className={dashboardStyles.connectButton}
            >
              <FaUsers size={18} />
              <span>Let&apos;s Connect!!!</span>
              <FaChevronUp
                size={16}
                style={{
                  marginLeft: 'auto',
                  transform: showSocialLinks ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease'
                }}
              />
            </button>

            {showSocialLinks && (
              <div className={dashboardStyles.socialLinksDropdown}>
                <a
                  href="https://drive.google.com/file/d/1I59cGZKu6dnwFvqWMydJRNRqbBNBfIiv/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={dashboardStyles.socialLink}
                >
                  <FaFileAlt size={18} />
                  <span>Resume</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/vanshajgupta/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={dashboardStyles.socialLink}
                >
                  <FaLinkedin size={18} />
                  <span>LinkedIn</span>
                </a>
                <a
                  href="mailto:gupta.vanshaj05@gmail.com"
                  className={dashboardStyles.socialLink}
                >
                  <FaEnvelope size={18} />
                  <span>Email</span>
                </a>
                <a
                  href="https://public.tableau.com/app/profile/vanshaj.gupta/vizzes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={dashboardStyles.socialLink}
                >
                  <SiTableau size={18} />
                  <span>Tableau</span>
                </a>
                <a
                  href="https://github.com/Vanshaj5101"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={dashboardStyles.socialLink}
                >
                  <FaGithub size={18} />
                  <span>Github</span>
                </a>
              </div>
            )}
          </div>
        </div>
        <div className={dashboardStyles.mainContent}>
          <div className={dashboardStyles.contentHeader}>
            <div className={dashboardStyles.headerLeft}>
              <h2 className={dashboardStyles.greeting}>
                <span style={{ opacity: 0.4 }}>{greetingParts.text}</span>
                {greetingParts.city && <span style={{ color: '#02142B' }}>{greetingParts.city}</span>}
                <span style={{ opacity: 1.0 }}>{greetingParts.punctuation}</span>
              </h2>
              <span className={dashboardStyles.sectionTitle}>
                {activeSection === 'Summary' && 'SUMMARY'}
                {activeSection === 'Skills' && 'TECHNICAL SKILLS'}
                {activeSection === 'Experience' && 'EXPERIENCE'}
                {activeSection === 'Projects' && 'PROJECTS'}
              </span>
            </div>
            <div className={dashboardStyles.socialButtons}>
              <a
                href="https://www.linkedin.com/in/vanshajgupta/"
                target="_blank"
                rel="noopener noreferrer"
                className={dashboardStyles.socialButton}
                aria-label="LinkedIn"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://github.com/Vanshaj5101"
                target="_blank"
                rel="noopener noreferrer"
                className={dashboardStyles.socialButton}
                aria-label="Github"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="https://public.tableau.com/app/profile/vanshaj.gupta/vizzes"
                target="_blank"
                rel="noopener noreferrer"
                className={dashboardStyles.socialButton}
                aria-label="Tableau"
              >
                <SiTableau size={20} />
              </a>
              <a
                href="https://drive.google.com/file/d/1I59cGZKu6dnwFvqWMydJRNRqbBNBfIiv/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className={dashboardStyles.socialButton}
                aria-label="Resume"
              >
                <FaFileAlt size={20} />
              </a>
              <a
                href="mailto:gupta.vanshaj05@gmail.com"
                className={dashboardStyles.socialButton}
                aria-label="Email"
              >
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          {activeSection === 'Summary' && <SummaryView />}
          {activeSection === 'Skills' && <SkillsView />}
          {activeSection === 'Experience' && <ExperienceView />}
          {activeSection === 'Projects' && <ProjectsView />}
        </div>
      </div>
    </section>
  );
}
