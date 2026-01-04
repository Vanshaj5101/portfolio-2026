'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import dashboardStyles from '../../styles/dashboard.module.css';
import ProfileView from './SummaryView';
import SkillsView from './SkillsView';
import ExperienceView from './ExperienceView';
import ProjectsView from './ProjectsView';
import { usePersonalizedGreeting } from '../../utils/usePersonalizedGreeting';
import {
  User,
  Briefcase,
  FolderOpen,
  Sparkles,
  Mail,
  FileText
} from 'lucide-react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiTableau } from 'react-icons/si';

export default function DashboardSection() {
  const [activeSection, setActiveSection] = useState('Profile');
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
        // Get the scroll indicator element to find where portfolioBox starts
        const scrollIndicator = sectionRef.current.querySelector(`.${dashboardStyles.scrollIndicator}`);

        if (scrollIndicator) {
          // Get the position of the scroll indicator (which is where portfolioBox starts after it)
          const indicatorRect = scrollIndicator.getBoundingClientRect();
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

          // Calculate the target scroll position (where the indicator is + its height + gap)
          const targetPosition = indicatorRect.bottom + scrollTop;

          // Smooth scroll to that position
          window.scrollTo({
            top: targetPosition, // Subtract 20px for the gap between indicator and box
            behavior: 'smooth'
          });
        } else {
          // Fallback to original behavior
          sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
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
              onClick={() => setActiveSection('Profile')}
              className={`${dashboardStyles.mobileNavItem} ${
                activeSection === 'Profile' ? dashboardStyles.active : ''
              }`}
            >
              Profile
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
                width={42}
                height={42}
                style={{ borderRadius: '8px' }}
              />
            </div>
            <span className={dashboardStyles.logoText}>Vanshaj Gupta</span>
          </div>

          <nav className={dashboardStyles.navigation}>
            <button
              onClick={() => setActiveSection('Profile')}
              className={`${dashboardStyles.navItem} ${
                activeSection === 'Profile' ? dashboardStyles.navItemActive : ''
              }`}
            >
              <User size={24} strokeWidth={activeSection === 'Profile' ? 2 : 1.5} />
              <span>Profile</span>
            </button>
            <button
              onClick={() => setActiveSection('Experience')}
              className={`${dashboardStyles.navItem} ${
                activeSection === 'Experience' ? dashboardStyles.navItemActive : ''
              }`}
            >
              <Briefcase size={24} strokeWidth={activeSection === 'Experience' ? 2 : 1.5} />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveSection('Projects')}
              className={`${dashboardStyles.navItem} ${
                activeSection === 'Projects' ? dashboardStyles.navItemActive : ''
              }`}
            >
              <FolderOpen size={24} strokeWidth={activeSection === 'Projects' ? 2 : 1.5} />
              <span>Projects</span>
            </button>
            <button
              onClick={() => setActiveSection('Skills')}
              className={`${dashboardStyles.navItem} ${
                activeSection === 'Skills' ? dashboardStyles.navItemActive : ''
              }`}
            >
              <Sparkles size={24} strokeWidth={activeSection === 'Skills' ? 2 : 1.5} />
              <span>Skills</span>
            </button>
          </nav>
        </div>
        <div className={dashboardStyles.mainContentWrapper}>
          <div className={dashboardStyles.mainContent}>
            <div className={dashboardStyles.contentHeader}>
            <div className={dashboardStyles.headerLeft}>
              <h2 className={dashboardStyles.greeting}>
                <span style={{ opacity: 0.4 }}>{greetingParts.text}</span>
                {greetingParts.city && <span style={{ color: '#02142B' }}>{greetingParts.city}</span>}
                <span style={{ opacity: 1.0 }}>{greetingParts.punctuation}</span>
              </h2>
              <span className={dashboardStyles.sectionTitle}>
                {activeSection === 'Profile' && 'PROFILE'}
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
                <FileText size={20} strokeWidth={1.5} />
              </a>
              <a
                href="mailto:gupta.vanshaj05@gmail.com"
                className={dashboardStyles.socialButton}
                aria-label="Email"
              >
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {activeSection === 'Profile' && <ProfileView />}
          {activeSection === 'Skills' && <SkillsView />}
          {activeSection === 'Experience' && <ExperienceView />}
          {activeSection === 'Projects' && <ProjectsView />}
          </div>
        </div>
      </div>
    </section>
  );
}
