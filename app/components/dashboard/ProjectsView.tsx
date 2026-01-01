import { useState } from 'react';
import Image from 'next/image';
import dashboardStyles from '../../styles/dashboard.module.css';
import skillsData from '../../../data/data.json';

export default function ProjectsView() {
  const [activeProjectCategory, setActiveProjectCategory] = useState('All');

  const categories = ['All', 'Data Visualization', 'ML & AI', 'Cloud & Infrastructure'];

  return (
    <div className={dashboardStyles.projectsSection}>
      <div className={dashboardStyles.skillsFilters}>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveProjectCategory(category)}
            className={`${dashboardStyles.filterButton} ${
              activeProjectCategory === category ? dashboardStyles.filterButtonActive : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className={dashboardStyles.projectsGrid}>
        {skillsData.projects
          .filter(project => activeProjectCategory === 'All' || project.category.includes(activeProjectCategory))
          .map((project) => (
          <a
            key={project.id}
            href={project.link}
            className={dashboardStyles.projectCard}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className={dashboardStyles.projectImage}>
              <Image
                src={project.images[0]}
                alt={project.name}
                width={400}
                height={250}
                className={dashboardStyles.projectImageContent}
              />
            </div>
            <div className={dashboardStyles.projectContent}>
                <h3 className={dashboardStyles.projectTitle}>{project.name}</h3>
                <div className={dashboardStyles.projectSkills}>
                {project.tags.map((tag, index) => (
                  <span key={index} className={dashboardStyles.skillChip}>
                    {tag}
                  </span>
                ))}
              </div>
              <p className={dashboardStyles.projectDescription}>{project.description}</p>

            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
