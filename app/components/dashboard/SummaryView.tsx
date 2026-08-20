import dashboardStyles from '../../styles/dashboard.module.css';
import GanttChart from '../GanttChart';
import KPICard from '../shared/KPICard';
import data from '../../../data/data.json';

export default function ProfileView() {
  return (
    <>
      <div className={dashboardStyles.kpiGrid}>
        {data.kpis.map((kpi, index) => (
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
          <h2 className={dashboardStyles.journeyTitle}>JOURNEY AT GLANCE</h2>
          <div className={dashboardStyles.journeyLegend}>
          </div>
        </div>
          <GanttChart />

      </div>
    </>
  );
}
