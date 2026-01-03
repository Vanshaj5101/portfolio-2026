import { useState } from 'react';
import Image from 'next/image';
import dashboardStyles from '../../styles/dashboard.module.css';
import skillsData from '../../../data/data.json';
import KPICard from '../shared/KPICard';
import SkillChip from '../shared/SkillChip';
import DescriptionList from '../shared/DescriptionList';
import SectionTitle from '../shared/SectionTitle';

export default function ExperienceView() {
  const [activeExperience, setActiveExperience] = useState(1);

  const handleExperienceScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const cards = container.querySelectorAll('[data-exp-id]');

    let closestCard: HTMLElement | null = null;
    let closestDistance = Infinity;

    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      const distance = Math.abs(rect.top - containerRect.top);

      if (distance < closestDistance) {
        closestDistance = distance;
        closestCard = card as HTMLElement;
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
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
                {exp.kpis.map((kpi, index) => (
                  <KPICard
                    key={index}
                    title={kpi.label}
                    value={kpi.value}
                    description={kpi.description}
                  />
                ))}
              </div>

              {/* Skills */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <SectionTitle>SKILLS USED</SectionTitle>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.skills.map((skill, index) => (
                    <SkillChip key={index} label={skill} />
                  ))}
                </div>
              </div>

              {/* Description */}
              <DescriptionList
                title="KEY RESPONSIBILITIES"
                items={exp.description}
              />

            </div>
          ))}
        </div>

        {/* Right Navigation - On this page with progress indicator */}
        <div style={{
          width: '200px',
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          paddingTop: '2rem',
          paddingLeft: '0.5rem'
        }}>
          <h3 style={{
            fontFamily: "'PP Nikkei Journal', 'Courier New', monospace",
            fontSize: '12px',
            fontWeight: 500,
            color: 'rgba(2, 20, 43, 0.6)',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1rem'
          }}>
            On this Page
          </h3>

          {/* Role Names with Progress Indicator */}
          <div style={{
            display: 'flex',
            flexDirection: 'row',
            gap: '1rem',
            alignItems: 'stretch'
          }}>
            {/* Progress Indicator Line */}
            <div style={{
              width: '3px',
              flexShrink: 0,
              display: 'flex',
              position: 'relative'
            }}>
              {/* Background line */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                backgroundColor: 'rgba(2, 20, 43, 0.1)',
                borderRadius: '2px'
              }} />

              {/* Active indicator */}
              <div style={{
                position: 'absolute',
                width: '100%',
                height: `${100 / skillsData.experience.length}%`,
                backgroundColor: '#02142B',
                borderRadius: '2px',
                top: `${((activeExperience - 1) / skillsData.experience.length) * 100}%`,
                transition: 'top 0.3s ease'
              }} />
            </div>

            {/* Role Names */}
            <div style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              flex: 1
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
                    padding: '0.5rem 0',
                    transition: 'all 0.2s ease',
                    letterSpacing: '0.05rem',
                    lineHeight: 1.3,
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left'
                  }}
                >
                  {exp.role}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
