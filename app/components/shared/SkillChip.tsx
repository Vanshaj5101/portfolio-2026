import styles from '../../styles/shared.module.css';

interface SkillChipProps {
  label: string;
}

export default function SkillChip({ label }: SkillChipProps) {
  return (
    <span className={styles.skillChip}>
      {label}
    </span>
  );
}
