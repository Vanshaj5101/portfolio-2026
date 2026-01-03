import styles from '../../styles/shared.module.css';

interface DescriptionListProps {
  title: string;
  items: string[];
}

export default function DescriptionList({ title, items }: DescriptionListProps) {
  return (
    <div className={styles.descriptionContainer}>
      <h4 className={styles.descriptionTitle}>{title}</h4>
      <ul className={styles.descriptionList}>
        {items.map((item, index) => (
          <li key={index} className={styles.descriptionItem}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
