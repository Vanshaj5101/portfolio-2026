import styles from '../../styles/shared.module.css';

interface FilterButtonProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

export default function FilterButton({ label, isActive, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`${styles.filterButton} ${isActive ? styles.filterButtonActive : ''}`}
    >
      {label}
    </button>
  );
}
