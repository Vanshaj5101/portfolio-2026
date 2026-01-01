'use client';

import { useState } from 'react';
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
  const { greetingParts } = usePersonalizedGreeting();

  return (
    <section id="portfolio" className={dashboardStyles.portfolioSection}>
      <div className={dashboardStyles.portfolioBox}>
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
