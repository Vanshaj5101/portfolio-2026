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
    const cards = Array.from(container.querySelectorAll<HTMLElement>('[data-exp-id]'));

    if (cards.length === 0) return;

    let closestCard = cards[0];
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

    const expId = parseInt(closestCard.getAttribute('data-exp-id') || '1');
    setActiveExperience(expId);
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
              <div className={dashboardStyles.expKpiGrid}>
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
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.2rem' }}>
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
        <div className={dashboardStyles.expNavigation}>
          <h3 className={dashboardStyles.expNavTitle}>
            On this Page
          </h3>

          {/* Role Names with Progress Indicator */}
          <div className={dashboardStyles.expNavContent}>
            {/* Progress Indicator Line */}
            <div className={dashboardStyles.expProgressIndicator}>
              {/* Background line */}
              <div className={dashboardStyles.expProgressBackground} />

              {/* Active indicator */}
              <div
                className={dashboardStyles.expProgressActive}
                style={{
                  height: `${100 / skillsData.experience.length}%`,
                  top: `${((activeExperience - 1) / skillsData.experience.length) * 100}%`,
                }}
              />
            </div>

            {/* Role Names */}
            <div className={dashboardStyles.expNavList}>
              {skillsData.experience.map((exp) => (
                <button
                  key={exp.id}
                  onClick={() => scrollToExperience(exp.id)}
                  className={`${dashboardStyles.expNavButton} ${activeExperience === exp.id ? dashboardStyles.active : ''}`}
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
