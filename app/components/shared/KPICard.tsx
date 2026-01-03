import styles from '../../styles/shared.module.css';

interface KPICardProps {
  title: string;
  value: string;
  description: string;
}

export default function KPICard({ title, value, description }: KPICardProps) {
  return (
    <div className={styles.kpiCard}>
      <h3 className={styles.kpiTitle}>{title}</h3>
      <p className={styles.kpiValue}>{value}</p>
      <p className={styles.kpiDescription}>{description}</p>
    </div>
  );
}
