import { useState } from 'react';
import Image from 'next/image';
import dashboardStyles from '../../styles/dashboard.module.css';
import skillsData from '../../../data/data.json';

export default function ExperienceView() {
  const [activeExperience, setActiveExperience] = useState(1);

  const handleExperienceScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const cards = container.querySelectorAll('[data-exp-id]');

    let closestCard = null;
    let closestDistance = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const distance = Math.abs(rect.top - containerRect.top);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card;
      }
    });

    if (closestCard) {
      const expId = parseInt(closestCard.getAttribute('data-exp-id') || '1');
      setActiveExperience(expId);
    }
  };

  const scrollToExperience = (expId: number) => {
    const container = document.querySelector(`.${dashboardStyles.experienceContent}`) as HTMLElement;
    const element = document.querySelector(`[data-exp-id="${expId}"]`) as HTMLElement;

    if (container && element) {
      const offsetTop = element.offsetTop - container.offsetTop;

      container.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={dashboardStyles.experienceSection}>
      <div className={dashboardStyles.experienceContainer}>
        {/* Experience Cards */}
        <div
          className={dashboardStyles.experienceContent}
          onScroll={handleExperienceScroll}
          style={{ marginLeft: 0 }}
        >
          {skillsData.experience.map((exp) => (
            <div
              key={exp.id}
              data-exp-id={exp.id}
              className={dashboardStyles.experienceCard}
            >
              {/* Header */}
              <div className={dashboardStyles.expHeader}>
                <div className={dashboardStyles.expImage}>
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    width={80}
                    height={80}
                    className={dashboardStyles.expImageContent}
                  />
                </div>
                <div className={dashboardStyles.expHeaderInfo}>
                  <h3 className={dashboardStyles.expRole}>{exp.role}</h3>
                  <p className={dashboardStyles.expCompany}>{exp.company}</p>
                  <div className={dashboardStyles.expMeta}>
                    <span className={dashboardStyles.expLocation}>{exp.location}</span>
                    <span className={dashboardStyles.expDivider}>•</span>
                    <span className={dashboardStyles.expPeriod}>{exp.period}</span>
                  </div>
                </div>
              </div>

              {/* KPIs */}
              <div className={dashboardStyles.expKpis}>
                {exp.kpis.map((kpi, index) => (
                  <div key={index} className={dashboardStyles.expKpiCard}>
                    <div className={dashboardStyles.expKpiLabel}>{kpi.label}</div>
                    <div className={dashboardStyles.expKpiValue}>{kpi.value}</div>
                    <div className={dashboardStyles.expKpiDesc}>{kpi.description}</div>
                  </div>
                ))}
              </div>

              {/* Skills */}
              <div className={dashboardStyles.expSkills}>
                <h4 className={dashboardStyles.expSkillsTitle}>SKILLS USED</h4>
                <div className={dashboardStyles.expSkillsGrid}>
                  {exp.skills.map((skill, index) => (
                    <span key={index} className={dashboardStyles.skillChip}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              {/* Description */}
              <div className={dashboardStyles.expDescription}>
                <h4 className={dashboardStyles.expDescTitle}>KEY RESPONSIBILITIES</h4>
                <ul className={dashboardStyles.expDescList}>
                  {exp.description.map((desc, index) => (
                    <li key={index} className={dashboardStyles.expDescItem}>{desc}</li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>

        {/* Right Navigation - On this page */}
        <div style={{
          width: '200px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: '2rem',
          paddingLeft: '1rem'
        }}>
          <h3 style={{
            fontFamily: "'PP Nikkei Journal', 'Courier New', monospace",
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(2, 20, 43, 0.6)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1rem',
            width: '100%'
          }}>
            Roles
          </h3>
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.75rem',
            width: '100%'
          }}>
            {skillsData.experience.map((exp) => (
              <button
                key={exp.id}
                onClick={() => scrollToExperience(exp.id)}
                style={{
                  fontFamily: "'PP Nikkei Journal', 'Courier New', monospace",
                  fontSize: '13px',
                  fontWeight: 500,
                  color: activeExperience === exp.id ? '#02142B' : 'rgba(2, 20, 43, 0.4)',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '0.5rem 0',
                  borderLeft: activeExperience === exp.id ? '2px solid #02142B' : '2px solid transparent',
                  paddingLeft: '0.75rem',
                  transition: 'all 0.2s ease',
                  letterSpacing: '0.05rem',
                  lineHeight: 1.3
                }}
              >
                {exp.role}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
