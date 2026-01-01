'use client';

import LandingSection from './components/landing/LandingSection';
import DashboardSection from './components/dashboard/DashboardSection';
import Footer from './components/footer/Footer';

export default function Home() {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <LandingSection onScrollClick={scrollToPortfolio} />
      <DashboardSection />
      <Footer />
    </>
  );
}
