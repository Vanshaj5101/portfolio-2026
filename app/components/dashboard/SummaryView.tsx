import dashboardStyles from '../../styles/dashboard.module.css';
import GanttChart from '../GanttChart';

export default function SummaryView() {
  return (
    <>
      <div className={dashboardStyles.kpiGrid}>
        <div className={dashboardStyles.kpiCard}>
          <h3 className={dashboardStyles.kpiTitle}>Automation</h3>
          <p className={dashboardStyles.kpiValue}>7+</p>
          <p className={dashboardStyles.kpiDescription}>ETL Pipelines and Workflows Engineered</p>
        </div>
        <div className={dashboardStyles.kpiCard}>
          <h3 className={dashboardStyles.kpiTitle}>Dashboards</h3>
          <p className={dashboardStyles.kpiValue}>12+</p>
          <p className={dashboardStyles.kpiDescription}>Data-Driven Dashboards Deployed</p>
        </div>
        <div className={dashboardStyles.kpiCard}>
          <h3 className={dashboardStyles.kpiTitle}>Efficiency</h3>
          <p className={dashboardStyles.kpiValue}>30+</p>
          <p className={dashboardStyles.kpiDescription}>Hours Reclaimed Weekly</p>
        </div>
        <div className={dashboardStyles.kpiCard}>
          <h3 className={dashboardStyles.kpiTitle}>Scale</h3>
          <p className={dashboardStyles.kpiValue}>500K+</p>
          <p className={dashboardStyles.kpiDescription}>Records Processed Across Industries</p>
        </div>
      </div>

      <div className={dashboardStyles.journeySection}>
        <div className={dashboardStyles.journeyHeader}>
          <h2 className={dashboardStyles.journeyTitle}>JOURNEY</h2>
          <div className={dashboardStyles.journeyLegend}>
            <div className={dashboardStyles.legendItem}>
              <div className={`${dashboardStyles.legendDot} ${dashboardStyles.legendEducation}`}></div>
              <span>Education</span>
            </div>
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
