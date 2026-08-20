import Image from 'next/image';
import dashboardStyles from '../../styles/dashboard.module.css';
import { SiTableau } from 'react-icons/si';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import { Mail, FileText } from 'lucide-react';

export default function Footer() {
  return (
    <footer className={dashboardStyles.footerContainer}>
      {/* Image Container - Full width with centered image */}
      <div className={dashboardStyles.footerImageContainer}>
        <Image
          src="/images/approach_image.png"
          alt="Approach"
          width={1200}
          height={600}
          className={dashboardStyles.approachImage}
        />
      </div>

      {/* Contact Section */}
      <div className={dashboardStyles.contactSection}>
        <div className={dashboardStyles.socialIcons}>
          <a href="https://www.linkedin.com/in/vanshajgupta/" target="_blank" rel="noopener noreferrer" className={dashboardStyles.socialIcon} title="LinkedIn">
            <FaLinkedin size={24} />
          </a>
          <a href="https://github.com/Vanshaj5101" target="_blank" rel="noopener noreferrer" className={dashboardStyles.socialIcon} title="Github">
            <FaGithub size={24} />
          </a>
          <a href="https://public.tableau.com/app/profile/vanshaj.gupta/vizzes" target="_blank" rel="noopener noreferrer" className={dashboardStyles.socialIcon} title="Tableau">
            <SiTableau size={24} />
          </a>
          <a href="https://drive.google.com/file/d/1I59cGZKu6dnwFvqWMydJRNRqbBNBfIiv/view?usp=sharing" target="_blank" rel="noopener noreferrer" className={dashboardStyles.socialIcon} title="Resume">
            <FileText size={24} strokeWidth={1.5} />
          </a>
          <a href="mailto:gupta.vanshaj05@gmail.com" className={dashboardStyles.socialIcon} title="Email">
            <Mail size={24} strokeWidth={1.5} />
          </a>
        </div>
        <div className={dashboardStyles.dividerLine}></div>
        <div className={dashboardStyles.copyrightText}>
          <p>© 2025 All rights reserved</p>
          <p>Website presented to you by Vanshaj Gupta</p>
        </div>
        <div className={dashboardStyles.radialGlow}></div>
      </div>
    </footer>
  );
}
