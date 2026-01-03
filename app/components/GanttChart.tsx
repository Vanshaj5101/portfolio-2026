'use client';

import { useEffect, useRef, useState } from 'react';
import styles from '../styles/gantt.module.css';

interface GanttItem {
  id: string;
  title: string;
  type: 'education' | 'work';
  startDate: string; // ISO format: 'YYYY-MM-DD'
  endDate: string; // ISO format: 'YYYY-MM-DD' or 'present'
}

const ganttData: GanttItem[] = [
  // {
  //   id: 'bachelors',
  //   title: "BE Computer Engineering",
  //   type: 'education',
  //   startDate: '2019-06-01',
  //   endDate: '2023-06-30'
  // },
  {
    id: 'intern',
    title: 'Data Engineer',
    type: 'work',
    startDate: '2023-02-01',
    endDate: '2023-04-30'
  },
  // {
  //   id: 'masters',
  //   title: "MCS Computer Science",
  //   type: 'education',
  //   startDate: '2023-08-01',
  //   endDate: '2025-05-31'
  // },
  {
    id: 'fulltime',
    title: 'Data Engineer',
    type: 'work',
    startDate: '2024-01-01',
    endDate: '2025-06-30'
  },
  {
    id: 'analyst',
    title: 'Business and Data Analyst 2',
    type: 'work',
    startDate: '2025-06-01',
    endDate: 'present'
  }
];

export default function GanttChart() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barsContainerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [barSpacing, setBarSpacing] = useState(60);

  // Timeline boundaries
  const timelineStart = new Date('2023-01-01').getTime();
  const timelineEnd = new Date().getTime(); // Current date
  const totalMilliseconds = timelineEnd - timelineStart;

  // Year markers (Jan 1st of each year)
  const yearMarkers = [2023, 2024, 2025, 2026];

  // Handle container resize and calculate bar spacing
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
      if (barsContainerRef.current) {
        const height = barsContainerRef.current.offsetHeight;
        // Distribute bars evenly across the full height
        const spacing = height / ganttData.length;
        setBarSpacing(spacing);
      }
    };

    updateDimensions();
    // Add a small delay to ensure DOM is fully rendered
    const timeoutId = setTimeout(updateDimensions, 100);
    window.addEventListener('resize', updateDimensions);
    return () => {
      window.removeEventListener('resize', updateDimensions);
      clearTimeout(timeoutId);
    };
  }, []);

  // Calculate position percentage
  const calculatePosition = (dateString: string): number => {
    const date = dateString === 'present'
      ? new Date().getTime() // Use actual current date for "present"
      : new Date(dateString).getTime();

    return ((date - timelineStart) / totalMilliseconds) * 100;
  };

  // Calculate year marker position
  const calculateYearPosition = (year: number): number => {
    const yearDate = new Date(`${year}-01-01`).getTime();
    return ((yearDate - timelineStart) / totalMilliseconds) * 100;
  };

  // Format date range for label
  const formatDateRange = (startDate: string, endDate: string): string => {
    // Parse dates as UTC to avoid timezone issues
    const start = new Date(startDate + 'T00:00:00Z');
    const end = endDate === 'present' ? new Date() : new Date(endDate + 'T00:00:00Z');

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const startStr = `${months[start.getUTCMonth()]} ${start.getUTCFullYear()}`;
    const endStr = endDate === 'present'
      ? 'Present'
      : `${months[end.getUTCMonth()]} ${end.getUTCFullYear()}`;

    return `${startStr} - ${endStr}`;
  };

  return (
    <div className={styles.ganttContainer}>
      <div className={styles.ganttWrapper} ref={containerRef}>
        {/* Gantt bars */}
        <div className={styles.barsContainer} ref={barsContainerRef}>
          {ganttData.map((item, index) => {
            const leftPosition = calculatePosition(item.startDate);
            const rightPosition = calculatePosition(item.endDate);
            const width = rightPosition - leftPosition;

            return (
              <div
                key={item.id}
                className={styles.barWrapper}
                style={{
                  top: `${index * barSpacing}px`,
                  height: `${barSpacing}px`
                }}
              >
                {/* Bar */}
                <div
                  className={`${styles.bar} ${
                    item.type === 'education' ? styles.barEducation : styles.barWork
                  }`}
                  style={{
                    left: `${leftPosition}%`,
                    width: `${width}%`,
                    minWidth: '2px' // Ensure bars are always visible
                  }}
                />

                {/* Label */}
                <div
                  className={`${styles.label} ${
                    item.type === 'education' ? styles.labelEducation : styles.labelWork
                  }`}
                  style={{
                    left: `${leftPosition}%`
                  }}
                >
                  <div className={styles.labelTitle}>{item.title}</div>
                  <div className={styles.labelDate}>
                    {formatDateRange(item.startDate, item.endDate)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* X-axis */}
        <div className={styles.xAxis}>
          <div className={styles.axisLine} />

          {/* Year markers */}
          {yearMarkers.map((year) => {
            const position = calculateYearPosition(year);

            return (
              <div
                key={year}
                className={styles.yearMarker}
                style={{ left: `${position}%` }}
              >
                <div className={styles.yearTick} />
                <div className={styles.yearLabel}>{year}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}


