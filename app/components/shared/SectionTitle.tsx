import styles from '../../styles/shared.module.css';

interface SectionTitleProps {
  children: React.ReactNode;
}

export default function SectionTitle({ children }: SectionTitleProps) {
  return (
    <h4 className={styles.sectionTitle}>{children}</h4>
  );
}
