import dashboardStyles from '../../styles/dashboard.module.css';
import GanttChart from '../GanttChart';
import KPICard from '../shared/KPICard';

const kpiData = [
  {
    title: 'Automation',
    value: '7+',
    description: 'ETL Pipelines and Workflows Engineered'
  },
  {
    title: 'Dashboards',
    value: '12+',
    description: 'Data-Driven Dashboards Deployed'
  },
  {
    title: 'Efficiency',
    value: '30+',
    description: 'Hours Reclaimed Weekly'
  },
  {
    title: 'Scale',
    value: '500K+',
    description: 'Records Processed Across Industries'
  }
];

export default function SummaryView() {
  return (
    <>
      <div className={dashboardStyles.kpiGrid}>
        {kpiData.map((kpi, index) => (
          <KPICard
            key={index}
            title={kpi.title}
            value={kpi.value}
            description={kpi.description}
          />
        ))}
      </div>

      <div className={dashboardStyles.journeySection}>
        <div className={dashboardStyles.journeyHeader}>
          <h2 className={dashboardStyles.journeyTitle}>JOURNEY</h2>
          <div className={dashboardStyles.journeyLegend}>
            <div className={dashboardStyles.legendItem}>
              <div className={`${dashboardStyles.legendDot} ${dashboardStyles.legendExperience}`}></div>
              <span>Experience</span>
            </div>
          </div>
        </div>
          <GanttChart />

      </div>
    </>
  );
}
