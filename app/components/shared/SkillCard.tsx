import sharedStyles from '../../styles/shared.module.css';

interface SkillCardProps {
  icon: React.ReactNode;
  name: string;
  description: string;
}

export default function SkillCard({ icon, name, description }: SkillCardProps) {
  return (
    <div className={sharedStyles.skillCard}>
      <div className={sharedStyles.skillCardHeader}>
        <div className={sharedStyles.skillCardIcon}>
          {icon}
        </div>
        <h3 className={sharedStyles.skillCardName}>{name}</h3>
      </div>
      <p className={sharedStyles.skillCardDescription}>{description}</p>
    </div>
  );
}
