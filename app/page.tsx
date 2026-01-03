'use client';

import LandingSection from './components/landing/LandingSection';
import DashboardSection from './components/dashboard/DashboardSection';
import Footer from './components/footer/Footer';

export default function Home() {
  return (
    <div style={{
      width: '100%',
      padding: 0,
      margin: 0,
      background: 'transparent',
    }}>
      <LandingSection />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '60px',
          position: 'relative',
          zIndex: 10,
        }}
        className="dashboard-wrapper"
      >
        <DashboardSection />
        <Footer />
      </div>
    </div>
  );
}
