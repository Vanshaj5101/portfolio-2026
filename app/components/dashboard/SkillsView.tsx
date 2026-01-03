import { useState } from 'react';
import dashboardStyles from '../../styles/dashboard.module.css';
import skillsData from '../../../data/data.json';
import { getSkillIcon } from '../../utils/skillIcons';
import FilterButton from '../shared/FilterButton';

export default function SkillsView() {
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');

  const categories = ['All', 'Programming', 'Visualization', 'Data Engineering', 'Database', 'Cloud & DevOps'];

  return (
    <div className={dashboardStyles.skillsSection}>
      <div className={dashboardStyles.skillsFilters}>
        {categories.map((category) => (
          <FilterButton
            key={category}
            label={category}
            isActive={activeSkillCategory === category}
            onClick={() => setActiveSkillCategory(category)}
          />
        ))}
      </div>

      <div className={dashboardStyles.skillsScroller}>
        {skillsData.skills
          .filter(skill => activeSkillCategory === 'All' || skill.category === activeSkillCategory)
          .map((skill) => (
            <div key={skill.id} className={dashboardStyles.skillCard}>
              <div className={dashboardStyles.skillHeader}>
                <div className={dashboardStyles.skillIcon}>
                  {getSkillIcon(skill.icon)}
                </div>
                <h3 className={dashboardStyles.skillName}>{skill.name}</h3>
              </div>
              <p className={dashboardStyles.skillDescription}>{skill.description}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
